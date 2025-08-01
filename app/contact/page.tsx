"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ParallaxSection from "@/components/parallax-section"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Animage Digiskill Institute", "123 Tech Park, Digital Hub", "Bangalore, Karnataka 560001", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 80 2345 6789", "Toll Free: 1800 123 4567"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@animagedigiskill.com", "admissions@animagedigiskill.com", "support@animagedigiskill.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 9:00 AM - 5:00 PM", "Sunday: Closed"],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "text-blue-600" },
    { icon: Twitter, href: "#", color: "text-sky-500" },
    { icon: Instagram, href: "#", color: "text-pink-600" },
    { icon: Linkedin, href: "#", color: "text-blue-700" },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Ready to start your digital transformation journey? Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Contact Information */}
      <ParallaxSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you take the next step in your career. Reach out to us through any of the following
              channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <info.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Contact Form and Map */}
      <ParallaxSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <Label htmlFor="course">Course of Interest</Label>
                    <Input id="course" placeholder="Which course are you interested in?" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your requirements..." rows={5} />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Embedded Map */}
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Animage Digiskill Location"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Follow Us</CardTitle>
                  <p className="text-gray-600">Stay connected with us on social media for updates and insights.</p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${social.color}`}
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    For urgent inquiries, call us directly or visit our campus during office hours.
                  </p>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-700">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <strong>Emergency:</strong> +91 98765 43210
                    </p>
                    <p className="flex items-center text-gray-700">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <strong>Quick Response:</strong> support@animagedigiskill.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
