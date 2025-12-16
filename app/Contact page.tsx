import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-50 to-amber-50/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-serif text-5xl font-light text-stone-900 md:text-6xl text-balance">Get in Touch</h1>
          <p className="text-lg leading-relaxed text-stone-600 md:text-xl text-pretty">
            Have questions about our programs or want to learn more about supporting our mission? We'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-light text-stone-900">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-stone-700">
                    Full Name
                  </Label>
                  <Input id="name" type="text" placeholder="Your name" className="mt-2 border-stone-300" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-stone-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2 border-stone-300"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-stone-700">
                    Subject
                  </Label>
                  <Input id="subject" type="text" placeholder="How can we help?" className="mt-2 border-stone-300" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-stone-700">
                    Message
                  </Label>
                  <Textarea id="message" rows={6} placeholder="Tell us more..." className="mt-2 border-stone-300" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-amber-700 text-white hover:bg-amber-800">
                  Send Message
                </Button>
                <p className="text-sm text-stone-500">
                  Note: Contact form functionality will be connected once you configure your email service
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-light text-stone-900">Contact Information</h2>
              <div className="space-y-6">
                <Card className="border-stone-200 bg-stone-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Mail className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-stone-900">Email</h3>
                      <p className="text-stone-600">info@indusdynamicyoga.org</p>
                      <p className="text-sm text-stone-500 mt-1">[Update with your email]</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-stone-200 bg-stone-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-3">
                      <Phone className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-stone-900">Phone</h3>
                      <p className="text-stone-600">+44 (0) 20 XXXX XXXX</p>
                      <p className="text-sm text-stone-500 mt-1">[Add your phone number]</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-stone-200 bg-stone-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-3">
                      <MapPin className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-stone-900">Location</h3>
                      <p className="text-stone-600">United Kingdom</p>
                      <p className="text-sm text-stone-500 mt-1">[Add your address when ready]</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Social Media Placeholder */}
              <div className="mt-8">
                <h3 className="mb-4 font-medium text-stone-900">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-200 text-stone-400">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-200 text-stone-400">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-200 text-stone-400">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-3 text-sm text-stone-500">[Add your social media links in the footer]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
