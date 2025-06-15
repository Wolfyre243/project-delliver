const cookieOptions = {
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // true in production
  sameSite: "lax",
};

export default cookieOptions;