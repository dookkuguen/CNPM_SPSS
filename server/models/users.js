const db = require('../config/db'); // Sử dụng db.js của bạn

// Tạo một user mới
async function createUser(username, email, passwordHash) {
  const query = 'INSERT INTO users (username, email, passwordHash) VALUES (?, ?, ?)';
  const [result] = await db.execute(query, [username, email, passwordHash]);
  return result;
}

// Tìm user bằng email
async function findUserByEmail(email) {
  const query = 'SELECT * FROM users WHERE email = ?';
  const [rows] = await db.execute(query, [email]);
  return rows[0]; // Trả về user đầu tiên (nếu có)
}

// Cập nhật token và thời gian hết hạn
async function updateResetPasswordToken(email, token, expires) {
  const query = 'UPDATE users SET resetPasswordToken = ?, resetPasswordExpires = ? WHERE email = ?';
  await db.execute(query, [token, expires, email]);
}

// Lấy user bằng token
async function findUserByResetToken(token) {
  const query = 'SELECT * FROM users WHERE resetPasswordToken = ? AND resetPasswordExpires > NOW()';
  const [rows] = await db.execute(query, [token]);
  return rows[0]; // Trả về user đầu tiên (nếu có)
}

module.exports = {
  createUser,
  findUserByEmail,
  updateResetPasswordToken,
  findUserByResetToken
};
