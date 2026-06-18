import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import movieService from '../services/movieService';
import { queryMockMovies } from '../services/mockMovies';
import { FaStar, FaSearch } from 'react-icons/fa';
import '../styles/Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    genre: '',
    category: '',
    sortBy: 'title',
    page: 0,
    size: 120 // Display all 100+ movies on one page
  });

  useEffect(() => {
    fetchMovies();
  }, [filters]);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await movieService.getAllMovies(filters);
      setMovies(response.data.data?.content || response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      // Use mock data if API fails
      const result = queryMockMovies(searchQuery, filters);
      setMovies(result.content);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        const response = await movieService.searchMovies(searchQuery, filters);
        setMovies(response.data.data?.content || response.data.data || []);
      } catch (error) {
        console.error('Search failed:', error);
        // Search mock movies fallback
        const result = queryMockMovies(searchQuery, filters);
        setMovies(result.content);
      }
    } else {
      fetchMovies();
    }
  };

  return (
    <div className="movies-page">
      <div className="container">
        <div className="movies-header">
          <h1>Explore Movies</h1>
          <p>Discover the latest blockbusters and timeless classics</p>
        </div>

        <div className="movies-controls">
          <form onSubmit={handleSearch} className="search-bar glass">
            <FaSearch />
            <input
              type="text"
              placeholder="Search by title, genre, category, cast, director..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>

          <div className="filters">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value, page: 0 })}
              className="filter-select"
            >
              <option value="">All Categories</option>
              <option value="Hollywood">Hollywood</option>
              <option value="Bollywood">Bollywood</option>
              <option value="South Indian">South Indian</option>
            </select>

            <select
              value={filters.genre}
              onChange={(e) => setFilters({ ...filters, genre: e.target.value, page: 0 })}
              className="filter-select"
            >
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Animation">Animation</option>
            </select>

            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="filter-select"
            >
              <option value="title">Title (A-Z)</option>
              <option value="rating">Rating (Highest first)</option>
              <option value="releaseYear">Release Year (Newest first)</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div>
            <div className="movies-count-info">
              Showing {movies.length} movies
            </div>
            <div className="movies-grid">
              {movies.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-card glass">
                  <div className="movie-poster">
                    {movie.posterUrl ? (
                      <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="movie-placeholder" style={{ display: movie.posterUrl ? 'none' : 'flex' }}>
                      <span>{movie.title[0]}</span>
                    </div>
                    <div className="movie-overlay">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div className="movie-meta">
                      <span className="movie-genre">{movie.genre}</span>
                      <span className="movie-rating">
                        <FaStar /> {movie.rating ? `${movie.rating}/10` : 'N/A'}
                      </span>
                    </div>
                    <div className="movie-card-footer">
                      <span className="movie-year">{movie.releaseYear}</span>
                      {movie.category && <span className="movie-category-badge">{movie.category}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
