import * as React from 'react'
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
  BotIcon,
} from 'lucide-react'
import logo from '../../public/logo.png'
import { NavProjects } from '~/components/nav-projects'
import { NavUser } from '~/components/nav-user'
import { TeamSwitcher } from '~/components/team-switcher'
import { useEffect } from 'react'
import useAuth from '~/hooks/useAuth'
import { isAxiosError } from 'axios'
import { Link } from 'react-router'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '~/components/ui/sidebar'
import useApiPrivate from '~/hooks/useApiPrivate'

const logoOfTheApp = () => {
  return <img src={logo} alt="logoOfApp" />
}
// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const apiPrivate = useApiPrivate()

  let [email, setEmail] = React.useState('')
  let [name, setName] = React.useState('')
  const { accessToken, loading } = useAuth()
  const data = {
    user: {
      name: name,
      email: email,
      avatar: CircleUserRound,
    },
    teams: [
      {
        name: 'HealthNest',
        logo: logoOfTheApp,
        plan: 'v1.0.0',
      },
    ],
    projects: [
      {
        name: 'Home',
        url: '/dashboard',
        icon: HomeIcon,
      },
      {
        name: 'Missions',
        url: '/dashboard/missions',
        icon: ScrollText,
        isActive: true,
        items: [
          {
            title: 'Missions library',
            url: '/dashboard/missionslibrary',
          },
          {
            title: 'My missions',
            url: '/dashboard/mymissions',
          },
        ],
      },
      {
        name: 'Dietary',
        url: '/dashboard/dietary',
        icon: Utensils,
      },
      {
        name: 'Clinics',
        url: '/dashboard/clinic',
        icon: Map,
      },
      {
        name: 'Lova',
        url: '/assistant',
        icon: BotIcon,
      },
    ],
  }

  async function getData() {
    try {
      const { data: responseData } = await apiPrivate.get('/users/details')
      setName(responseData.username)
      setEmail(responseData.email)
    } catch (error) {
      let message
      if (isAxiosError(error)) {
        message =
          error.response?.data.message ??
          'Something went wrong. Please try again later.'
      }
      console.log(message)
    }
  }

  useEffect(() => {
    getData()
  }, [accessToken, loading])

  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <Link to="/">
            <TeamSwitcher teams={data.teams} />
          </Link>
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
