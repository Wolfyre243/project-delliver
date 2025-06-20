import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'
import { useLocation } from 'react-router'
import { Link } from 'react-router'

const LayoutBreadcrumb = (props: { href: any }) => {
  const location = useLocation()
  const { pathname } = location
  const segments = pathname.split('/')

  const uppercaseFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  let url = ''
  const breadcrumbLinks = segments.map((segment, i) => {
    if (segment === '') return
    url += `/${segment}`
    if (i == segments.length-1){
       return (
        <>
            <BreadcrumbItem>
                <BreadcrumbPage>{segment}</BreadcrumbPage>
            </BreadcrumbItem>
        </>
       ) 
    } else {
    return (
      <>
        {i == segments.length - 1 ? (
          <BreadcrumbItem key={i}>
            <BreadcrumbPage>{uppercaseFirstLetter(segment)}</BreadcrumbPage>
          </BreadcrumbItem>
        ) : (
          <>
            <BreadcrumbItem key={i}>
              <Link
                to={url}
                className="hover:text-neutral-300 transition-all duration-150"
              >
                {uppercaseFirstLetter(segment)}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
      </>
    )
    }

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
