const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || 'dev-secret';
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

module.exports = {
  NEXTAUTH_SECRET,
  DATABASE_URL,
  PORT
};