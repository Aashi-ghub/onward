"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, ArrowUpDown, Trophy, Star, Zap, Download } from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Mock data for leaderboard
const generateLeaderboardData = () => {
  const teams = [
    {
      id: 1,
      name: "AI Innovators",
      members: 4,
      score: 92,
      rank: 1,
      change: 0,
      project: "NLP-based Project Assistant",
      metrics: {
        codeQuality: 95,
        innovation: 90,
        feasibility: 88,
        collaboration: 94,
      },
    },
    {
      id: 2,
      name: "Web Wizards",
      members: 3,
      score: 88,
      rank: 2,
      change: 1,
      project: "Accessibility Testing Platform",
      metrics: {
        codeQuality: 90,
        innovation: 85,
        feasibility: 92,
        collaboration: 86,
      },
    },
    {
      id: 3,
      name: "Data Dynamos",
      members: 5,
      score: 85,
      rank: 3,
      change: -1,
      project: "Real-time Analytics Dashboard",
      metrics: {
        codeQuality: 82,
        innovation: 88,
        feasibility: 84,
        collaboration: 85,
      },
    },
    {
      id: 4,
      name: "Cloud Crafters",
      members: 4,
      score: 82,
      rank: 4,
      change: 2,
      project: "Serverless Deployment Tool",
      metrics: {
        codeQuality: 85,
        innovation: 80,
        feasibility: 86,
        collaboration: 78,
      },
    },
    {
      id: 5,
      name: "Security Sentinels",
      members: 3,
      score: 79,
      rank: 5,
      change: -1,
      project: "Vulnerability Scanner",
      metrics: {
        codeQuality: 84,
        innovation: 75,
        feasibility: 80,
        collaboration: 76,
      },
    },
  ]

  const participants = [
    {
      id: 1,
      name: "Alex Johnson",
      team: "AI Innovators",
      score: 94,
      rank: 1,
      change: 1,
      role: "Full Stack Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 96,
        coding: 92,
        teamwork: 94,
        innovation: 95,
      },
    },
    {
      id: 2,
      name: "Sarah Chen",
      team: "Data Dynamos",
      score: 92,
      rank: 2,
      change: -1,
      role: "Machine Learning Engineer",
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 94,
        coding: 90,
        teamwork: 88,
        innovation: 96,
      },
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      team: "Web Wizards",
      score: 89,
      rank: 3,
      change: 0,
      role: "UX/UI Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 86,
        coding: 84,
        teamwork: 95,
        innovation: 92,
      },
    },
    {
      id: 4,
      name: "Priya Patel",
      team: "Data Dynamos",
      score: 87,
      rank: 4,
      change: 2,
      role: "Data Scientist",
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 90,
        coding: 88,
        teamwork: 84,
        innovation: 86,
      },
    },
    {
      id: 5,
      name: "James Wilson",
      team: "Security Sentinels",
      score: 85,
      rank: 5,
      change: -1,
      role: "Security Engineer",
      avatar: "/placeholder.svg?height=40&width=40",
      metrics: {
        problemSolving: 88,
        coding: 86,
        teamwork: 82,
        innovation: 84,
      },
    },
  ]

  return { teams, participants }
}

