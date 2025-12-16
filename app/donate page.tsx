import { DonationOptions } from "@/components/donation-options"
import { Shield, Lock, CreditCard } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light text-stone-900 md:text-6xl text-balance">
            Support Our Mission
          </h1>
          <p className="text-lg leading-relaxed text-stone-600 md:text-xl text-pretty">
            Your generosity helps us provide accessible yoga and wellness programs to our community
          </p>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <DonationOptions />
        </div>
      </section>

      {/* Security & Trust */}
      <section className="border-t border-stone-200 bg-stone-50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 text-center">
            <h3 className="mb-2 font-serif text-2xl font-light text-stone-900">Safe & Secure Donations</h3>
            <p className="text-sm text-stone-600">Your payment information is processed securely through Stripe</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 rounded-full bg-green-100 p-3">
                <Shield className="h-6 w-6 text-green-700" />
              </div>
              <h4 className="mb-1 font-medium text-stone-900">Bank-Level Security</h4>
              <p className="text-sm text-stone-600">256-bit SSL encryption</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 rounded-full bg-green-100 p-3">
                <Lock className="h-6 w-6 text-green-700" />
              </div>
              <h4 className="mb-1 font-medium text-stone-900">PCI Compliant</h4>
              <p className="text-sm text-stone-600">Meets highest security standards</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 rounded-full bg-green-100 p-3">
                <CreditCard className="h-6 w-6 text-green-700" />
              </div>
              <h4 className="mb-1 font-medium text-stone-900">Multiple Payment Options</h4>
              <p className="text-sm text-stone-600">Card, Apple Pay, Google Pay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="mb-6 font-serif text-3xl font-light text-stone-900">Where Your Donation Goes</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-600"></div>
              <p className="text-stone-700">
                <strong className="font-medium text-stone-900">Community Classes:</strong> Subsidised yoga sessions for
                those facing financial hardship
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-600"></div>
              <p className="text-stone-700">
                <strong className="font-medium text-stone-900">Wellness Workshops:</strong> Mental health and stress
                management programs
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-600"></div>
              <p className="text-stone-700">
                <strong className="font-medium text-stone-900">Teacher Training:</strong> Supporting the next generation
                of yoga instructors
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-600"></div>
              <p className="text-stone-700">
                <strong className="font-medium text-stone-900">Equipment & Space:</strong> Maintaining safe, welcoming
                practice spaces
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
