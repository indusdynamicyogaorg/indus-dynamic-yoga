import "./globals.css"

export const metadata = {
  title: "Indus Dynamic Yoga",
  description: "Indus Dynamic Yoga – Healing, Wellness & Donation Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
