import { useAuth } from "../context/AuthContext";
//import 'dotenv/config';

const Login = () => {
  const {
    errors,
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    togglePasswordVisibility,
    handleSubmit,
    isLoading,
    showPassword,
    handleGoHome,
  } = useAuth();

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-4"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Glass morphism container */}
      <div
        className="card border-0 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          maxWidth: "1200px",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* Header with gradient */}
        <div
          className="text-center p-5 pb-4"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <div className="mb-3">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: "80px",
                height: "80px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </div>
          </div>
          <h2 className="mb-1 fw-bold" style={{ fontSize: "2rem" }}>
            Welcome Back
          </h2>
          <p className="mb-0 opacity-90">Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="p-5 pt-4">
          <div onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                className="form-label fw-semibold text-dark mb-2"
                style={{ fontSize: "0.95rem" }}
              >
                Email Address
              </label>
              <div className="position-relative">
                <input
                  type="email"
                  className={`form-control form-control-lg border-0 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "16px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "#ffffff";
                    e.target.style.boxShadow =
                      "inset 0 1px 3px rgba(0,0,0,0.1), 0 0 0 3px rgba(102, 126, 234, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "#f8fafc";
                    e.target.style.boxShadow =
                      "inset 0 1px 3px rgba(0,0,0,0.1)";
                  }}
                />
                <div className="position-absolute top-50 end-0 translate-middle-y me-3">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{ color: "#94a3b8" }}
                  >
                    <path d="M2 2A2 2 0 0 0 0 4v.793c.106.032.21.071.316.108.382.144.766.3 1.184.33V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4.684c-.25.019-.496.05-.74.087A2 2 0 0 0 2 2Z" />
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                    <path d="M6 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                  </svg>
                </div>
              </div>
              {errors.email && (
                <div
                  className="text-danger mt-2"
                  style={{ fontSize: "0.875rem" }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="me-1"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                className="form-label fw-semibold text-dark mb-2"
                style={{ fontSize: "0.95rem" }}
              >
                Password
              </label>
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control form-control-lg border-0 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "16px",
                    paddingLeft: "24px",
                    paddingRight: "60px",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "#ffffff";
                    e.target.style.boxShadow =
                      "inset 0 1px 3px rgba(0,0,0,0.1), 0 0 0 3px rgba(102, 126, 234, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "#f8fafc";
                    e.target.style.boxShadow =
                      "inset 0 1px 3px rgba(0,0,0,0.1)";
                  }}
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 end-0 translate-middle-y me-2"
                  onClick={togglePasswordVisibility}
                  disabled={isLoading}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#94a3b8",
                    padding: "8px",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#667eea")}
                  onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    {showPassword ? (
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    ) : (
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    )}
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </button>
              </div>
              {errors.password && (
                <div
                  className="text-danger mt-2"
                  style={{ fontSize: "0.875rem" }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="me-1"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  {errors.password}
                </div>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                  style={{
                    borderRadius: "6px",
                    border: "2px solid #e2e8f0",
                  }}
                />
                <label
                  className="form-check-label text-dark"
                  htmlFor="rememberMe"
                  style={{ fontSize: "0.95rem" }}
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-decoration-none fw-medium"
                style={{
                  color: "#667eea",
                  fontSize: "0.95rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#5a67d8")}
                onMouseLeave={(e) => (e.target.style.color = "#667eea")}
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-lg w-100 text-white fw-semibold"
              disabled={isLoading}
              onClick={handleSubmit}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                borderRadius: "16px",
                padding: "16px",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(102, 126, 234, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 15px rgba(102, 126, 234, 0.3)";
              }}
            >
              {isLoading ? (
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  Signing in...
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                  Sign In
                </div>
              )}
            </button>
            <button
              type="submit"
              className="btn btn-lg w-100 text-white fw-semibold"
              disabled={isLoading}
              onClick={handleGoHome}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                borderRadius: "16px",
                padding: "16px",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                display: "-ms-inline-flexbox",
                marginLeft: "4rem",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(102, 126, 234, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 15px rgba(102, 126, 234, 0.3)";
              }}
            >
              {isLoading ? (
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  Returning...
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="me-2"
                  ></svg>
                  Go Home
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
