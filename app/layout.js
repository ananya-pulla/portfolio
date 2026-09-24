import './globals.css'
import Preloader from '../components/Preloader'
import FloatingBubbles from '../components/FloatingBubbles'

export const metadata = {
  title: 'Ananya Pulla • Complete Portfolio',
  description: 'Where spatial computing meets tactile storytelling. Complete portfolio of Ananya Pulla — Computer Science & Engineering.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-pink text-brand-dark antialiased">
        <Preloader />
        <FloatingBubbles />
        {children}
      </body>
    </html>
  )
}


