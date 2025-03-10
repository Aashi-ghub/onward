"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type UserRole = "organizer" | "participant" | "judge" | "recruiter"

interface User {
  id: string
  name: string
  email: string
  image?: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  role: UserRole | null
  isLoading: boolean
  signIn: (provider: string) => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string, role: UserRole) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        // In a real app, this would be an API call to check the session
        const savedUser = localStorage.getItem("onward-user")
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error("Failed to restore session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkSession()
  }, [])

  const signIn = async (provider: string) => {
    setIsLoading(true)
    try {
      // Mock authentication - in a real app, this would call an API
      const mockUser: User = {
        id: "user-1",
        name: "John Doe",
        email: "john@example.com",
        image: "/placeholder.svg?height=40&width=40",
        role: "organizer",
      }

      setUser(mockUser)
      localStorage.setItem("onward-user", JSON.stringify(mockUser))
      router.push("/")

      // Show success toast or notification
    } catch (error) {
      console.error(`Failed to sign in with ${provider}:`, error)
      // Show error toast or notification
    } finally {
      setIsLoading(false)
    }
  }

  const signInWithEmail = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock authentication - in a real app, this would call an API
      const mockUser: User = {
        id: "user-1",
        name: email.split("@")[0],
        email,
        role: "participant",
      }

      setUser(mockUser)
      localStorage.setItem("onward-user", JSON.stringify(mockUser))
      router.push("/")

      // Show success toast or notification
    } catch (error) {
      console.error("Failed to sign in with email:", error)
      // Show error toast or notification
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (name: string, email: string, password: string, role: UserRole) => {
    setIsLoading(true)
    try {
      // Mock registration - in a real app, this would call an API
      const mockUser: User = {
        id: "user-" + Date.now(),
        name,
        email,
        role,
      }

      setUser(mockUser)
      localStorage.setItem("onward-user", JSON.stringify(mockUser))
      router.push("/")

      // Show success toast or notification
    } catch (error) {
      console.error("Failed to sign up:", error)
      // Show error toast or notification
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("onward-user")
    router.push("/auth/signin")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user?.role || null,
        isLoading,
        signIn,
        signInWithEmail,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

