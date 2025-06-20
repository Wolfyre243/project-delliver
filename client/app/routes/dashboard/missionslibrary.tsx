import {
  DropdownMenuLabel,
  type DropdownMenuCheckboxItemProps,
} from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'
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

import {
  Calculator,
  Calendar,
  CreditCard,
  SearchIcon,
  Settings,
  Smile,
  User,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

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
type Checked = DropdownMenuCheckboxItemProps['checked']
const MissionCard = () => {
  return (
    <div className="flex flex-row sm:w-1/2 md:w-1/4 w-full p-2">
      <Card className="flex w-full">
        <CardHeader>
          <div className="flex gap-5 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Complete 2.4km within 15 minutes</CardTitle>
              <CardDescription>
                Creator: sgagh | Category: Diet{' '}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <p>⏱️Time: 1 day</p>
            <Button>Complete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
const Missions = () => {
  let [showDiet, setShowDiet] = React.useState<Checked>(false)
  let [showExercise, setShowExercise] = React.useState<Checked>(false)
  let [showSleep, setShowSleep] = React.useState<Checked>(false)
  return (
    <>
      <div className="p-4 flex flex-col justify-start ">
        <h1 className="text-3xl font-bold mb-6">Mission Library</h1>
        <div className="flex justify-start items-center">
          <Input
            placeholder="Search here..."
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-100 h-10"
          ></Input>
          <Button variant={"ghost"} className='hover:cursor-pointer'>
            <SearchIcon/>
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
                checked={showExercise}
                onCheckedChange={setShowExercise}
              >
                Exercise
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
              <Command className="rounded-lg border shadow-md md:min-w-[200px]">
                <CommandInput placeholder="Creator name" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Creators">
                    <CommandItem>
                      <a className="w-full" href="/admin">
                        <div className="flex gap-2">
                          <User />
                          <span>admin</span>
                        </div>
                      </a>
                    </CommandItem>
                    <CommandItem>
                      <User />
                      <span>flxvershellyqs</span>
                    </CommandItem>
                    <CommandItem>
                      <User />
                      <span>wolfye</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-4 flex flex-wrap w-full justify-start">
          <MissionCard />
          <MissionCard />

          <MissionCard />

          <MissionCard />

          <MissionCard />

          <MissionCard />

          <MissionCard />

          <MissionCard />

          <MissionCard />
        </div>
      </div>
    </>
  )
}

export default Missions
/*


export function CommandDemo() {
  return (

  )
}
*/
