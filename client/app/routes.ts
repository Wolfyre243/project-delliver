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
      route('logout', 'routes/auth/logout.tsx'),
    ]),
  ]),

  ...prefix('dashboard', [
    layout('routes/dashboard/layout.tsx', [
      index('routes/dashboard/home.tsx'),
      route('mymissions', 'routes/dashboard/mymissions.tsx'),
      route('dietary', 'routes/dashboard/dietary.tsx'),
      route('clinic','routes/dashboard/clinic.tsx'),
      route('missionslibrary','routes/dashboard/missionslibrary.tsx')
    ]),
  ]),

  ...prefix('clinics', [
    layout('routes/clinics/layout.tsx', [index('routes/clinics/home.tsx')]),
  ]),

  ...prefix('assistant', [
    layout('routes/assistant/layout.tsx', [index('routes/assistant/home.tsx')]),
  ]),
] satisfies RouteConfig