export default function LeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState(generateLeaderboardData())
  const [searchQuery, setSearchQuery] = useState("")
  const [eventFilter, setEventFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update scores to simulate real-time changes
      const newData = generateLeaderboardData()

      // Randomly adjust some scores
      newData.teams = newData.teams.map((team) => ({
        ...team,
        score: team.score + (Math.random() > 0.7 ? Math.floor(Math.random() * 3) - 1 : 0),
      }))

      newData.participants = newData.participants.map((participant) => ({
        ...participant,
        score: participant.score + (Math.random() > 0.7 ? Math.floor(Math.random() * 3) - 1 : 0),
      }))

      // Sort by score
      newData.teams.sort((a, b) => b.score - a.score)
      newData.participants.sort((a, b) => b.score - a.score)

      // Update ranks and changes
      newData.teams = newData.teams.map((team, index) => ({
        ...team,
        rank: index + 1,
        change: team.rank - (index + 1),
      }))

      newData.participants = newData.participants.map((participant, index) => ({
        ...participant,
        rank: index + 1,
        change: participant.rank - (index + 1),
      }))

      setLeaderboardData(newData)
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  // Filter and sort functions
  const filterTeams = () => {
    let filtered = [...leaderboardData.teams]

    if (searchQuery) {
      filtered = filtered.filter(
        (team) =>
          team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          team.project.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (eventFilter !== "all") {
      // In a real app, this would filter by event ID
      filtered = filtered.filter((team) => team.id % 2 === (eventFilter === "hackathon" ? 0 : 1))
    }

    return sortOrder === "desc"
      ? filtered.sort((a, b) => b.score - a.score)
      : filtered.sort((a, b) => a.score - b.score)
  }

  const filterParticipants = () => {
    let filtered = [...leaderboardData.participants]

    if (searchQuery) {
      filtered = filtered.filter(
        (participant) =>
          participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          participant.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
          participant.role.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (eventFilter !== "all") {
      // In a real app, this would filter by event ID
      filtered = filtered.filter((participant) => participant.id % 2 === (eventFilter === "hackathon" ? 0 : 1))
    }

    return sortOrder === "desc"
      ? filtered.sort((a, b) => b.score - a.score)
      : filtered.sort((a, b) => a.score - b.score)
  }

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-muted-foreground">Real-time rankings and performance metrics</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Rankings
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search teams or participants..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={eventFilter} onValueChange={setEventFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by event" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="hackathon">AI Hackathon</SelectItem>
            <SelectItem value="conference">Tech Conference</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
          className="flex items-center gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          {sortOrder === "desc" ? "Highest First" : "Lowest First"}
        </Button>
      </div>

      <Tabs defaultValue="teams">
        <TabsList>
          <TabsTrigger value="teams">Team Rankings</TabsTrigger>
          <TabsTrigger value="participants">Individual Rankings</TabsTrigger>
        </TabsList>
        <TabsContent value="teams" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {filterTeams().map((team, index) => (
              <Card key={team.id} className={index < 3 ? "border-yellow-500 dark:border-yellow-500/50" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full 
                        ${
                          index === 0
                            ? "bg-yellow-500 text-black"
                            : index === 1
                              ? "bg-gray-300 text-black"
                              : index === 2
                                ? "bg-amber-700 text-white"
                                : "bg-muted"
                        }`}
                      >
                        {index < 3 ? <Trophy className="h-5 w-5" /> : team.rank}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{team.name}</h3>
                          <Badge variant="outline" className="ml-2">
                            {team.members} members
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{team.project}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-bold text-lg">{team.score}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          {team.change > 0 ? (
                            <span className="text-green-500">↑ {team.change}</span>
                          ) : team.change < 0 ? (
                            <span className="text-red-500">↓ {Math.abs(team.change)}</span>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Code Quality</span>
                        <span className="text-muted-foreground">{team.metrics.codeQuality}/100</span>
                      </div>
                      <Progress value={team.metrics.codeQuality} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Innovation</span>
                        <span className="text-muted-foreground">{team.metrics.innovation}/100</span>
                      </div>
                      <Progress value={team.metrics.innovation} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Feasibility</span>
                        <span className="text-muted-foreground">{team.metrics.feasibility}/100</span>
                      </div>
                      <Progress value={team.metrics.feasibility} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Collaboration</span>
                        <span className="text-muted-foreground">{team.metrics.collaboration}/100</span>
                      </div>
                      <Progress value={team.metrics.collaboration} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="participants" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {filterParticipants().map((participant, index) => (
              <Card key={participant.id} className={index < 3 ? "border-yellow-500 dark:border-yellow-500/50" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full 
                        ${
                          index === 0
                            ? "bg-yellow-500 text-black"
                            : index === 1
                              ? "bg-gray-300 text-black"
                              : index === 2
                                ? "bg-amber-700 text-white"
                                : "bg-muted"
                        }`}
                      >
                        {index < 3 ? <Trophy className="h-5 w-5" /> : participant.rank}
                      </div>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={participant.avatar} />
                          <AvatarFallback>
                            {participant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">{participant.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{participant.role}</span>
                            <span>•</span>
                            <span>{participant.team}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span className="font-bold text-lg">{participant.score}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          {participant.change > 0 ? (
                            <span className="text-green-500">↑ {participant.change}</span>
                          ) : participant.change < 0 ? (
                            <span className="text-red-500">↓ {Math.abs(participant.change)}</span>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Problem Solving</span>
                        <span className="text-muted-foreground">{participant.metrics.problemSolving}/100</span>
                      </div>
                      <Progress value={participant.metrics.problemSolving} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Coding</span>
                        <span className="text-muted-foreground">{participant.metrics.coding}/100</span>
                      </div>
                      <Progress value={participant.metrics.coding} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Teamwork</span>
                        <span className="text-muted-foreground">{participant.metrics.teamwork}/100</span>
                      </div>
                      <Progress value={participant.metrics.teamwork} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Innovation</span>
                        <span className="text-muted-foreground">{participant.metrics.innovation}/100</span>
                      </div>
                      <Progress value={participant.metrics.innovation} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

