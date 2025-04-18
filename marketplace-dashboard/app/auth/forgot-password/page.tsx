"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2, Mail, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
        return
      }

      setIsSubmitted(true)
    } catch (error) {
      toast({
        title: "An unexpected error occurred",
        description: "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/30 shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2 p-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30">
                <Store className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">MultiMarket</span>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100/70 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold">Check your email</h1>
                <p className="text-gray-600">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-sm text-gray-500">Didn't receive an email? Check your spam folder or try again.</p>
                <Button asChild className="mt-4 bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
                  <Link href="/auth/login">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to login
                  </Link>
                </Button>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-center mb-2">Forgot password?</h1>
                <p className="text-center text-gray-600 mb-6">
                  Enter your email and we'll send you a link to reset your password
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/50 backdrop-blur-sm border-white/30"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send reset link"
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                  Remember your password?{" "}
                  <Link href="/auth/login" className="text-primary hover:underline">
                    Back to login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
