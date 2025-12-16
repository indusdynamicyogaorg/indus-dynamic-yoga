import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    title: "New Community Center Partnership Announced",
    date: "December 2024",
    excerpt:
      "We're thrilled to announce a new partnership with the Riverside Community Centre, bringing free yoga classes to underserved neighbourhoods.",
    image: "/community-center-partnership-announcement.jpg",
    category: "Partnership",
  },
  {
    title: "Youth Wellness Program Reaches 100 Students",
    date: "November 2024",
    excerpt:
      "Our youth program has now supported over 100 young people in developing mindfulness and stress management skills through yoga.",
    image: "/youth-students-yoga-celebration-success.jpg",
    category: "Impact",
  },
  {
    title: "Winter Wellness Workshop Series Begins",
    date: "October 2024",
    excerpt:
      "Join us for our winter series of wellness workshops focusing on seasonal self-care, immune support, and maintaining balance during darker months.",
    image: "/winter-wellness-workshop-cozy-meditation.jpg",
    category: "Event",
  },
  {
    title: "Teacher Training Graduation Ceremony",
    date: "September 2024",
    excerpt:
      "Congratulations to our latest cohort of certified yoga teachers! Twelve passionate individuals completed our 200-hour training program.",
    image: "/graduation-ceremony-yoga-teachers-certificate.jpg",
    category: "Training",
  },
  {
    title: "Summer Retreat: A Transformative Experience",
    date: "August 2024",
    excerpt:
      "Our first summer wellness retreat in the Lake District brought together 25 participants for three days of yoga, meditation, and nature connection.",
    image: "/yoga-retreat-nature-lake-district-peaceful.jpg",
    category: "Event",
  },
  {
    title: "Donor Spotlight: Meet Sarah Thompson",
    date: "July 2024",
    excerpt:
      "Sarah has been supporting our mission for three years. Hear her story and why accessible yoga matters to her and our community.",
    image: "/donor-volunteer-community-impact-portrait.jpg",
    category: "Spotlight",
  },
]

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-50 to-amber-50/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-serif text-5xl font-light text-stone-900 md:text-6xl text-balance">
            News & Updates
          </h1>
          <p className="text-lg leading-relaxed text-stone-600 md:text-xl text-pretty">
            Stay informed about our latest programs, community impact stories, and upcoming events
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden border-stone-200 transition-shadow hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-amber-700 px-3 py-1 text-xs font-medium text-white">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-sm text-stone-500">{item.date}</p>
                  <h3 className="mb-3 font-serif text-xl font-medium text-stone-900 text-balance">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-stone-600">{item.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 p-0 h-auto font-medium"
                  >
                    Read more →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Placeholder */}
      <section className="bg-amber-700 py-16 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-light">Stay Connected</h2>
          <p className="mb-6 text-amber-100">
            Subscribe to our newsletter for monthly updates, wellness tips, and stories from our community
          </p>
          <p className="text-sm text-amber-200">[Newsletter signup form can be added here]</p>
        </div>
      </section>
    </div>
  )
}
