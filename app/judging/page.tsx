import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, Github, Star, Check, AlertCircle, BarChart } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function JudgingPage() {
  const submissions = [
    {
      id: 1,
      name: "AI Code Assistant",
      team: "AI Innovators",
      description: "An intelligent code assistant that helps developers write better code faster",
      score: 85,
      status: "Evaluated",
      github: "github.com/ai-innovators/code-assistant",
      metrics: {
        codeQuality: 90,
        innovation: 85,
        feasibility: 80,
        security: 85,
      },
    },
    {
      id: 2,
      name: "Accessibility Tester",
      team: "Web Wizards",
      description: "A tool that automatically tests websites for accessibility issues and suggests fixes",
      score: 78,
      status: "Evaluated",
      github: "github.com/web-wizards/a11y-tester",
      metrics: {
        codeQuality: 85,
        innovation: 75,
        feasibility: 80,
        security: 70,
      },
    },
    {
      id: 3,
      name: "Data Visualization Platform",
      team: "Data Dynamos",
      description: "A platform for creating interactive data visualizations from various data sources",
      score: null,
      status: "Pending",
      github: "github.com/data-dynamos/viz-platform",
      metrics: {
        codeQuality: null,
        innovation: null,
        feasibility: null,
        security: null,
      },
    },
  ]

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI-Powered Judging</h1>
          <p className="text-muted-foreground">
            Evaluate submissions with AI assistance for fair and comprehensive judging
          </p>
        </div>
        <Button>
          <BarChart className="mr-2 h-4 w-4" />
          View Leaderboard
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search submissions..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Submissions</TabsTrigger>
          <TabsTrigger value="pending">Pending Evaluation</TabsTrigger>
          <TabsTrigger value="evaluated">Evaluated</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            {submissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{submission.name}</CardTitle>
                      <CardDescription>by {submission.team}</CardDescription>
                    </div>
                    <Badge variant={submission.status === "Evaluated" ? "default" : "outline"}>
                      {submission.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{submission.description}</p>
                  <div className="flex items-center space-x-2">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{submission.github}</span>
                  </div>
                  {submission.status === "Evaluated" ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium">Overall Score</span>
                        </div>
                        <span className="font-bold text-lg">{submission.score}/100</span>
                      </div>
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Code Quality</span>
                              <span className="text-muted-foreground">{submission.metrics.codeQuality}/100</span>
                            </div>
                            <Progress value={submission.metrics.codeQuality} className="h-2" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Innovation</span>
                              <span className="text-muted-foreground">{submission.metrics.innovation}/100</span>
                            </div>
                            <Progress value={submission.metrics.innovation} className="h-2" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Feasibility</span>
                              <span className="text-muted-foreground">{submission.metrics.feasibility}/100</span>
                            </div>
                            <Progress value={submission.metrics.feasibility} className="h-2" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Security</span>
                              <span className="text-muted-foreground">{submission.metrics.security}/100</span>
                            </div>
                            <Progress value={submission.metrics.security} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center p-4 border rounded-lg border-dashed">
                      <div className="flex flex-col items-center text-center">
                        <AlertCircle className="h-8 w-8 text-muted-foreground mb-2" />
                        <h4 className="font-medium">Awaiting Evaluation</h4>
                        <p className="text-sm text-muted-foreground mt-1">AI analysis in progress</p>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  {submission.status === "Evaluated" ? (
                    <Button variant="default">
                      <Check className="mr-2 h-4 w-4" />
                      Evaluated
                    </Button>
                  ) : (
                    <Button>Evaluate Now</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pending">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">Pending Submissions</h3>
            <p className="text-muted-foreground">Filter applied to show only pending submissions</p>
          </div>
        </TabsContent>
        <TabsContent value="evaluated">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">Evaluated Submissions</h3>
            <p className="text-muted-foreground">Filter applied to show only evaluated submissions</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

