import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Filter, Plus, Search, Users, Award, Clock, Code, Laptop, Rocket } from "lucide-react"

export default function EventsPage() {
  const eventTypes = [
    { name: "Hackathon", count: 12, icon: <Code className="h-4 w-4" /> },
    { name: "Conference", count: 8, icon: <Users className="h-4 w-4" /> },
    { name: "Workshop", count: 15, icon: <Laptop className="h-4 w-4" /> },
    { name: "Competition", count: 6, icon: <Award className="h-4 w-4" /> },
    { name: "Bootcamp", count: 4, icon: <Rocket className="h-4 w-4" /> },
  ]

  const events = [
    {
      id: 1,
      title: "AI Innovation Hackathon",
      description: "A 48-hour coding challenge focused on AI solutions",
      date: "May 15-17, 2025",
      participants: 120,
      status: "Registration Open",
      type: "Hackathon",
    },
    {
      id: 2,
      title: "Tech Conference 2025",
      description: "Annual technology conference with industry leaders",
      date: "June 5-7, 2025",
      participants: 500,
      status: "Coming Soon",
      type: "Conference",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      description: "Intensive 2-week program for aspiring web developers",
      date: "July 10-24, 2025",
      participants: 50,
      status: "Registration Open",
      type: "Bootcamp",
    },
    {
      id: 4,
      title: "Data Science Workshop",
      description: "One-day workshop on advanced data science techniques",
      date: "May 25, 2025",
      participants: 80,
      status: "Registration Open",
      type: "Workshop",
    },
  ]

  return (
    <div className="content-container">
      <div className="content-header">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Event Creation</h1>
          <p className="text-muted-foreground">Create and manage your events with AI assistance</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Event
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search events..." className="pl-8 w-full" />
        </div>
        <Button variant="outline" size="icon" className="shrink-0">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="content-grid-5">
        {eventTypes.map((type) => (
          <Card key={type.name} className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                {type.icon}
              </div>
              <h3 className="font-medium">{type.name}</h3>
              <p className="text-sm text-muted-foreground">{type.count} events</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" className="mt-8">
        <TabsList>
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-6 mt-6">
          <div className="content-grid-2">
            {events.map((event) => (
              <Card key={event.id} className="card-hover overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription className="mt-1">{event.description}</CardDescription>
                    </div>
                    <Badge className={event.status === "Registration Open" ? "bg-green-500/90" : "bg-yellow-500/90"}>
                      {event.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Registration active</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-3 border-t">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button size="sm">Manage</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Upcoming Events</h3>
            <p className="text-muted-foreground">Filter applied to show only upcoming events</p>
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Past Events</h3>
            <p className="text-muted-foreground">Filter applied to show only past events</p>
          </div>
        </TabsContent>
        <TabsContent value="draft">
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Draft Events</h3>
            <p className="text-muted-foreground">Filter applied to show only draft events</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

