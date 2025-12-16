import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-50 to-amber-50/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-serif text-5xl font-light text-stone-900 md:text-6xl text-balance">
            About Indus Dynamic Yoga
          </h1>
          <p className="text-lg leading-relaxed text-stone-600 md:text-xl text-pretty">
            Bringing ancient wisdom to modern life through accessible, transformative yoga and mindfulness practices
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/yoga-class-community-peaceful-meditation-group-wel.jpg"
                alt="Yoga community gathering"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 font-serif text-3xl font-light text-stone-900 md:text-4xl">Our Story</h2>
              <div className="space-y-4 leading-relaxed text-stone-700">
                <p>
                  Indus Dynamic Yoga was founded with a simple yet powerful vision: to make the life-changing benefits
                  of yoga accessible to everyone in our community, regardless of their background or financial
                  circumstances.
                </p>
                <p>
                  Rooted in the timeless wisdom of the Indus Valley tradition, we blend classical yoga philosophy with
                  contemporary teaching methods to create a practice that resonates with modern life. Our approach
                  honours the ancient lineage while addressing the unique challenges of today's world.
                </p>
                <p>
                  Since our founding, we've helped hundreds of individuals discover inner peace, build physical
                  strength, and cultivate mental resilience through our inclusive, community-centred programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-10 shadow-sm">
              <h3 className="mb-4 font-serif text-3xl font-light text-stone-900">Our Vision</h3>
              <p className="leading-relaxed text-stone-700">
                A world where everyone has access to the transformative tools of yoga and mindfulness, creating
                healthier, more compassionate communities where wellbeing is a fundamental right, not a privilege.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-10 shadow-sm">
              <h3 className="mb-4 font-serif text-3xl font-light text-stone-900">Our Mission</h3>
              <p className="leading-relaxed text-stone-700">
                To provide accessible, high-quality yoga and wellness programs that nurture physical health, mental
                clarity, and spiritual growth, while building a supportive community that uplifts and empowers every
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-light text-stone-900 md:text-5xl">Our Values</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-amber-600"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">🙏</div>
              <h3 className="mb-3 font-serif text-2xl font-medium text-stone-900">Accessibility</h3>
              <p className="text-stone-600">
                Yoga and wellness should be available to everyone, regardless of financial means or physical ability.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">💚</div>
              <h3 className="mb-3 font-serif text-2xl font-medium text-stone-900">Community</h3>
              <p className="text-stone-600">
                We grow stronger together, supporting and uplifting one another on our wellness journeys.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">✨</div>
              <h3 className="mb-3 font-serif text-2xl font-medium text-stone-900">Authenticity</h3>
              <p className="text-stone-600">
                We honour traditional wisdom while adapting mindfully to serve contemporary needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Placeholder */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full bg-stone-200">
              <img src="/yoga-teacher-portrait-peaceful-professional.jpg" alt="Founder" className="h-full w-full object-cover" />
            </div>
            <h3 className="mb-2 font-serif text-2xl font-medium text-stone-900">[Founder Name]</h3>
            <p className="mb-6 text-amber-700">Founder & Lead Teacher</p>
            <p className="mx-auto max-w-2xl leading-relaxed text-stone-700 text-pretty">
              [Add founder biography here - their journey into yoga, qualifications, teaching philosophy, and vision for
              Indus Dynamic Yoga. This personal story helps build trust and connection with potential donors.]
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light md:text-4xl">Join Us in Making a Difference</h2>
          <p className="mb-8 text-amber-100">Your support helps us reach more people and transform more lives</p>
          <Button asChild size="lg" className="bg-white px-8 py-6 text-lg font-medium text-amber-900 hover:bg-amber-50">
            <Link href="/donate">
              Support Our Mission <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
