"use client"

import { motion } from "framer-motion"
import { Eye, Target, Heart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ParallaxSection from "@/components/parallax-section"

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chairman & CEO",
      bio: "20+ years in digital education and technology leadership. Former CTO at leading tech companies.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ms. Priya Sharma",
      position: "Director of Academics",
      bio: "Educational technology expert with PhD in Computer Science. Published researcher in AI and ML.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mr. Amit Patel",
      position: "Director of Operations",
      bio: "Operations and business development specialist with MBA from IIM. Expert in scaling educational institutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Sunita Reddy",
      position: "Director of Research",
      bio: "Research and development leader in educational technology. 15+ years in curriculum development.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const whatWeDo = [
    {
      icon: Users,
      title: "Skill Development",
      description:
        "Comprehensive training programs designed to bridge the gap between academic learning and industry requirements.",
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Personalized career counseling and mentorship to help students make informed career decisions.",
    },
    {
      icon: Heart,
      title: "Industry Partnerships",
      description: "Strong network of industry partners providing internships, projects, and placement opportunities.",
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Animage Digiskill</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Pioneering digital education since 2014, we have been at the forefront of transforming careers through
              innovative learning experiences.
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* What We Do Section */}
      <ParallaxSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in providing cutting-edge digital skills training that prepares individuals for the modern
              workforce.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <item.icon className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Vision & Mission Section */}
      <ParallaxSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <Eye className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading digital skills institute that transforms lives by bridging the gap between traditional
                education and industry demands, creating a digitally empowered workforce for the future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600"
            >
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide world-class digital education through innovative teaching methodologies, industry-relevant
                curriculum, and comprehensive career support, ensuring every student achieves their professional goals.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Board of Directors Section */}
      <ParallaxSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated leadership team committed to excellence in digital education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
