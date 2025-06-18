// Layout for landing page and about page, etc
import { Outlet } from 'react-router'
import AppBar from '~/components/appbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex flex-col h-full">
        <AppBar />
        <Outlet />
      </main>
    </>
  )
}
