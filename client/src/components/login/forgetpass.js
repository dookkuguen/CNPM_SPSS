import { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setErrors(["Hãy nhập email của bạn"]);
      return;
    }

    try {
      const url = `${process.env.REACT_APP_SERVER_URL}/auth/forgot-password`;
      const res = await axios.post(url, { email });
      setMessage(res.data.message);
      setErrors([]);
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
      <h2>Quên Mật Khẩu</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email đăng ký</label>
          <input 
            type="email" 
            className="form-control" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Gửi
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
