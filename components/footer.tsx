import Link from "next/link"
import { Twitter, MessageCircle, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-2xl">💎</div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Base on Fun
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="#trending" className="text-gray-600 hover:text-primary transition-colors">
              Trending
            </Link>
            <Link href="#launch" className="text-gray-600 hover:text-primary transition-colors">
              Launch
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="flex justify-center gap-5 mb-6">
            <Link
              href="https://x.com/luvnft"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-primary hover:bg-blue-50 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </Link>
            <Link
              href="https://t.me/luvnftv"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-primary hover:bg-blue-50 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Telegram
            </Link>
            <Link
              href="https://t.com/luvnft"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-primary hover:bg-blue-50 transition-colors"
            >

          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} BaseMeme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

