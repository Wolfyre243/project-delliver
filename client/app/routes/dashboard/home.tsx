import { Navigate } from 'react-router'
import { AppSidebar } from '~/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'

import TryNessie from '~/components/dashboard/TryNessie'

export default function Page() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-16/7 rounded-xl md:col-span-2 col-span-1" />
          <div className="bg-muted/50 md:aspect-3704/3311 aspect-16/7 w-full rounded-xl">
          </div>
        </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3 min-h-[100vh] md:min-h-min">
            <div className="bg-muted/50 aspect-16/10 rounded-xl">
              <TryNessie />
            </div>
            <div className="bg-muted/50 aspect-16/10 rounded-xl" />
            <div className="bg-muted/50 aspect-16/10 rounded-xl" />
          </div>
                </div>
    </>
  )
}
