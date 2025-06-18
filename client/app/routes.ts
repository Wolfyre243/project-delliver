import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from '@react-router/dev/routes'

export default [
  // Root Layout
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    // route("about", "routes/about.tsx"),
    // route("unauthorized", "routes/unauthorized.tsx"),
  ]),

  ...prefix('auth', [
    layout('routes/auth/layout.tsx', [
      route('login', 'routes/auth/login.tsx'),
      route('register', 'routes/auth/register.tsx'),
    ]),
  ]),

  ...prefix('dashboard', [
    layout('routes/dashboard/layout.tsx', [index('routes/dashboard/home.tsx')]),
  ]),
] satisfies RouteConfig
