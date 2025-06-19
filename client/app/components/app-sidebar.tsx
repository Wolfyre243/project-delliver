import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  ScrollText,
  Map,
  HomeIcon,
  Utensils,
  CircleUserRound,
} from "lucide-react"
import logo from "../../public/logo.png"
import { NavMain } from "~/components/nav-main"
import { NavProjects } from "~/components/nav-projects"
import { NavUser } from "~/components/nav-user"
import { TeamSwitcher } from "~/components/team-switcher"
import { useEffect } from 'react'
import api from '~/services/api'
import useAuth from '~/hooks/useAuth'
import { isAxiosError } from 'axios'
import LoadingSpinner from '~/components/LoadingSpinner'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar"
 const logoOfTheApp = () => {
  return (
    <img src={logo} alt="logoOfApp"/>
  )
}
// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  let [data,setData] = React.useState({
  user: {
    name: "placeholder",
    email: "m@example.com",
    avatar: CircleUserRound,
  },
  teams: [
    {
      name: "HealthNest",
      logo: logoOfTheApp,
      plan: "v1.0.0",
    }
  ],
  projects: [
      {
      name: "Home",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      name: "Missions",
      url: "/dashboard/missions",
      icon: ScrollText,
    },
    {
      name: "Dietary",
      url: "/dashboard/dietary",
      icon: Utensils,
    },
        {
      name: "Clinics",
      url: "/dashboard/clinics",
      icon: Map,
    }
  ],
})
  const { accessToken, loading } = useAuth()

async function getData() {
    try {
      const {data: responseData} = await api.get("/users/getUserDetails",{withCredentials: true, headers:{Authorization: "Bearer "+accessToken}})
      setData({
  user: {
    name: responseData.username,
    email: responseData.email,
    avatar: CircleUserRound,
  },
  teams: [
    {
      name: "HealthNest",
      logo: logoOfTheApp,
      plan: "v1.0.0",
    }
  ],
  projects: [
      {
      name: "Home",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      name: "Missions",
      url: "/dashboard/missions",
      icon: ScrollText,
    },
    {
      name: "Dietary",
      url: "/dashboard/dietary",
      icon: Utensils,
    },
        {
      name: "Clinics",
      url: "/dashboard/clinics",
      icon: Map,
    }
  ],
})
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
  },[accessToken,loading])
  return (
    <>

    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams}/>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    </>
  )
}



