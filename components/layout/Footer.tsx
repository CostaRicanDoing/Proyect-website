import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">
                Costa Rican<span className="text-orange-500"> Doing</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your local adventure experts in Costa Rica. ATV, zipline, rafting and more — unforgettable experiences await.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Tours</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tours/atv-la-fortuna" className="hover:text-orange-500 transition-colors">ATV La Fortuna</Link></li>
              <li><Link href="/tours/zipline-la-fortuna" className="hover:text-orange-500 transition-colors">Zipline La Fortuna</Link></li>
              <li><Link href="/tours/white-water-rafting" className="hover:text-orange-500 transition-colors">White Water Rafting</Link></li>
              <li><Link href="/tours/la-fortuna-waterfall" className="hover:text-orange-500 transition-colors">Waterfall Tour</Link></li>
              <li><Link href="/tours/atv-zipline-combo" className="hover:text-orange-500 transition-colors">ATV + Zipline Combo</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <span>La Fortuna, Alajuela, Costa Rica</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500 shrink-0" />
                <a href="tel:+50688888888" className="hover:text-orange-500 transition-colors">+506 8888-8888</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500 shrink-0" />
                <a href="mailto:info@costaricandoing.com" className="hover:text-orange-500 transition-colors">info@costaricandoing.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Costa Rican Doing. All rights reserved.</p>
          <p>
            <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
