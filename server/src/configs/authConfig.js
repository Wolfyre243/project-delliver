const cookieOptions = {
  path: '/',
  httpOnly: true,
  domain:
    process.env.NODE_ENV === 'production'
      ? 'project-delliver.onrender.com'
      : '',
  secure: process.env.NODE_ENV === 'production', // true in production
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  maxAge: 30 * 24 * 60 * 60 * 1000,
}

export default cookieOptions
