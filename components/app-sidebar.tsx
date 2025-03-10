"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  Code2,
  FileText,
  Home,
  Layers,
  LogOut,
  MessageSquare,
  PlusCircle,
  Settings,
  Users,
  User,
  BookOpen,
  Briefcase,
  Zap,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useAuth } from "@/hooks/use-auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function AppSidebar() {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string>(pathname)
  const { state } = useSidebar()
  const { user, role, signOut } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Update active item when pathname changes
  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])

  const isActive = (path: string) => {
    return activeItem === path || activeItem.startsWith(path + "/")
  }

  // Define menu items based on user role
  const getMenuItems = () => {
    const items = [
      {
        name: "Dashboard",
        path: "/",
        icon: <Home className="h-4 w-4" />,
        roles: ["organizer", "participant", "judge", "recruiter"],
      },
      {
        name: "Event Creation",
        path: "/events",
        icon: <Calendar className="h-4 w-4" />,
        roles: ["organizer"],
        badge: 2,
      },
      {
        name: "Team Formation",
        path: "/teams",
        icon: <Users className="h-4 w-4" />,
        roles: ["organizer", "participant"],
      },
      {
        name: "AI-Powered Judging",
        path: "/judging",
        icon: <Code2 className="h-4 w-4" />,
        roles: ["organizer", "judge"],
      },
      {
        name: "Resume-Based Hiring",
        path: "/hiring",
        icon: <FileText className="h-4 w-4" />,
        roles: ["organizer", "recruiter", "participant"],
      },
      {
        name: "Community & Networking",
        path: "/community",
        icon: <MessageSquare className="h-4 w-4" />,
        roles: ["organizer", "participant", "judge", "recruiter"],
        badge: 5,
      },
      {
        name: "Insights & Analytics",
        path: "/analytics",
        icon: <BarChart3 className="h-4 w-4" />,
        roles: ["organizer", "recruiter"],
      },
      {
        name: "Learning Resources",
        path: "/resources",
        icon: <BookOpen className="h-4 w-4" />,
        roles: ["organizer", "participant", "judge", "recruiter"],
      },
    ]

    // Filter items based on user role
    return items.filter((item) => !role || item.roles.includes(role))
  }

  return (
    <>
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-background/80 backdrop-blur-sm"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <Sidebar
        className={cn(
          "transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <SidebarHeader className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Layers className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ONWARD</span>
          </Link>
          <SidebarTrigger className="hidden md:flex" />
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs uppercase tracking-wider font-semibold px-2 py-1.5">
              Main Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {getMenuItems().map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive(item.path)}
                            onClick={() => {
                              setActiveItem(item.path)
                              setIsMobileMenuOpen(false)
                            }}
                            className={cn(
                              "transition-all duration-200 hover:bg-sidebar-accent/80",
                              isActive(item.path) && "bg-sidebar-accent font-medium",
                            )}
                          >
                            <Link href={item.path} className="flex items-center gap-3 py-2.5">
                              <span className="flex h-5 w-5 items-center justify-center">{item.icon}</span>
                              <span className="text-sm">{item.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="hidden md:block">
                          {item.name}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {item.badge && (
                      <Badge className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/90 text-primary-foreground text-xs px-1.5 min-w-[1.25rem] flex items-center justify-center">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator className="my-2" />

          {(role === "organizer" || !role) && (
            <SidebarGroup>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-1.5 text-xs uppercase tracking-wider font-semibold">
                    <span>Quick Actions</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton
                                asChild
                                className="transition-all duration-200 hover:bg-sidebar-accent/80"
                              >
                                <Link
                                  href="/events/new"
                                  className="flex items-center gap-3 py-2.5"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="flex h-5 w-5 items-center justify-center">
                                    <PlusCircle className="h-4 w-4" />
                                  </span>
                                  <span className="text-sm">Create New Event</span>
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="hidden md:block">
                              Create Event
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton
                                asChild
                                className="transition-all duration-200 hover:bg-sidebar-accent/80"
                              >
                                <Link
                                  href="/teams/invite"
                                  className="flex items-center gap-3 py-2.5"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="flex h-5 w-5 items-center justify-center">
                                    <Users className="h-4 w-4" />
                                  </span>
                                  <span className="text-sm">Invite Team Members</span>
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="hidden md:block">
                              Invite Members
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton
                                asChild
                                className="transition-all duration-200 hover:bg-sidebar-accent/80"
                              >
                                <Link
                                  href="/analytics/reports"
                                  className="flex items-center gap-3 py-2.5"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="flex h-5 w-5 items-center justify-center">
                                    <BarChart3 className="h-4 w-4" />
                                  </span>
                                  <span className="text-sm">View Reports</span>
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="hidden md:block">
                              View Reports
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          )}

          {(role === "participant" || !role) && (
            <SidebarGroup>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-1.5 text-xs uppercase tracking-wider font-semibold">
                    <span>My Events</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton
                                asChild
                                className="transition-all duration-200 hover:bg-sidebar-accent/80"
                              >
                                <Link
                                  href="/events/1"
                                  className="flex items-center gap-3 py-2.5"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="flex h-5 w-5 items-center justify-center">
                                    <Zap className="h-4 w-4" />
                                  </span>
                                  <span className="text-sm">AI Innovation Hackathon</span>
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="hidden md:block">
                              AI Hackathon
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <Badge
                          variant="outline"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-1.5 bg-green-500/10 text-green-500 border-green-500/20"
                        >
                          Active
                        </Badge>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton
                                asChild
                                className="transition-all duration-200 hover:bg-sidebar-accent/80"
                              >
                                <Link
                                  href="/events/2"
                                  className="flex items-center gap-3 py-2.5"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="flex h-5 w-5 items-center justify-center">
                                    <Briefcase className="h-4 w-4" />
                                  </span>
                                  <span className="text-sm">Tech Conference 2025</span>
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="hidden md:block">
                              Tech Conference
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <Badge
                          variant="outline"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-1.5 bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                        >
                          Soon
                        </Badge>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          )}
        </SidebarContent>

        <SidebarFooter className="p-4 mt-auto">
          <div className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 p-2 h-auto w-full justify-start hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 border-2 border-sidebar-accent-foreground/10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="text-xs">{user?.name?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium truncate max-w-[120px]">{user?.name || "Guest User"}</span>
                    <span className="text-xs text-muted-foreground capitalize">{role || "Visitor"}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}

