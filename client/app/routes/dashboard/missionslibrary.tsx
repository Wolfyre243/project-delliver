import {
  DropdownMenuLabel,
  type DropdownMenuCheckboxItemProps,
} from '@radix-ui/react-dropdown-menu'
import React, { useEffect, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
  CardFooter,
} from '~/components/ui/card'
import { isAxiosError } from 'axios'
import {
  Calculator,
  Calendar,
  CircleUserRound,
  CreditCard,
  SearchIcon,
  Settings,
  Smile,
  User,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import useAuth from '~/hooks/useAuth'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../../components/ui/command'
import { FilterIcon, ChevronDown } from 'lucide-react'
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from '~/components/ui/dropdown-menu'
import { apiPrivate } from '~/services/api'
import { Skeleton } from '~/components/ui/skeleton'
type Checked = DropdownMenuCheckboxItemProps['checked']
const MissionCard = ({mission}:{
  mission:{
    mission_id: Number,
    creator_username: String,
    category: String,
    mission_text: String,
    is_community:Boolean,
    timespan: Number,
    created_at: Date
  }
}) => {
  function displayTimespanAccordingly(timespanParams:any) {
    if (timespanParams >= 24){
      let time = Math.floor(timespanParams/24);
      let hours = timespanParams - time*24;
      if (hours > 1){
      return time + " days, " + hours + " hours"

      } else {
              return time + " days, " + hours + " hour"
      }
    } else {
      if (timespanParams > 1){
      return timespanParams + " hours";

      } else {
      return timespanParams + " hour";

      }
    }
  }
  return (
    <div className="flex flex-row w-full lg:w-1/2 xl:w-1/4 p-2">
      <Card className="flex w-full">
        <CardHeader>
          <div className="flex gap-5 items-center">
            <Avatar>
              <AvatarFallback><CircleUserRound className='h-full w-full'/></AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{mission.mission_text}</CardTitle>
              <CardDescription>
                Creator: {mission.creator_username} | Category: {mission.category}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <p>⏱️Time: {displayTimespanAccordingly(mission.timespan)}</p>
            <Button>Complete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
const Missions = () => {
  let [showDiet, setShowDiet] = React.useState<Checked>(false)
  let [showFitness, setShowFitness] = React.useState<Checked>(false)
  let [showSleep, setShowSleep] = React.useState<Checked>(false)
    const { accessToken, loading } = useAuth()
  
    type mission  = {
      result: {
    mission_id: Number,
    creator_username: String,
    category: String,
    mission_text: String,
    is_community:Boolean,
    timespan: Number,
    created_at: Date
      }[],
      totalPages: Number

    }

  let [missions, setMissions] = useState<mission>({result: [{    mission_id: 0,
    creator_username: "placeholdername",
    category: "placeholdercategory",
    mission_text: "placeholderMissionText",
    is_community:true,
    timespan: 12,
    created_at: new Date()}], totalPages:3});
  async function getMissions() {
    try {
      const {data: responseData} = await apiPrivate.get('/mission',{
        withCredentials: true,
        headers: {Authorization: 'bearer ' +  accessToken}
      })
      setMissions(responseData);
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
    getMissions();
  },[accessToken,loading])
  return (
    <>
      <div className="p-4 flex flex-col justify-start ">
        <h1 className="text-3xl font-bold mb-6">Mission Library</h1>
        <div className="flex justify-start items-center">
          <Input
            placeholder="Search here..."
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-100 h-10"
          ></Input>
          <Button variant={'ghost'} className="hover:cursor-pointer">
            <SearchIcon />
          </Button>
        </div>

        <div className="flex justify-start gap-3 mt-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'secondary'} className="aspect-square h-10">
                Category <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={showDiet}
                onCheckedChange={setShowDiet}
              >
                Nutrition
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showFitness}
                onCheckedChange={setShowFitness}
              >
                Fitness
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showSleep}
                onCheckedChange={setShowSleep}
              >
                Sleep
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'secondary'} className="aspect-square h-10">
                Creator <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-transparent border-0">
              <CommandForCreators/>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-4 flex flex-wrap w-full justify-start">
          {missions.result.map((mission)=>{
            return <MissionCard mission={mission}/>
          })}
        </div>
      </div>
    </>
  )
}

export default Missions



function CommandForCreators() {
  const { accessToken, loading } = useAuth()
  let [usernames, setUsernames] = useState([{username: "placeholder"}]);
  async function getData() {
    try {
      const {data: responseData} = await apiPrivate.get('/users',{
        withCredentials: true,
      })
      setUsernames(responseData)
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
  },[])
  return (
    <>
    <Command className="rounded-lg border shadow-md md:min-w-[200px]">
      <CommandInput placeholder="Creator name" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Creators">
          {usernames.map((users: any)=>{
            return(
              <CommandItem>
                    <User />
                    <span>{users.username}</span>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </Command>
    </>
  )
}
