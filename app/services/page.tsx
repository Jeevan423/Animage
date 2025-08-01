"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Award, BookOpen, TrendingUp, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Professional Workshops",
      description: "Intensive hands-on workshops covering the latest digital technologies and industry best practices.",
      features: [
        "Weekend and evening batches available",
        "Industry expert instructors",
        "Practical project-based learning",
        "Certificate of completion",
        "Networking opportunities",
      ],
      color: "blue",
    },
    {
      icon: Briefcase,
      title: "Placement Services",
      description: "Comprehensive placement assistance with our extensive network of partner companies.",
      features: [
        "Resume building and optimization",
        "Interview preparation sessions",
        "Mock interviews with industry experts",
        "Job matching based on skills",
        "Post-placement support",
      ],
      color: "green",
    },
    {
      icon: Users,
      title: "Mentoring Programs",
      description: "One-on-one mentoring with industry professionals to guide your career journey.",
      features: [
        "Personalized career guidance",
        "Industry insights and trends",
        "Skill gap analysis",
        "Goal setting and tracking",
        "Long-term career planning",
      ],
      color: "purple",
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Industry-recognized certifications that validate your skills and enhance your career prospects.",
      features: [
        "Globally recognized certificates",
        "Skill-based assessments",
        "Digital badge credentials",
        "LinkedIn profile integration",
        "Continuing education credits",
      ],
      color: "orange",
    },
    {
      icon: TrendingUp,
      title: "Corporate Training",
      description: "Customized training solutions for organizations looking to upskill their workforce.",
      features: [
        "Tailored curriculum design",
        "On-site and remote training",
        "Progress tracking and reporting",
        "Flexible scheduling options",
        "Post-training support",
      ],
      color: "red",
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "Collaborative spaces for students to work on real-world projects and innovative solutions.",
      features: [
        "State-of-the-art facilities",
        "Access to latest technologies",
        "Project collaboration tools",
        "Industry project partnerships",
        "Innovation challenges and competitions",
      ],
      color: "indigo",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
      indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Comprehensive digital education services designed to accelerate your career growth and professional
              development.
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <ParallaxSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to support your learning journey and career
              advancement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${getColorClasses(service.color)} text-white`}>
                    <div className="flex items-center space-x-4">
                      <service.icon className="h-8 w-8" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Call to Action */}
      <ParallaxSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of successful professionals who have accelerated their careers with Animage Digiskill.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 bg-transparent"
              >
                <Link href="/courses">View Courses</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
    </div>
  )
}
