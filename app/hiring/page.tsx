"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Zap, Github, Linkedin, FileText, MessageSquare, Plus, Upload, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

export default function HiringPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [skillFilter, setSkillFilter] = useState("all")
  const [minSkillLevel, setMinSkillLevel] = useState(60)

  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      match: 95,
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 96,
        coding: 92,
        teamwork: 94,
        innovation: 95,
      },
      github: "github.com/alexj",
      linkedin: "linkedin.com/in/alexj",
      resume: true,
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Machine Learning Engineer",
      skills: ["Python", "TensorFlow", "NLP", "Data Science"],
      match: 92,
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 94,
        coding: 90,
        teamwork: 88,
        innovation: 96,
      },
      github: "github.com/sarahc",
      linkedin: "linkedin.com/in/sarahc",
      resume: true,
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      role: "UX/UI Designer",
      skills: ["Figma", "UI Design", "User Research", "Prototyping"],
      match: 88,
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 86,
        coding: 84,
        teamwork: 95,
        innovation: 92,
      },
      github: "github.com/miguelr",
      linkedin: "linkedin.com/in/miguelr",
      resume: false,
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Data Scientist",
      skills: ["Python", "R", "Data Visualization", "Machine Learning"],
      match: 85,
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 90,
        coding: 88,
        teamwork: 84,
        innovation: 86,
      },
      github: "github.com/priyap",
      linkedin: "linkedin.com/in/priyap",
      resume: true,
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Security Engineer",
      skills: ["Cybersecurity", "Penetration Testing", "Python", "Network Security"],
      match: 82,
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 88,
        coding: 86,
        teamwork: 82,
        innovation: 84,
      },
      github: "github.com/jamesw",
      linkedin: "linkedin.com/in/jamesw",
      resume: true,
    },
  ]

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      matches: 12,
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "AI Solutions Ltd.",
      location: "San Francisco, CA",
      skills: ["Python", "TensorFlow", "NLP", "Data Science"],
      matches: 8,
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "New York, NY",
      skills: ["Figma", "UI Design", "User Research", "Prototyping"],
      matches: 5,
      posted: "3 days ago",
    },
  ]

  // Filter candidates based on search query, skill filter, and minimum skill level
  const filterCandidates = () => {
    return candidates.filter((candidate) => {
      // Filter by search query
      if (
        searchQuery &&
        !candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        return false
      }

      // Filter by skill
      if (skillFilter !== "all" && !candidate.skills.includes(skillFilter)) {
        return false
      }

      // Filter by minimum skill level (average of all metrics)
      const avgSkillLevel =
        Object.values(candidate.metrics).reduce((sum, val) => sum + val, 0) / Object.values(candidate.metrics).length
      if (avgSkillLevel < minSkillLevel) {
        return false
      }

      return true
    })
  }

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI-Powered Talent Discovery</h1>
          <p className="text-muted-foreground">Find top talent based on real-world skills and project performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload Resume
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Post Job
          </Button>
        </div>
      </div>

      <Tabs defaultValue="candidates">
        <TabsList>
          <TabsTrigger value="candidates">Talent Pool</TabsTrigger>
          <TabsTrigger value="jobs">Job Listings</TabsTrigger>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="candidates" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Talent Search</CardTitle>
              <CardDescription>Find candidates based on skills, performance, and project contributions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by name, role, or skill..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={skillFilter} onValueChange={setSkillFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skills</SelectItem>
                    <SelectItem value="React">React</SelectItem>
                    <SelectItem value="Python">Python</SelectItem>
                    <SelectItem value="TypeScript">TypeScript</SelectItem>
                    <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                    <SelectItem value="UI Design">UI Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Minimum Skill Level: {minSkillLevel}%</Label>
                </div>
                <Slider
                  value={[minSkillLevel]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(value) => setMinSkillLevel(value[0])}
                />
              </div>

              <div className="space-y-4 mt-4">
                {filterCandidates().map((candidate) => (
                  <Card key={candidate.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={candidate.avatar} />
                            <AvatarFallback>
                              {candidate.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-bold">{candidate.name}</h3>
                            <p className="text-sm text-muted-foreground">{candidate.role}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex space-x-1">
                                <a href={`https://${candidate.github}`} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                </a>
                                <a href={`https://${candidate.linkedin}`} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                </a>
                                {candidate.resume && <FileText className="h-3 w-3 text-muted-foreground" />}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 md:flex-1">
                          {candidate.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-primary/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              <Zap className="h-4 w-4 text-yellow-500" />
                              <span className="font-bold text-lg">{candidate.match}%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">AI Match Score</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Contact
                            </Button>
                            <Button size="sm">View Profile</Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Problem Solving</span>
                            <span className="text-muted-foreground">{candidate.metrics.problemSolving}%</span>
                          </div>
                          <Progress value={candidate.metrics.problemSolving} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Coding</span>
                            <span className="text-muted-foreground">{candidate.metrics.coding}%</span>
                          </div>
                          <Progress value={candidate.metrics.coding} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Teamwork</span>
                            <span className="text-muted-foreground">{candidate.metrics.teamwork}%</span>
                          </div>
                          <Progress value={candidate.metrics.teamwork} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Innovation</span>
                            <span className="text-muted-foreground">{candidate.metrics.innovation}%</span>
                          </div>
                          <Progress value={candidate.metrics.innovation} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Listings</CardTitle>
              <CardDescription>Browse open positions from companies looking for talent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h3 className="font-bold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.company} • {job.location}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Posted {job.posted}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-primary/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="font-bold">{job.matches}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Matching candidates</p>
                        </div>
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Job Listings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>My Talent Profile</CardTitle>
              <CardDescription>Manage your resume, skills, and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">Full Stack Developer</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
                  <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Update Resume
                  </Button>
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Connect GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

