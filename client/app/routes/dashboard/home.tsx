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
          <div className="bg-muted/50 aspect-3704/3311 rounded-xl">
            <TryNessie />
          </div>
          <div className="bg-muted/50 aspect-16/7 rounded-xl col-span-2" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
      </div>
    </>
  )
}
