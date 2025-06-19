const cookieOptions = {
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production', // true in production
  sameSite: 'lax',
  maxAge: 30 * 24 * 60 * 60 * 1000,
}

export default cookieOptions
