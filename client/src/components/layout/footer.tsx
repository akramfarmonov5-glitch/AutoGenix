import { Link } from "wouter";
import { Settings, Zap } from "lucide-react";
import { FaTelegram, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center relative">
                <Settings className="w-4 h-4 text-accent" />
                <Zap className="w-3 h-3 text-white absolute translate-x-1 -translate-y-0.5" />
              </div>
              <span className="text-xl font-bold">AutoGenix AI</span>
            </div>
            <p className="text-background/80 mb-4">
              AI texnologiyalari yordamida kontentingizni avtomatlashtiring va biznesingizni rivojlantiring.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/AutoGenixSupport" 
                className="text-background/60 hover:text-background transition-colors"
                data-testid="link-telegram"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors"
                data-testid="link-instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors"
                data-testid="link-linkedin"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors"
                data-testid="link-youtube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Xizmatlar</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-ai-blog">
                  AI Blog Generation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-telegram">
                  Telegram Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-image">
                  Image Generation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-moderation">
                  Content Moderation
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-admin">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tezkor havolalar</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-home">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-services">
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-contact">
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Aloqa</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary w-4 h-4" />
                <span className="text-background/80">info@autogenix.uz</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaTelegram className="text-accent w-4 h-4" />
                <span className="text-background/80">@AutoGenixSupport</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-500 w-4 h-4" />
                <span className="text-background/80">Toshkent, Chilonzor</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">
            © 2024 AutoGenix AI. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="link-privacy">
              Maxfiylik siyosati
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="link-terms">
              Foydalanish shartlari
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors" data-testid="link-help">
              Yordam
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
