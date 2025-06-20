// Layout for landing page and about page, etc
import { Outlet } from 'react-router'
import { AppSidebar } from '~/components/app-sidebar'
import AppBar from '~/components/appbar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '~/components/ui/sidebar'
import {
  Sun,
  ChevronDown,
  MoonIcon
} from "lucide-react"
import { Separator } from '~/components/ui/separator'
import RequireAuth from '~/components/RequireAuth'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '~/components/ui/button'
import { DropdownMenuShortcut } from '~/components/ui/dropdown-menu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import LayoutBreadcrumb from './layoutBreadcrumb'
import { useEffect, useState } from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {
  let [windowHref, setWindowHref] = useState("");
  useEffect(()=>{
    setWindowHref(window.location.pathname)
  },[])
  return (
    <>
      <RequireAuth>
        <main className="flex flex-col h-full">
          {/* TODO: replace with sidebar */}
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-18 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-18 justify-between">
                <div className="flex items-center gap-2 px-4">
                    <div className='flex gap-2 flex-wrap items-center'>
                      <SidebarTrigger />
                      <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                      />
                      <LayoutBreadcrumb href={windowHref}/>
                    </div>

                </div>
                <div className='mr-6'>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={<MoonIcon/>}></SelectValue>
                    </SelectTrigger>
                    <SelectContent className='w-fit'>
                      <SelectItem className='w-fit' value='light mode'><Sun></Sun></SelectItem>
                      <SelectItem value='dark mode' className='w-fit'><MoonIcon></MoonIcon></SelectItem>

                    </SelectContent>
                  </Select>
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
