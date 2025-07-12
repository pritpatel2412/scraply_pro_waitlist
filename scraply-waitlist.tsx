"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Loader2,
  CheckCircle,
  Users,
  ArrowRight,
  TrendingUp,
  Award,
  Rocket,
  Zap,
  Brain,
  BarChart3,
  ExternalLink,
  Github,
  Flame,
} from "lucide-react"

export default function ScraplyWaitlist() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [emailError, setEmailError] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setEmailError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    setEmailError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/23751481/u3jn9k1/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      setEmailError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const achievements = [
    {
      number: "1,000+",
      label: "URLs processed in just 3 days",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-400 to-emerald-400",
      description: "Lightning-fast processing power",
    },
    {
      number: "#1",
      label: "Product of the week on Lovable",
      icon: <Award className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-400",
      description: "Community favorite",
    },
    {
      number: "400+",
      label: "URLs scraped by users in one day",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-400 to-pink-400",
      description: "Real user adoption",
    },
  ]

  const proFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Bulk Scraping at Scale",
      description: "Process thousands of URLs simultaneously with enterprise-grade infrastructure",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Auto-Cleaning",
      description: "Smart algorithms automatically structure and clean your scraped data",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "API & Advanced Dashboard",
      description: "Full API access with real-time analytics and team collaboration tools",
      color: "from-blue-400 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden relative">
      {/* Optimized Efficient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient orbs - reduced complexity */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-rose-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-teal-500/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

        {/* Subtle animated particles - reduced count */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-grid-pattern"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/scraply-logo.png" alt="Scraply" className="w-8 h-8" />
            <span className="text-xl font-bold">Scraply</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/more-about"
              className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-1"
            >
              <span>More About</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/pritpatel2412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8 space-y-24">
        {/* Hero Section */}
        <section className="text-center">
          <div
            className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <Badge className="mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white border-0 px-6 py-3 text-sm font-medium hover:scale-105 transition-transform duration-300">
              <Flame className="w-4 h-4 mr-2" />
              Open Source • Blazing Fast • No Login Required
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent leading-tight tracking-tight">
              Scraply Pro
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-200">Web Scraping, Reimagined</h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              The blazing-fast, open-source tool that's already processing{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text font-bold">
                thousands of URLs
              </span>{" "}
              with zero setup required
            </p>
          </div>
        </section>

        {/* What Scraply Did in 3 Days - Hero Stats */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              🚀 What We Did in Just 3 Days
            </h2>
            <p className="text-xl text-gray-400">Organic growth that speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20 relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div
                    className={`text-transparent bg-gradient-to-r ${achievement.color} bg-clip-text mb-4 flex justify-center`}
                  >
                    {achievement.icon}
                  </div>
                  <div
                    className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-3`}
                  >
                    {achievement.number}
                  </div>
                  <p className="text-white font-semibold mb-2">{achievement.label}</p>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What is Scraply - Brief */}
        <section>
          <Card className="backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What is Scraply?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                Scraply is the{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold">
                  blazing-fast, open-source
                </span>{" "}
                web scraping tool that turns any website into clean, structured data with just a few clicks.
              </p>

              {/* Scraply Pro Coming Soon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center mb-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2 text-sm font-medium animate-pulse">
                    🔥 Coming Soon
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Scraply Pro
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Premium SaaS platform with enterprise-grade features for large-scale web scraping projects
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">⚡ No Setup Required</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">🧠 AI-Powered Cleaning</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">🔓 Open Source Core</Badge>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">💼 Pro Features</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/more-about">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    Learn More About Scraply
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  disabled
                  className="bg-gradient-to-r from-orange-600 to-red-600 opacity-60 cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg"
                >
                  Scraply Pro - Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Waitlist Form - Main CTA */}
        <section className="max-w-lg mx-auto">
          <Card className="group backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-10 relative z-10">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                      Join the Scraply Pro Waitlist
                    </h3>
                    <p className="text-gray-400 text-lg">Be the first to access premium scraping features</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-3">
                        Enter your email address
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            setEmailError("")
                          }}
                          placeholder="you@example.com"
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 h-14 text-lg backdrop-blur-sm hover:bg-white/15 focus:bg-white/15"
                          disabled={isSubmitting}
                        />
                      </div>
                      {emailError && <p className="text-red-400 text-sm mt-2">{emailError}</p>}
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent text-lg group relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                          Joining Waitlist...
                        </>
                      ) : (
                        <>
                          Join Waitlist - It's Free!
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm">
                      <Users className="w-4 h-4 inline mr-1" />
                      5,000+ devs can’t be wrong — join the waitlist today
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="relative mb-6">
                    <CheckCircle className="w-24 h-24 text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-4xl font-bold text-green-400 mb-4">🎉 You're In!</h3>
                  <p className="text-gray-300 text-xl mb-4">Welcome to the Scraply Pro waitlist</p>
                  <p className="text-gray-400 text-sm">We'll email you as soon as early access opens</p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-3 text-lg">Built by the Scraply Team</p>
          <p className="text-gray-500 text-sm mb-4">No spam, just early access to the future of web scraping</p>
          <div className="flex justify-center space-x-8 text-gray-500 text-sm">
            <span className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">🔓 Open Source</span>
            <span className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">⚡ Blazing Fast</span>
            <span className="hover:text-pink-400 transition-colors duration-300 cursor-pointer">
              🚀 Developer First
            </span>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        .animation-delay-2000 { animation-delay: 2s; }
        
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  )
}
