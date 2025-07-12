"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowLeft,
  Code,
  Database,
  Shield,
  Clock,
  Zap,
  Brain,
  Globe,
  BarChart3,
  Star,
  TrendingUp,
  Award,
  Rocket,
  Github,
  Sparkles,
  Terminal,
  Users,
  Heart,
  Coffee,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  GitBranch,
  Package,
  Flame,
} from "lucide-react"

export default function MoreAbout() {
  const [isVisible, setIsVisible] = useState(false)
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  useEffect(() => {
    setIsVisible(true)

    // Auto-flip cards in sequence
    const timer = setTimeout(() => {
      setFlippedCards([0, 1, 2])
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const coreFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scrape hundreds of URLs at once",
      color: "text-yellow-400",
      description: "Parallel processing for maximum efficiency",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Extract clean, usable data without the mess",
      color: "text-purple-400",
      description: "AI-powered data cleaning and structuring",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Skip complex setups or bloated tools",
      color: "text-blue-400",
      description: "Zero configuration, instant results",
    },
  ]

  const aboutFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "No-Code Solution",
      description: "Build scrapers without writing a single line of code",
      color: "from-blue-400 to-cyan-400",
      metric: "0 lines of code needed",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Smart Data Extraction",
      description: "AI identifies and extracts the data you need automatically",
      color: "from-purple-400 to-pink-400",
      metric: "95% accuracy rate",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Anti-Detection",
      description: "Advanced techniques to bypass bot detection systems",
      color: "from-green-400 to-emerald-400",
      metric: "99.9% success rate",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      description: "Track your scraping jobs with live status updates",
      color: "from-orange-400 to-red-400",
      metric: "Live updates",
    },
  ]

  const proFeatures = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Bulk Scraping at Scale",
      description: "Process thousands of URLs simultaneously",
      detail: "Enterprise-grade infrastructure for massive data extraction projects with auto-scaling capabilities",
      color: "from-blue-400 via-cyan-400 to-teal-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      metric: "10,000+ URLs/hour",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Auto-Cleaning",
      description: "AI-powered data structuring",
      detail: "Advanced algorithms automatically clean and format your scraped data with machine learning optimization",
      color: "from-purple-400 via-pink-400 to-rose-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      metric: "99% clean data",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "API & Dashboard",
      description: "Full analytics and control",
      detail: "RESTful API access with comprehensive dashboard, real-time analytics, and team collaboration tools",
      color: "from-green-400 via-emerald-400 to-teal-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      metric: "REST API included",
    },
  ]

  const stats = [
    {
      number: "1,000+",
      label: "URLs processed in 3 days",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-400 to-emerald-400",
      description: "Lightning-fast processing",
    },
    {
      number: "#1",
      label: "on Lovable Launched",
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-400",
      description: "Community favorite",
    },
    {
      number: "400+",
      label: "URLs scraped in one day",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      description: "Real user adoption",
    },
  ]

  const testimonials = [
    {
      text: "Absolutely, I tried a website and the output was clean. Let's connect to get to know each other.",
      author: "Gursharan Sidhu",
      role: "LinkedIn",
      platform: "LinkedIn",
      avatar: "GS",
      rating: 5,
      verified: true,
    },
    {
      text: "Looks interesting. What are you using under the hood? And out of interest why make an open source tool and not sell it as a SaaS app (just genuinely curious)?",
      author: "Paul Towers",
      role: "Dev Community",
      platform: "Dev Community",
      avatar: "PT",
      rating: 5,
      verified: true,
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
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <img src="/scraply-logo.png" alt="Scraply" className="w-8 h-8" />
            <span className="text-xl font-bold">Back to Waitlist</span>
          </Link>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/pritpatel2412"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden md:block">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8 space-y-24">
        {/* Header Section */}
        <section className="text-center">
          <div
            className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {/* Removed the large Scraply logo here */}
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white border-0 px-6 py-3 text-sm font-medium hover:scale-105 transition-transform duration-300">
              <Flame className="w-4 h-4 mr-2" />
              Open Source • Developer First • Blazing Fast
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              More About Scraply
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about the future of web scraping
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Journey So Far</h2>
            <p className="text-gray-400">Real numbers, real impact</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-purple-500/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div
                    className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text mb-4 flex justify-center`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.number}
                  </div>
                  <p className="text-white font-medium mb-2">{stat.label}</p>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What is Scraply Section */}
        <section>
          <Card className="backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  📌 What is Scraply?
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  🧠 Scraply is a{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold">
                    blazing-fast, open-source
                  </span>{" "}
                  web scraping tool designed for developers, indie hackers, and data pros who want clean, structured
                  data — instantly.
                </p>

                <div className="mb-8">
                  <p className="text-lg text-gray-400 mb-6">With just a few clicks, Scraply lets you:</p>
                  <div className="space-y-4">
                    {coreFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                            {feature.icon}
                          </div>
                          <div>
                            <span className="text-gray-300 text-lg font-medium block">{feature.title}</span>
                            <span className="text-gray-500 text-sm">{feature.description}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    In only{" "}
                    <span className="text-purple-400 font-bold">3 days, Scraply processed over 1,000+ URLs</span> — and
                    that's just the beginning. It ranked{" "}
                    <span className="text-blue-400 font-bold">#1 on Lovable Launched</span> this week, with users
                    scraping <span className="text-green-400 font-bold">400+ URLs in just one day</span>. The traction
                    is organic, real, and growing fast.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Features Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Features</h2>
            <p className="text-gray-400">What makes Scraply special</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-purple-500/20 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-6 text-center h-full flex flex-col relative z-10">
                  <div
                    className={`text-transparent bg-gradient-to-r ${feature.color} bg-clip-text mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm flex-grow mb-3">{feature.description}</p>
                  <Badge className="bg-white/10 text-white border-white/20 text-xs">{feature.metric}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Developer Testimonials Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Developers Are Saying</h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-400 ml-2">Real feedback from our community</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
              >
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-gray-400 text-sm">said on {testimonial.platform}</p>
                      </div>
                    </div>
                    {testimonial.verified && (
                      <div className="text-blue-400">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scraply Pro Features Section 

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Scraply Pro Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Premium features designed for enterprise-scale web scraping
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {proFeatures.map((feature, index) => (
              <div key={index} className="flip-card">
                <div className={`flip-card-inner ${flippedCards.includes(index) ? "flipped" : ""}`}>
                  
                  <Card className="flip-card-front backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl h-80 relative overflow-hidden group hover:shadow-purple-500/20 transition-shadow duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center relative z-10">
                      <div
                        className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-400 text-lg mb-4">{feature.description}</p>
                      <Badge className="bg-white/10 text-white border-white/20 text-xs">{feature.metric}</Badge>
                    </CardContent>
                  </Card>

                  <Card className="flip-card-back backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl h-80 relative overflow-hidden hover:shadow-purple-500/20 transition-shadow duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgColor} opacity-50`}></div>
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center relative z-10">
                      <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-spin-slow" />
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.detail}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>
        */}

        {/* Community & Open Source Section */}
        <section>
          <Card className="backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl hover:shadow-green-500/10 transition-all duration-500">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  💚 Open Source & Community
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
                  Scraply core is built by developers, for developers and remains completely open source. However,
                  Scraply Pro is our premium SaaS offering with advanced features for enterprise-scale scraping.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Heart className="w-6 h-6 text-red-400 mr-2" />
                      Why Keep Core Open Source?
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Core Scraply remains completely transparent and free",
                        "Community-driven development for the open source version",
                        "No vendor lock-in for basic scraping needs",
                        "Extensible foundation you can build upon",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Users className="w-6 h-6 text-blue-400 mr-2" />
                      Join the Community
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="https://github.com/pritpatel2412"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span className="text-gray-300 group-hover:text-white">Contribute on GitHub</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </a>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <GitBranch className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Fork, star, and contribute</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <Package className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">MIT License - Use freely</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 mb-6">
                    Built with <Heart className="w-4 h-4 text-red-400 inline mx-1" /> by developers who understand the
                    pain of web scraping
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      <Coffee className="w-3 h-3 mr-1" />
                      Caffeine Powered
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      <Terminal className="w-3 h-3 mr-1" />
                      Developer First
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Freemium Model
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 relative overflow-hidden group max-w-2xl mx-auto">
            <CardContent className="p-10 relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Join the Revolution?</h2>
              <p className="text-gray-400 mb-6">
                Don't miss out on early access to Scraply Pro - our premium SaaS platform. Join thousands of developers
                already on the waitlist for advanced scraping features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg group relative overflow-hidden">
                    Join the Waitlist Now
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <a href="https://github.com/pritpatel2412" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 text-lg group">
                    <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Star on GitHub
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-3 text-lg">Built with ❤️ by the Scraply Team</p>
          <p className="text-gray-500 text-sm mb-4">Open source, developer-first, blazing fast</p>
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
        
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
          height: 320px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
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
