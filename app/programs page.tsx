import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const programs = [
  {
    title: "Community Yoga Classes",
    description:
      "Weekly accessible yoga sessions designed for all abilities and experience levels. From gentle flows to dynamic vinyasa, find the practice that suits you.",
    image: "/community-yoga-class-group-peaceful.jpg",
    schedule: "Mondays & Wednesdays, 6:30 PM",
  },
  {
    title: "Mindfulness & Meditation",
    description:
      "Learn practical meditation techniques to reduce stress, improve focus, and cultivate inner peace. Suitable for complete beginners.",
    image: "/meditation-mindfulness-peaceful-calm.jpg",
    schedule: "Saturdays, 9:00 AM",
  },
  {
    title: "Youth Wellness Program",
    description:
      "Specialized yoga and mindfulness classes for children and teenagers, helping young people build resilience and emotional intelligence.",
    image: "/children-youth-yoga-wellness-fun.jpg",
    schedule: "Saturdays, 2:00 PM",
  },
  {
    title: "Gentle Yoga for Seniors",
    description:
      "Chair-based and gentle floor practices designed specifically for older adults, focusing on mobility, balance, and joint health.",
    image: "/senior-gentle-yoga-chair-wellness.jpg",
    schedule: "Fridays, 10:00 AM",
  },
  {
    title: "Stress Management Workshops",
    description:
      "Monthly workshops combining breathwork, meditation, and yoga to help manage anxiety and stress in daily life.",
    image: "/stress-relief-breathwork-workshop-calm.jpg",
    schedule: "First Sunday of each month",
  },
  {
    title: "Yoga Teacher Training",
    description:
      "Comprehensive 200-hour certification program for aspiring yoga teachers, blending traditional philosophy with modern teaching methods.",
    image: "/yoga-teacher-training-education-professional.jpg",
    schedule: "Quarterly cohorts",
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-50 to-amber-50/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-serif text-5xl font-light text-stone-900 md:text-6xl text-balance">
            Programs & Events
          </h1>
          <p className="text-lg leading-relaxed text-stone-600 md:text-xl text-pretty">
            Discover our range of yoga classes, workshops, and wellness programs designed to support your journey to
            better health and inner peace
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Card key={index} className="group overflow-hidden border-stone-200 transition-shadow hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-serif text-xl font-medium text-stone-900">{program.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-stone-600">{program.description}</p>
                  <div className="flex items-center gap-2 text-sm text-amber-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {program.schedule}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-stone-900">Help Us Expand Our Programs</h2>
          <p className="mb-8 text-stone-600">Your donation helps us offer more classes and reach more people in need</p>
          <Button
            asChild
            size="lg"
            className="bg-amber-700 px-8 py-6 text-lg font-medium text-white hover:bg-amber-800"
          >
            <Link href="/donate">Support Our Programs</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
