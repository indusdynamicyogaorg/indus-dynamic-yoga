export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-b from-orange-50 to-white">
        <h1 className="text-5xl font-bold mb-4">
          Indus Dynamic Yoga
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Balance your body, calm your mind, and awaken your inner strength
          through mindful yoga practices.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Why Indus Dynamic Yoga?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Indus Dynamic Yoga, we blend traditional yoga techniques with
          modern movement science. Our sessions are designed for all levels,
          helping you improve flexibility, strength, and mental clarity.
        </p>
      </section>

      {/* Classes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Our Classes
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Hatha Yoga</li>
            <li>• Vinyasa Flow</li>
            <li>• Power Yoga</li>
            <li>• Meditation & Breathwork</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Indus Dynamic Yoga. All rights reserved.
      </footer>

    </main>
  )
}
