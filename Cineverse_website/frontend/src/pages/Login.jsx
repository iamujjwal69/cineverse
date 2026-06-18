import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (role) => {
    const email = role === 'ADMIN' ? 'admin@test.com' : role === 'THEATRE_OWNER' ? 'owner@test.com' : 'user@test.com';
    login(email, 'demo').then(result => {
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message || 'Demo login failed');
      }
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card glass">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Login to continue to TicketShow</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="forgot-password-link">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Quick Demo Login:</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button type="button" onClick={() => handleDemoLogin('USER')} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '13px' }}>
                Demo User
              </button>
              <button type="button" onClick={() => handleDemoLogin('THEATRE_OWNER')} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '13px' }}>
                Demo Owner
              </button>
              <button type="button" onClick={() => handleDemoLogin('ADMIN')} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '13px' }}>
                Demo Admin
              </button>
            </div>
          </div>

          <div className="auth-link" style={{ marginTop: '25px' }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
