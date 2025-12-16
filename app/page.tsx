import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Sparkles, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
        <div className="absolute inset-0 opacity-10">
          <img src="/peaceful-yoga-meditation-nature-sunset-calm-wellne.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-900">
            Supporting Wellness & Community
          </div>
          <h1 className="mb-6 font-serif text-5xl font-light leading-tight text-stone-900 md:text-7xl text-balance">
            Transform Lives Through
            <span className="block font-medium text-amber-800">Yoga & Mindfulness</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl text-pretty">
            Indus Dynamic Yoga brings ancient wisdom to modern living. Your donation helps us provide accessible yoga,
            meditation, and wellness programs to our community.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-amber-700 px-8 py-6 text-lg font-medium text-white hover:bg-amber-800"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-stone-300 px-8 py-6 text-lg font-medium text-stone-700 hover:bg-stone-50 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-serif text-4xl font-light text-stone-900 md:text-5xl text-balance">Our Mission</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-amber-600"></div>
          </div>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-stone-700 text-pretty">
            At Indus Dynamic Yoga, we believe wellness should be accessible to everyone. Through the transformative
            power of yoga and meditation, we create spaces where individuals can discover inner peace, build resilience,
            and connect with a supportive community. Your generosity helps us offer subsidised classes, community
            workshops, and outreach programs to those who need them most.
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-serif text-4xl font-light text-stone-900 md:text-5xl text-balance">Your Impact</h2>
            <p className="mx-auto max-w-2xl text-stone-600 text-pretty">
              Every donation directly supports our mission to bring wellness to our community
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-stone-200 bg-white p-8 transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-amber-100 p-3">
                <Users className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-medium text-stone-900">Community Classes</h3>
              <p className="leading-relaxed text-stone-600">
                Subsidised yoga and meditation sessions for individuals and families who cannot afford regular classes,
                making wellness accessible to all.
              </p>
            </Card>

            <Card className="border-stone-200 bg-white p-8 transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-amber-100 p-3">
                <Heart className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-medium text-stone-900">Wellness Programs</h3>
              <p className="leading-relaxed text-stone-600">
                Specialized workshops addressing stress, anxiety, and mental health through mindful movement and
                breathwork practices.
              </p>
            </Card>

            <Card className="border-stone-200 bg-white p-8 transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-amber-100 p-3">
                <Sparkles className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-medium text-stone-900">Teacher Training</h3>
              <p className="leading-relaxed text-stone-600">
                Training and supporting the next generation of yoga teachers to spread wellness and mindfulness
                throughout the UK.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-serif text-4xl font-light md:text-5xl text-balance">Support Our Community Today</h2>
          <p className="mb-10 text-lg leading-relaxed text-amber-100 text-pretty">
            Your contribution, no matter the size, creates lasting change. Join us in building a healthier, more mindful
            community.
          </p>
          <Button asChild size="lg" className="bg-white px-8 py-6 text-lg font-medium text-amber-900 hover:bg-amber-50">
            <Link href="/donate">
              Make a Donation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Trust Building */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center text-stone-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">Secure Payments via Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">UK Registered Organisation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">100% Transparent</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
