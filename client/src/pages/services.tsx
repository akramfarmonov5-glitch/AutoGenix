import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  PenTool, 
  CheckCircle, 
  Shield, 
  TrendingUp, 
  Settings as SettingsIcon, 
  Palette 
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Bizning <span className="text-primary">xizmatlarimiz</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI texnologiyalari yordamida kontentingizni avtomatlashtiring va vaqtingizni tejang
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Blog Generation */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="service-ai-blog">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">AI Blog Generatsiyasi</h3>
                <p className="text-muted-foreground mb-4">
                  Har kuni 07:00-21:00 oralig'ida avtomatik ravishda SEO-optimallashtirilgan blog postlari yarating.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    15 post/kun
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    SEO optimizatsiya
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    O'zbek tilida
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Avtomatik jadvallashtirish
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Telegram Automation */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="service-telegram">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <FaTelegram className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Telegram Avtomatizatsiya</h3>
                <p className="text-muted-foreground mb-4">
                  Telegram kanalingizga avtomatik tarzda marketing xabarlari va kontentlarni joylashtiring.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    5 post/kun
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Marketing soatlari (09:00, 12:00, 15:00, 18:00, 20:00)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bot integratsiyasi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Rasm bilan post
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Image Generation */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="service-image-generation">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">AI Rasm Generatsiyasi</h3>
                <p className="text-muted-foreground mb-4">
                  Gemini 2.5 Flash yordamida har bir post uchun professional rasmlar yarating.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    OG image format (1200x630)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Brand ranglar (#1E40AF, #FACC15)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Avtomatik optimizatsiya
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Logo integratsiya
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Content Moderation */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="service-moderation">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Kontent Moderatsiyasi</h3>
                <p className="text-muted-foreground mb-4">
                  Avtomatik filter va moderatsiya tizimi bilan sifatli kontent ta'minlash.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Profanity filter
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Review flaglari
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI-powered tekshirish
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cost Control */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="service-cost-control">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Xarajatlar Nazorati</h3>
                <p className="text-muted-foreground mb-4">
                  Kunlik limitlar va xarajatlar monitoringi bilan byudjetingizni nazorat qiling.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Kunlik rasm limiti (50/kun)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Xarajat monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Auto-pause funkciyasi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time statistika
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Admin Dashboard */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="service-admin-dashboard">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <SettingsIcon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Admin Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  To'liq nazorat paneli bilan kontentlaringizni boshqaring va monitoring qiling.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Post management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Manual publishing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Job logs va audit
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Biznes uchun AI avtomatizatsiyani bugun boshlang
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vaqt tejash va sifatli kontent yaratish uchun bizning xizmatlarimizdan foydalaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="button-start-now">
              <Button className="bg-primary text-primary-foreground px-8 py-3 text-lg hover:bg-primary/90 font-semibold">
                Hozir boshlash
              </Button>
            </Link>
            <Link href="/portfolio" data-testid="button-view-examples">
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg font-semibold"
              >
                Misollarni ko'rish
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
