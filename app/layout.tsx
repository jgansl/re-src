import Footer from "@/block-patterns/footer/Footer"
import Navigation from "@/block-patterns/navigation/Navigation"
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
