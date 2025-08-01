"use client"

import { motion } from "framer-motion"
import { Clock, Users, Star, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ParallaxSection from "@/components/parallax-section"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      title: "Digital Marketing Mastery",
      description:
        "Comprehensive digital marketing course covering SEO, SEM, social media marketing, content marketing, email marketing, and analytics. Learn to create effective digital campaigns that drive results.",
      duration: "3 months",
      students: 1200,
      rating: 4.8,
      level: "Beginner to Advanced",
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["SEO & SEM", "Social Media Marketing", "Google Analytics", "Content Strategy", "Email Marketing"],
    },
    {
      title: "Full Stack Web Development",
      description:
        "Complete web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, databases, and deployment. Build real-world projects and create a professional portfolio.",
      duration: "6 months",
      students: 950,
      rating: 4.9,
      level: "Beginner to Advanced",
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["React & Node.js", "Database Design", "API Development", "Deployment", "Portfolio Projects"],
    },
    {
      title: "Data Science & Analytics",
      description:
        "Learn data analysis, machine learning, statistical modeling, and business intelligence. Master Python, R, SQL, and popular data science libraries to make data-driven decisions.",
      duration: "4 months",
      students: 800,
      rating: 4.7,
      level: "Intermediate to Advanced",
      image: "/placeholder.svg?height=250&width=400",
      highlights: [
        "Python & R",
        "Machine Learning",
        "Data Visualization",
        "Statistical Analysis",
        "Business Intelligence",
      ],
    },
    {
      title: "UI/UX Design Fundamentals",
      description:
        "Master user interface and user experience design principles. Learn design thinking, prototyping, user research, and create stunning digital experiences using industry-standard tools.",
      duration: "3 months",
      students: 650,
      rating: 4.6,
      level: "Beginner to Intermediate",
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Design Thinking", "Figma & Adobe XD", "User Research", "Prototyping", "Usability Testing"],
    },
    {
      title: "Cloud Computing & DevOps",
      description:
        "Comprehensive cloud computing course covering AWS, Azure, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code. Prepare for cloud certifications.",
      duration: "5 months",
      students: 720,
      rating: 4.8,
      level: "Intermediate to Advanced",
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Cloud Security"],
    },
    {
      title: "Mobile App Development",
      description:
        "Learn to build native and cross-platform mobile applications using React Native, Flutter, and native iOS/Android development. Create apps that users love.",
      duration: "4 months",
      students: 580,
      rating: 4.7,
      level: "Intermediate",
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["React Native", "Flutter", "Native Development", "App Store Deployment", "Mobile UI/UX"],
    },
    {
      title: "Cybersecurity Essentials",
      description:
        "Comprehensive cybersecurity training covering network security, ethical hacking, risk assessment, and security frameworks. Prepare for industry certifications.",
      duration: "4 months",
      students: 420,
      rating: 4.9,
      level: "Beginner to Advanced",
      image: "/placeholder.svg?height=250&width=400",
      highlights: [
        "Ethical Hacking",
        "Network Security",
        "Risk Assessment",
        "Security Frameworks",
        "Incident Response",
      ],
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Deep dive into AI and ML concepts, algorithms, and applications. Learn neural networks, deep learning, natural language processing, and computer vision.",
      duration: "6 months",
      students: 680,
      rating: 4.8,
      level: "Advanced",
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Neural Networks", "Deep Learning", "NLP", "Computer Vision", "AI Ethics"],
    },
    {
      title: "Blockchain & Cryptocurrency",
      description:
        "Explore blockchain technology, smart contracts, DeFi, NFTs, and cryptocurrency development. Learn to build decentralized applications and understand the future of finance.",
      duration: "3 months",
      students: 350,
      rating: 4.6,
      level: "Intermediate to Advanced",
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Smart Contracts", "DeFi Protocols", "NFT Development", "Cryptocurrency", "Web3 Technologies"],
    },
  ]

  const categories = [
    "All Courses",
    "Web Development",
    "Digital Marketing",
    "Data Science",
    "Design",
    "Cloud Computing",
    "Mobile Development",
    "Cybersecurity",
    "AI & ML",
    "Blockchain",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Discover industry-leading courses designed to accelerate your career in the digital world.
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Course Categories */}
      <ParallaxSection className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                  index === 0
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {category}
              </Badge>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Courses Grid */}
      <ParallaxSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students} students
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 flex-1">{course.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                          <Badge key={highlightIndex} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {course.highlights.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{course.highlights.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                      <Link href="/contact" className="flex items-center justify-center w-full">
                        Inquire Now
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We offer customized training programs tailored to your specific needs and career goals.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                <Link href="/contact">Request Custom Training</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 bg-transparent"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
    </div>
  )
}
