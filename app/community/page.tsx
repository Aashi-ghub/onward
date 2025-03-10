"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  MessageSquare,
  Calendar,
  Video,
  Users,
  Plus,
  ThumbsUp,
  MessageCircle,
  Share2,
  BookOpen,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function CommunityPage() {
  const [newPostContent, setNewPostContent] = useState("")

  const discussions = [
    {
      id: 1,
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Full Stack Developer",
      },
      content:
        "Has anyone experimented with the new AI-powered code review feature? I'm curious about how effective it is at catching potential bugs and security issues.",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      tags: ["AI", "Code Review", "Development"],
    },
    {
      id: 2,
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Machine Learning Engineer",
      },
      content:
        "Looking for team members for the upcoming AI Hackathon! We're focusing on NLP solutions for healthcare. Need 2 more developers with Python/TensorFlow experience.",
      timestamp: "5 hours ago",
      likes: 18,
      comments: 12,
      tags: ["Team Formation", "AI Hackathon", "NLP", "Healthcare"],
    },
    {
      id: 3,
      author: {
        name: "Miguel Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "UX/UI Designer",
      },
      content:
        "Just shared my project from the last hackathon on GitHub. It's an accessibility testing tool that helps identify issues in web applications. Would love some feedback!",
      timestamp: "1 day ago",
      likes: 32,
      comments: 15,
      tags: ["Accessibility", "Open Source", "Web Development"],
    },
  ]

  const webinars = [
    {
      id: 1,
      title: "Advanced AI Techniques for Developers",
      host: "Dr. Emily Zhang",
      date: "May 15, 2025",
      time: "2:00 PM - 4:00 PM EST",
      attendees: 156,
      image: "/placeholder.svg?height=120&width=240",
      tags: ["AI", "Machine Learning", "Development"],
    },
    {
      id: 2,
      title: "Building Accessible Web Applications",
      host: "Miguel Rodriguez",
      date: "May 20, 2025",
      time: "1:00 PM - 3:00 PM EST",
      attendees: 98,
      image: "/placeholder.svg?height=120&width=240",
      tags: ["Accessibility", "Web Development", "UX/UI"],
    },
    {
      id: 3,
      title: "Effective Team Collaboration in Remote Environments",
      host: "Sarah Chen & Alex Johnson",
      date: "May 25, 2025",
      time: "11:00 AM - 12:30 PM EST",
      attendees: 124,
      image: "/placeholder.svg?height=120&width=240",
      tags: ["Team Collaboration", "Remote Work", "Productivity"],
    },
  ]

  const mentors = [
    {
      id: 1,
      name: "Dr. Emily Zhang",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "AI Research Scientist",
      expertise: ["Machine Learning", "NLP", "Computer Vision"],
      availability: "10 hours/week",
      match: 95,
    },
    {
      id: 2,
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Senior Security Engineer",
      expertise: ["Cybersecurity", "Penetration Testing", "Network Security"],
      availability: "5 hours/week",
      match: 88,
    },
    {
      id: 3,
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Data Science Lead",
      expertise: ["Data Analysis", "Machine Learning", "Visualization"],
      availability: "8 hours/week",
      match: 92,
    },
  ]

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the post to an API
    console.log("Submitting post:", newPostContent)
    setNewPostContent("")
    // Show success toast or notification
  }

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community & Networking</h1>
          <p className="text-muted-foreground">Connect, collaborate, and learn with fellow participants</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </Button>
        </div>
      </div>

      <Tabs defaultValue="discussions">
        <TabsList>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="webinars">Webinars & Workshops</TabsTrigger>
          <TabsTrigger value="mentorship">AI Mentorship</TabsTrigger>
          <TabsTrigger value="messages">Direct Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Discussions</CardTitle>
              <CardDescription>Share ideas, ask questions, and collaborate with the community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <Textarea
                  placeholder="Share your thoughts, questions, or ideas..."
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" size="sm">
                      <Plus className="mr-1 h-4 w-4" />
                      Tag
                    </Button>
                    <Button type="button" variant="outline" size="sm">
                      <Plus className="mr-1 h-4 w-4" />
                      Image
                    </Button>
                  </div>
                  <Button type="submit" disabled={!newPostContent.trim()}>
                    Post
                  </Button>
                </div>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Recent Discussions</span>
                </div>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src={discussion.author.avatar} />
                          <AvatarFallback>
                            {discussion.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold">{discussion.author.name}</h3>
                              <p className="text-xs text-muted-foreground">
                                {discussion.author.role} • {discussion.timestamp}
                              </p>
                            </div>
                          </div>
                          <p className="mt-2">{discussion.content}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {discussion.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-primary/10">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-4 mt-4">
                            <Button variant="ghost" size="sm" className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{discussion.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{discussion.comments}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="flex items-center gap-1">
                              <Share2 className="h-4 w-4" />
                              <span>Share</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Load More
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="webinars" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Webinars & Workshops</CardTitle>
              <CardDescription>Learn from industry experts and enhance your skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search webinars and workshops..." className="pl-8" />
                </div>
                <Button>
                  <Calendar className="mr-2 h-4 w-4" />
                  My Calendar
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {webinars.map((webinar) => (
                  <Card key={webinar.id} className="overflow-hidden">
                    <div className="aspect-video w-full bg-muted">
                      <img
                        src={webinar.image || "/placeholder.svg"}
                        alt={webinar.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{webinar.title}</h3>
                      <p className="text-sm text-muted-foreground">Hosted by {webinar.host}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.attendees} attendees</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {webinar.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-primary/10">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">Register</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Webinars
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="mentorship" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Suggested Mentorship</CardTitle>
              <CardDescription>Get matched with experienced mentors based on your skills and goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold">Your Skill Development Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      Based on your profile and project history, we recommend focusing on:
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge>Advanced React Patterns</Badge>
                      <Badge>GraphQL</Badge>
                      <Badge>System Design</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Recommended Mentors</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mentors.map((mentor) => (
                  <Card key={mentor.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-16 w-16 mb-2">
                          <AvatarImage src={mentor.avatar} />
                          <AvatarFallback>
                            {mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground">{mentor.role}</p>
                        <Badge className="mt-2">{mentor.match}% Match</Badge>
                        <Separator className="my-3" />
                        <div className="w-full">
                          <h4 className="text-sm font-medium mb-1">Expertise</h4>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {mentor.expertise.map((skill) => (
                              <Badge key={skill} variant="outline" className="bg-primary/10">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm mt-2">
                            <span className="font-medium">Availability:</span> {mentor.availability}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">Request Mentorship</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Direct Messages</CardTitle>
              <CardDescription>Secure, real-time chat with team members, mentors, and recruiters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Your Messages</h3>
                <p className="text-muted-foreground mb-4">Connect with team members, mentors, and recruiters</p>
                <Button>Start a Conversation</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

