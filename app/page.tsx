import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Users, Award, Zap, Bell, ChevronRight, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  return (
    <div className="content-container">
      <div className="content-header">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Welcome Back</h1>
          <p className="text-muted-foreground">Here's what's happening on ONWARD today.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link href="/events/new">
              <Sparkles className="mr-2 h-4 w-4" />
              New Event
            </Link>
          </Button>
        </div>
      </div>

      <div className="content-grid-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                +2 from last month
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                +6 new this week
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Project Submissions</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs">
                3 awaiting review
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                New recommendations
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="teams">My Teams</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="sm" className="gap-1 text-sm">
            View All
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <TabsContent value="upcoming" className="space-y-4 mt-0">
          <div className="content-grid-2">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>AI Innovation Hackathon</CardTitle>
                <CardDescription>A 48-hour coding challenge focused on AI solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">May 15-17, 2025</span>
                  </div>
                  <Badge>Registration Open</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Registration Progress</span>
                    <span className="text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Tech Conference 2025</CardTitle>
                <CardDescription>Annual technology conference with industry leaders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">June 5-7, 2025</span>
                  </div>
                  <Badge variant="outline">Coming Soon</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Preparation Status</span>
                    <span className="text-muted-foreground">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get Notified
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="teams" className="space-y-4 mt-0">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>AI Innovators</CardTitle>
              <CardDescription>Working on NLP-based project assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="border-2 border-background">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i}`} />
                      <AvatarFallback className="text-xs">{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4 members</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Project Progress</span>
                  <span className="text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Team Space
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="tasks" className="space-y-4 mt-0">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Your upcoming deadlines and responsibilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Submit project proposal", deadline: "Tomorrow, 11:59 PM", priority: "High" },
                  { title: "Review team applications", deadline: "May 10, 2025", priority: "Medium" },
                  { title: "Prepare presentation slides", deadline: "May 14, 2025", priority: "Low" },
                ].map((task, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{task.deadline}</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "outline"
                      }
                      className={
                        task.priority === "High"
                          ? "bg-red-500/90"
                          : task.priority === "Medium"
                            ? "bg-primary/90"
                            : "bg-muted"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Tasks
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

