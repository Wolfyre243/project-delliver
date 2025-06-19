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
      <RequireAuth>
        <main className="flex flex-col h-full">
          {/* TODO: replace with sidebar */}
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-18 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-18">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                </div>
              </header>
              <Outlet />
            </SidebarInset>
          </SidebarProvider>
        </main>
      </RequireAuth>
    </>
  )
}
