import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setToken(params.get('token'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrors(["Mật khẩu không khớp!"]);
      return;
    }

    try {
      const url = `${process.env.REACT_APP_SERVER_URL}/auth/reset-password`;
      const res = await axios.post(url, { token, password });
      setMessage(res.data.message);
      setErrors([]);
      setTimeout(() => navigate("/login"), 3000);  // Redirect to login after 3 seconds
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message || "Có lỗi xảy ra"]);
      } else {
        setErrors(["Không kết nối được server"]);
      }
      setMessage(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Đặt lại mật khẩu</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mật khẩu mới</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
          <input 
            type="password" 
            className="form-control" 
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {errors.length > 0 && (
          <div className="alert alert-danger">
            {errors.map((err, idx) => <p key={idx} className="m-0">{err}</p>)}
          </div>
        )}

        {message && (
          <div className="alert alert-success">
            {message}
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Đặt lại mật khẩu
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
