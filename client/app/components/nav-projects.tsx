import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
    SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar"
import { Link } from 'react-router'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"
export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { isMobile } = useSidebar()
  function checkSideBar(item: any) {
    if (item.name === "Missions"){
            return (
<Collapsible
            key={item.name}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.name}>
                  {item.icon && <item.icon />}
                  <span>{item.name}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem: any) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
            );
          } else {
            return (
          <SidebarMenuItem key={item.name}>
            
            <SidebarMenuButton  tooltip={item.name} asChild>
              <Link to={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>

            </SidebarMenuButton>

          </SidebarMenuItem>
            );

          }
  }
  return (
    <SidebarGroup className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex mt-3">
      <SidebarMenu>
        {projects.map((item) => (
          
          checkSideBar(item)

        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
