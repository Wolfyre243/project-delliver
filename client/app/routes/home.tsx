import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Landing Page" },
    { name: "description", content: "Welcome to React Router" },
  ];
}

export default function Home() {
  return (
    <div></div>
  )
}
