import React, { useState } from 'react';
import { useRouter } from 'next/router';

function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      router.push('/dashboard');
    } catch (err) {
      setErrorMsg(err.message || 'Error message received.');
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light px-3">
        <button className="btn btn-outline-primary" onClick={() => router.push('/')}>
          ← Back to Home
        </button>
      </nav>

      {/* Login Form */}
      <div className="container my-auto">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card p-4 shadow">
              <h3 className="text-center mb-3">Login</h3>

              {errorMsg && (
                <div className="alert alert-danger text-center py-2">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>

              <button
                className="btn btn-link w-100 mt-3"
                onClick={() => router.push('/register')}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
