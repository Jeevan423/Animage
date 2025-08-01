"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight, Users, BookOpen, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCounter from "@/components/animated-counter"
import ParallaxSection from "@/components/parallax-section"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const featuredCourses = [
    {
      title: "Digital Marketing Mastery",
      description: "Comprehensive digital marketing course covering SEO, SEM, social media, and analytics.",
      duration: "3 months",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Web Development Bootcamp",
      description: "Full-stack web development with modern technologies and frameworks.",
      duration: "6 months",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Data Science & Analytics",
      description: "Learn data analysis, machine learning, and business intelligence tools.",
      duration: "4 months",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const stats = [
    { number: 5000, label: "Students Trained", icon: Users },
    { number: 150, label: "Courses Offered", icon: BookOpen },
    { number: 95, label: "Placement Rate", icon: Award, suffix: "%" },
    { number: 10, label: "Years Experience", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        </motion.div>

        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Animage Digiskill
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Empowering Digital Futures Through Innovation & Excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-x-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Link href="/courses" className="flex items-center">
                  Explore Courses <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Institute Highlights */}
      <ParallaxSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Animage Digiskill?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing world-class digital education that prepares students for the future of work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Relevant Curriculum",
                description:
                  "Our courses are designed with input from industry experts to ensure relevance and practical application.",
                icon: "🎯",
              },
              {
                title: "Expert Faculty",
                description: "Learn from experienced professionals who bring real-world insights to the classroom.",
                icon: "👨‍🏫",
              },
              {
                title: "100% Placement Support",
                description: "Comprehensive placement assistance with our network of partner companies.",
                icon: "🚀",
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Featured Courses */}
      <ParallaxSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular courses designed to accelerate your career in the digital world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {course.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/courses">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              <Link href="/courses" className="flex items-center">
                View All Courses <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </ParallaxSection>
    </div>
  )
}
