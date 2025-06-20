import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'
import { useLocation } from 'react-router'
import { Link } from 'react-router'

const LayoutBreadcrumb = (props: { href: any }) => {
  const location = useLocation()
  const { pathname } = location
  const segments = pathname.split('/')

  let url = ''
  const breadcrumbLinks = segments.map((segment, i) => {
    if (segment === '') return
    url += `/${segment}`
    return (
      <>
        <BreadcrumbItem>
          <Link
            to={url}
            className="hover:text-neutral-300 transition-all duration-150"
          >
            {segment}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </>
    )
  })

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>{...breadcrumbLinks}</BreadcrumbList>
      </Breadcrumb>
    </>
  )
}

export default LayoutBreadcrumb
