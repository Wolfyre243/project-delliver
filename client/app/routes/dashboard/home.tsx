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
import { isAxiosError } from 'axios'
import TryNessie from '~/components/dashboard/TryNessie'
import Missions from '~/components/dashboard/missions'
import { useEffect, useState } from 'react'
import { apiPrivate } from '~/services/api'
import useAuth from '~/hooks/useAuth'

export default function Page() {
  let [username,setUsername] = useState("");
  const { accessToken, loading} = useAuth();
  async function getData() {
    try {
      const { data: responseData } = await apiPrivate.get(
        '/users/getUserDetails',
        {
          withCredentials: true,
          headers: { Authorization: 'bearer ' + accessToken },
        }
      )
      setUsername(responseData.username);
    } catch (error) {
            let message
            if (isAxiosError(error)) {
              message =
                error.response?.data.message ||
                'Something went wrong. Please try again later.'
            }
            console.log(message)
    }
  }
  useEffect(()=>{
    getData();
  },[accessToken, loading])
  return (
    <>
      <h1 className='m-4 text-3xl font-bold'>Hello, {username}!</h1>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-16/7 rounded-xl md:col-span-2 col-span-1" />
          <div className="bg-muted/50 md:aspect-3704/3311 aspect-16/7 w-full rounded-xl">
            <Missions/>
          </div>
        </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3 min-h-[100vh] md:min-h-min flex-1 flex-wrap h-full">
            <div className="bg-muted/50 rounded-xl h-75">
              <TryNessie />
            </div>
            <div className="bg-muted/50  rounded-xl">

            </div>
            
            <div className="bg-muted/50 rounded-xl">
            
            </div>
          </div>
                </div>
    </>
  )
}
