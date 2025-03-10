import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus, Users, Code, Zap, Github, Linkedin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeamsPage() {
  const teams = [
    {
      id: 1,
      name: "AI Innovators",
      project: "NLP-based Project Assistant",
      members: 4,
      progress: 75,
      skills: ["Machine Learning", "NLP", "Python", "React"],
      status: "Active",
    },
    {
      id: 2,
      name: "Web Wizards",
      project: "Accessibility Testing Platform",
      members: 3,
      progress: 60,
      skills: ["JavaScript", "TypeScript", "Next.js", "Tailwind"],
      status: "Active",
    },
    {
      id: 3,
      name: "Data Dynamos",
      project: "Real-time Analytics Dashboard",
      members: 5,
      progress: 40,
      skills: ["Data Science", "Python", "D3.js", "SQL"],
      status: "Forming",
    },
  ]

  const recommendedMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "TypeScript"],
      match: 95,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Machine Learning Engineer",
      skills: ["Python", "TensorFlow", "NLP"],
      match: 92,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      role: "UX/UI Designer",
      skills: ["Figma", "UI Design", "User Research"],
      match: 88,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Data Scientist",
      skills: ["Python", "R", "Data Visualization"],
      match: 85,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Formation</h1>
          <p className="text-muted-foreground">Find the perfect teammates with AI-powered matching</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Team
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search teams or members..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-teams">
        <TabsList>
          <TabsTrigger value="my-teams">My Teams</TabsTrigger>
          <TabsTrigger value="recommended">Recommended Teams</TabsTrigger>
          <TabsTrigger value="find-members">Find Members</TabsTrigger>
        </TabsList>
        <TabsContent value="my-teams" className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Card key={team.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>{team.project}</CardDescription>
                    </div>
                    <Badge variant={team.status === "Active" ? "default" : "outline"}>{team.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{team.members} members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Project</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="text-muted-foreground">{team.progress}%</span>
                    </div>
                    <Progress value={team.progress} className="h-2" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Team Space</Button>
                  <Button>Manage</Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="border-dashed">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Plus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Create a New Team</h3>
                <p className="text-sm text-muted-foreground mb-4">Start a new project with AI-matched teammates</p>
                <Button>Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recommended" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Teams for You</CardTitle>
              <CardDescription>Based on your skills, interests, and past collaborations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teams.map((team) => (
                  <div key={team.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{team.name}</h4>
                        <p className="text-sm text-muted-foreground">{team.project}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium">{90 - team.id * 5}% Match</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Based on your profile</p>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="find-members" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Recommended Team Members</CardTitle>
              <CardDescription>Potential teammates based on skill compatibility and past performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex space-x-1">
                            <Github className="h-3 w-3 text-muted-foreground" />
                            <Linkedin className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill) => (
                              <span key={skill} className="text-xs bg-primary/10 px-1.5 py-0.5 rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium">{member.match}% Match</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Skills compatibility</p>
                      </div>
                      <Button size="sm">Invite</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View More Recommendations
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

