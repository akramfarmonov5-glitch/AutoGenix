import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Settings, Zap, Menu, ArrowRight, Play } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Bosh sahifa", active: location === "/" },
    { href: "/services", label: "Xizmatlar", active: location === "/services" },
    { href: "/blog", label: "Blog", active: location.startsWith("/blog") },
    { href: "/portfolio", label: "Portfolio", active: location === "/portfolio" },
    { href: "/contact", label: "Bog'lanish", active: location === "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" data-testid="link-home">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center relative shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Settings className="w-5 h-5 text-accent" />
              <Zap className="w-3.5 h-3.5 text-white absolute translate-x-1 -translate-y-0.5" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              AutoGenix<span className="text-gradient"> AI</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                  item.active
                    ? "text-primary bg-primary/5"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                }`}
                data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
                {item.active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/admin" data-testid="link-admin">
              <Button variant="ghost" className="text-gray-600 hover:text-primary font-medium">
                <Play className="w-4 h-4 mr-2" />
                Demo ko'rish
              </Button>
            </Link>
            <Link href="/contact" data-testid="link-cta">
              <Button className="bg-primary text-white hover:bg-primary/90 font-medium px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Bepul Boshlash
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden bg-gray-50 hover:bg-gray-100 rounded-lg"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5 text-gray-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center relative">
                    <Settings className="w-4 h-4 text-accent" />
                    <Zap className="w-3 h-3 text-white absolute translate-x-1 -translate-y-0.5" />
                  </div>
                  <span className="text-xl font-bold text-foreground">
                    AutoGenix<span className="text-gradient"> AI</span>
                  </span>
                </div>
                
                {/* Mobile Navigation */}
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg transition-all duration-200 px-4 py-3 rounded-lg ${
                      item.active
                        ? "text-primary bg-primary/5 font-semibold"
                        : "text-gray-600 hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-3 mt-8 pt-6 border-t border-gray-200">
                  <Link href="/admin" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-demo">
                    <Button variant="outline" className="w-full font-medium">
                      <Play className="w-4 h-4 mr-2" />
                      Demo ko'rish
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-cta">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 font-medium">
                      Bepul Boshlash
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
