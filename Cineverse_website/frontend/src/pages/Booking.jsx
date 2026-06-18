import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bookingService from '../services/bookingService';
import movieService from '../services/movieService';
import { getMockMovieById } from '../services/mockMovies';
import { FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import '../styles/Booking.css';

const theatersByCity = {
  'Chandigarh': [
    { id: 't-chd1', name: 'PVR Elante Mall', area: 'Industrial Area Phase 1' },
    { id: 't-chd2', name: 'Cinepolis CP67 Mall', area: 'Sector 67, Mohali' },
    { id: 't-chd3', name: 'Wave Cinema', area: 'City Emporium Mall' },
    { id: 't-chd4', name: 'PVR Centra Mall', area: 'Industrial Area Phase 1' },
    { id: 't-chd5', name: 'Piccadily Square', area: 'Sector 34-A' }
  ],
  'Delhi NCR': [
    { id: 't-del1', name: 'PVR Director\'s Cut', area: 'Ambience Mall, Vasant Kunj' },
    { id: 't-del2', name: 'PVR Plaza', area: 'Connaught Place' },
    { id: 't-del3', name: 'Cinepolis', area: 'DLF Avenue, Saket' },
    { id: 't-del4', name: 'PVR Superplex', area: 'Logix City Centre, Noida' }
  ],
  'Mumbai': [
    { id: 't-mum1', name: 'PVR Maison', area: 'Jio World Drive, BKC' },
    { id: 't-mum2', name: 'INOX Insignia', area: 'Atria Mall, Worli' },
    { id: 't-mum3', name: 'Cinepolis', area: 'Fun Republic, Andheri' }
  ],
  'Bengaluru': [
    { id: 't-blr1', name: 'PVR Director\'s Cut', area: 'Forum Rex Walk' },
    { id: 't-blr2', name: 'INOX Lido', area: 'Lido Mall, Trinity Circle' },
    { id: 't-blr3', name: 'Cinepolis', area: 'Forum Shantiniketan' }
  ]
};

const showtimesList = ['10:00 AM', '1:30 PM', '4:45 PM', '7:00 PM', '10:15 PM'];

const Booking = () => {
  const { showId } = useParams();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [movie, setMovie] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);

  // Step 1 States
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem('selectedCity') || 'Chandigarh'
  );
  
  const dates = React.useMemo(() => {
    const list = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < 3; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      list.push({
        label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`,
        dateStr: d.toDateString(),
        rawDate: d
      });
    }
    return list;
  }, []);

  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const handleCityChange = (e) => {
      setSelectedCity(e.detail);
      setSelectedTheatre(null);
      setSelectedShow(null);
    };
    
    window.addEventListener('cityChanged', handleCityChange);
    return () => {
      window.removeEventListener('cityChanged', handleCityChange);
    };
  }, []);

  useEffect(() => {
    initializeBooking();
  }, [showId]);

  const initializeBooking = async () => {
    setLoading(true);
    try {
      try {
        const response = await movieService.getMovieById(showId);
        setMovie(response.data.data);
      } catch (apiError) {
        const mockMovie = getMockMovieById(showId);
        if (mockMovie) {
          setMovie(mockMovie);
        } else {
          setMovie({
            id: showId,
            title: 'Selected Movie',
            posterUrl: ''
          });
        }
      }
      
      const mockSeats = generateMockSeats();
      setSeats(mockSeats);
      
      setStep(1);
    } catch (error) {
      console.error('Failed to initialize booking:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateMockSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const seatsPerRow = 12;
    const allSeats = [];

    rows.forEach(row => {
      for (let i = 1; i <= seatsPerRow; i++) {
        allSeats.push({
          id: `${row}${i}`,
          row,
          number: i,
          status: Math.random() > 0.7 ? 'booked' : 'available'
        });
      }
    });

    return allSeats;
  };

  const handleSeatClick = (seat) => {
    if (seat.status === 'booked') return;

    if (selectedSeats.find(s => s.id === seat.id)) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getShowTimeDate = () => {
    if (!selectedDate || !selectedShow) return new Date().toISOString();
    const d = new Date(selectedDate.rawDate);
    const [time, modifier] = selectedShow.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (modifier === 'PM' && hours < 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;
    d.setHours(hours, minutes, 0, 0);
    return d.toISOString();
  };

  const handleConfirmBooking = async () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }

    setLoading(true);
    try {
      const seatIds = selectedSeats.map(s => s.id);
      try {
        await bookingService.lockSeats(showId, seatIds);
        const bookingData = { showId, seatIds, totalAmount: calculateTotal() };
        const response = await bookingService.createBooking(bookingData);
        await bookingService.confirmBooking(response.data.data.id);
      } catch (apiError) {
        console.info('Booking service unavailable, using demo mode');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setStep(3);

      const demoBooking = {
        id: Date.now(),
        movieTitle: movie?.title || 'Selected Movie',
        theatreName: selectedTheatre?.name || 'TicketShow Theatre',
        screenName: 'Screen 2',
        showTime: getShowTimeDate(),
        seatNumbers: selectedSeats.map(s => s.id),
        totalAmount: calculateTotal(),
        status: 'CONFIRMED'
      };
      const existing = JSON.parse(localStorage.getItem('demoBookings') || '[]');
      localStorage.setItem('demoBookings', JSON.stringify([demoBooking, ...existing]));

      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    return selectedSeats.length * 250; // ₹250 per seat
  };

  const handleProceedToSeats = () => {
    if (!selectedTheatre || !selectedShow) {
      alert('Please select a theatre and showtime');
      return;
    }
    setStep(2);
  };

  if (loading && step === 1) {
    return (
      <div className="booking-page">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="container">
        <div className="booking-header">
          <h1>Book Your Show</h1>
          <p>{movie?.title}</p>
        </div>

        <div className="booking-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <span className="step-number">1</span>
            <span>Select Show</span>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <span className="step-number">2</span>
            <span>Select Seats</span>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span>Confirm</span>
          </div>
        </div>

        <div className="booking-content">
          {step === 1 && (
            <div className="showtime-selection glass">
              <div className="date-selector-bar">
                {dates.map((d) => (
                  <button
                    key={d.dateStr}
                    className={`date-pill ${selectedDate?.dateStr === d.dateStr ? 'active' : ''}`}
                    onClick={() => setSelectedDate(d)}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              <div className="theatres-list-container">
                <h2>Theatres in {selectedCity}</h2>
                <div className="theatres-list">
                  {(theatersByCity[selectedCity] || theatersByCity['Chandigarh']).map((theatre) => (
                    <div key={theatre.id} className="theatre-card">
                      <div className="theatre-details">
                        <h4>{theatre.name}</h4>
                        <p className="theatre-area"><FaMapMarkerAlt /> {theatre.area}</p>
                      </div>
                      <div className="showtimes-chips">
                        {showtimesList.map((time) => {
                          const isSelected = selectedTheatre?.id === theatre.id && selectedShow === time;
                          return (
                            <button
                              key={time}
                              className={`showtime-chip ${isSelected ? 'active' : ''}`}
                              onClick={() => {
                                setSelectedTheatre(theatre);
                                setSelectedShow(time);
                              }}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="selection-summary-footer">
                <div className="summary-info">
                  {selectedTheatre && selectedShow ? (
                    <p>
                      Selected: <strong>{selectedTheatre.name}</strong> at <strong>{selectedShow}</strong> on <strong>{selectedDate.label}</strong>
                    </p>
                  ) : (
                    <p className="select-prompt">Please select a theatre and showtime to proceed.</p>
                  )}
                </div>
                <button
                  className="btn btn-primary btn-proceed"
                  onClick={handleProceedToSeats}
                  disabled={!selectedTheatre || !selectedShow}
                >
                  Proceed to Seats
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="seat-layout glass">
              <div className="seat-layout-header">
                <h3>{selectedTheatre?.name} - {selectedShow}</h3>
                <button onClick={() => setStep(1)} className="btn-back">Change Show</button>
              </div>

              <div className="screen-indicator">
                <h3>Screen</h3>
                <div className="screen"></div>
              </div>

              <div className="seats-grid">
                {seats.map(seat => (
                  <div
                    key={seat.id}
                    className={`seat ${seat.status} ${
                      selectedSeats.find(s => s.id === seat.id) ? 'selected' : ''
                    }`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat.id}
                  </div>
                ))}
              </div>

              <div className="seat-legend">
                <div className="legend-item">
                  <div className="legend-box" style={{ backgroundColor: 'var(--bg-secondary)', border: '2px solid rgba(255,255,255,0.2)' }}></div>
                  <span>Available</span>
                </div>
                <div className="legend-item">
                  <div className="legend-box" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                  <span>Selected</span>
                </div>
                <div className="legend-item">
                  <div className="legend-box" style={{ backgroundColor: '#555', opacity: 0.5 }}></div>
                  <span>Booked</span>
                </div>
              </div>

              <div className="booking-summary glass" style={{ marginTop: '30px' }}>
                <h3>Booking Summary</h3>
                <div className="summary-item">
                  <span>Selected Seats:</span>
                  <span>{selectedSeats.map(s => s.id).join(', ') || 'None'}</span>
                </div>
                <div className="summary-item">
                  <span>Number of Seats:</span>
                  <span>{selectedSeats.length}</span>
                </div>
                <div className="summary-item">
                  <span>Price per Seat:</span>
                  <span>₹250</span>
                </div>
                <div className="summary-total">
                  <div className="summary-item">
                    <span>Total Amount:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>

                <div className="booking-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={handleConfirmBooking}
                    disabled={selectedSeats.length === 0 || loading}
                  >
                    {loading ? 'Processing...' : 'Confirm Booking'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="booking-success glass" style={{ textAlign: 'center', padding: '80px 40px' }}>
              <FaCheckCircle style={{ fontSize: '80px', color: '#2ecc71', marginBottom: '20px' }} />
              <h2>Booking Confirmed!</h2>
              <p>Your tickets have been booked successfully.</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '20px' }}>
                Redirecting to dashboard...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
