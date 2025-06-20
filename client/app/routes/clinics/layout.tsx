// Layout for landing page and about page, etc
import { Outlet } from 'react-router'
import { AppSidebar } from '~/components/app-sidebar'
import AppBar from '~/components/appbar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '~/components/ui/sidebar'
import { Separator } from '~/components/ui/separator'
import RequireAuth from '~/components/RequireAuth'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}
