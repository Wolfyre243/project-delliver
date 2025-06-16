import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { AuthProvider } from "./context/authProvider";

import { useLayoutEffect } from "react";
import useAuth from "./hooks/useAuth";
import useRefreshToken from "./hooks/useRefreshToken";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    rel: "icon", href: "/favicon.ico"
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AuthProvider>
          {children}
          <ScrollRestoration />
          <Scripts />
        </AuthProvider>
      </body>
    </html>
  );
}

export default function App() {
  const { accessToken, setLoading } = useAuth();
  const refreshToken = useRefreshToken();

  useLayoutEffect(() => {
    (async () => {
      try {
        if (!accessToken)
          // If access token is gone from memory, generate a new one
          await refreshToken();
        
      } catch (error: any) {
        console.log("[REFRESH ERROR]", error.response.data.message);
      } finally {
        setLoading(false);
      }
      
    })()
  }, [accessToken]);

  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
