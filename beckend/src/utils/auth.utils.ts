import jwt from 'jsonwebtoken';

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '1d',
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
};