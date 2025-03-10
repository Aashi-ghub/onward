"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { Download, Users, Calendar, Award, Zap, ArrowRight, FileText, Eye } from "lucide-react"

// Mock data for charts
const participationData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Participants",
      data: [120, 150, 180, 220, 280, 350],
      backgroundColor: "hsl(var(--primary) / 0.8)",
      borderColor: "hsl(var(--primary))",
      borderWidth: 2,
    },
    {
      label: "Teams",
      data: [30, 40, 45, 55, 70, 85],
      backgroundColor: "hsl(var(--primary) / 0.3)",
      borderColor: "hsl(var(--primary) / 0.5)",
      borderWidth: 2,
    },
  ],
}

const submissionData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Submissions",
      data: [10, 25, 45, 70],
      backgroundColor: "transparent",
      borderColor: "hsl(var(--primary))",
      tension: 0.4,
      borderWidth: 2,
      pointBackgroundColor: "hsl(var(--primary))",
    },
    {
      label: "Evaluations",
      data: [5, 20, 35, 65],
      backgroundColor: "transparent",
      borderColor: "hsl(var(--primary) / 0.5)",
      tension: 0.4,
      borderWidth: 2,
      pointBackgroundColor: "hsl(var(--primary) / 0.5)",
    },
  ],
}

const skillDistributionData = {
  labels: ["Web Dev", "ML/AI", "Mobile", "DevOps", "Data Science", "Security"],
  datasets: [
    {
      label: "Participants by Skill",
      data: [35, 25, 15, 10, 10, 5],
      backgroundColor: [
        "hsl(var(--primary) / 0.8)",
        "hsl(var(--primary) / 0.7)",
        "hsl(var(--primary) / 0.6)",
        "hsl(var(--primary) / 0.5)",
        "hsl(var(--primary) / 0.4)",
        "hsl(var(--primary) / 0.3)",
      ],
      borderColor: "hsl(var(--background))",
      borderWidth: 2,
    },
  ],
}

const engagementData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Platform Visits",
      data: [320, 450, 520, 480, 390, 280, 210],
      backgroundColor: "hsl(var(--primary) / 0.8)",
      borderColor: "hsl(var(--primary))",
      borderWidth: 2,
    },
    {
      label: "Community Interactions",
      data: [120, 180, 210, 190, 150, 90, 70],
      backgroundColor: "hsl(var(--primary) / 0.3)",
      borderColor: "hsl(var(--primary) / 0.5)",
      borderWidth: 2,
    },
  ],
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("6m")
  const [eventFilter, setEventFilter] = useState("all")

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="1y">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+24% from last period</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[24%] bg-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+4 from last period</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[33%] bg-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Project Submissions</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85</div>
            <p className="text-xs text-muted-foreground">+15% from last period</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[15%] bg-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+8% from last period</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[8%] bg-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="participation">Participation</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="sponsorship">Sponsorship</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Participation Trends</CardTitle>
                <CardDescription>Monthly participant and team growth</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart
                  data={participationData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skill Distribution</CardTitle>
                <CardDescription>Participant skills breakdown</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <PieChart
                  data={skillDistributionData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Submission Progress</CardTitle>
                <CardDescription>Weekly project submissions and evaluations</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <LineChart
                  data={submissionData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Daily Engagement</CardTitle>
                <CardDescription>Platform visits and community interactions</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart
                  data={engagementData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="participation">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Participation Analytics</CardTitle>
              <CardDescription>In-depth analysis of participant engagement and demographics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8">Detailed participation analytics content would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="submissions">
          <Card>
            <CardHeader>
              <CardTitle>Submission Analytics</CardTitle>
              <CardDescription>Comprehensive analysis of project submissions and evaluations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8">Detailed submission analytics content would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sponsorship">
          <Card>
            <CardHeader>
              <CardTitle>Sponsorship Dashboard</CardTitle>
              <CardDescription>Sponsor visibility, engagement, and recruitment outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Brand Visibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12.5K</div>
                    <p className="text-xs text-muted-foreground">Impressions</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">8.2K</div>
                        <p className="text-xs text-muted-foreground">Logo Views</p>
                      </div>
                      <div>
                        <div className="font-medium">4.3K</div>
                        <p className="text-xs text-muted-foreground">Profile Visits</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Recruitment Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">48</div>
                    <p className="text-xs text-muted-foreground">Candidate Connections</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">18</div>
                        <p className="text-xs text-muted-foreground">Interviews</p>
                      </div>
                      <div>
                        <div className="font-medium">6</div>
                        <p className="text-xs text-muted-foreground">Hires</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <Button className="w-full" variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Sponsor Report
                </Button>
                <Button className="w-full" variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  View Candidate Profiles
                </Button>
                <Button className="w-full">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Sponsor Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

