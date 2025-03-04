'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, Instagram, DiscIcon as Phone, Mail, MapPin, Linkedin } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          subject: "general",
          message: "",
        })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-black p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 p-4">
          {/* Left Section */}
          <Card className="bg-black text-white relative overflow-hidden">
            <CardContent className="p-6 space-y-8 relative z-10">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Let&apos;s Connect for Sports</h2>
                <p className="text-gray-400">Get in touch</p>
              </div>
              <div className="space-y-6 py-24">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5" />
                  <span>+91 98301 07288</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5" />
                  <span>support@strength.net.in</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5" />
                  <span>Godrej Genesis, Sector V, Bidhannagar, Kolkata, West Bengal 700091</span>
                </div>
              </div>
              <div className="flex space-x-4 pt-8">
                <a href="https://twitter.com/yourstrength0" className="hover:text-gray-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/_yourstrength_?igsh=aHJnNDgwd2k3Njg%3D&utm_source=qr" className="hover:text-gray-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/yourstrength/" className="hover:text-gray-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 pointer-events-none">
                <svg width="208" height="209" viewBox="0 0 208 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="162.5" cy="160.5" r="134.5" fill="#1A1A1A"/>
                  <circle cx="69" cy="69" r="69" fill="#484848" fillOpacity="0.5"/>
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Right Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fname">First Name</Label>
                <Input id="fname" value={formData.fname} onChange={handleInputChange} placeholder="Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lname">Last Name</Label>
                <Input id="lname" value={formData.lname} onChange={handleInputChange} placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 012 3456 789" />
            </div>
            <div className="space-y-2">
              <Label>Select Subject?</Label>
              <RadioGroup value={formData.subject} onValueChange={handleSubjectChange} className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general">General Inquiry</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="technical" id="technical" />
                  <Label htmlFor="technical">Technical Support</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feedback" id="feedback" />
                  <Label htmlFor="feedback">Feedback & Suggestions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="others" id="others" />
                  <Label htmlFor="others">Others</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message.."
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full md:w-auto bg-black text-white hover:bg-gray-800 flex items-center justify-center">
              {loading ? (
                <span className="animate-spin border-2 border-t-transparent rounded-full w-4 h-4 mr-2"></span>
              ) : status === "success" ? (
                "Message Sent"
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
