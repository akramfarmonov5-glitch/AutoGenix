import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Settings, Zap, Menu } from "lucide-react";

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
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center relative">
              <Settings className="w-4 h-4 text-accent" />
              <Zap className="w-3 h-3 text-white absolute translate-x-1 -translate-y-0.5" />
            </div>
            <span className="text-xl font-bold text-foreground">AutoGenix AI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${
                  item.active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/admin" data-testid="link-admin">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Admin Panel
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg transition-colors ${
                      item.active
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/admin" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-admin">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                    Admin Panel
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
