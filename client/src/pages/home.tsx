import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { 
  PenTool, 
  Settings, 
  Zap, 
  CheckCircle, 
  BarChart3,
  Palette,
  Shield,
  TrendingUp,
  Bot
} from "lucide-react";
import { FaTelegram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary bg-hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent-foreground border border-accent/20">
                <Bot className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">AI Content Automation Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">AI bilan</span><br />
                kontentingizni<br />
                <span className="text-accent">avtomatlashtiring</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Har kuni 15 ta blog posti va 5 ta Telegram xabari avtomatik yaratish. Gemini AI yordamida matn va rasm generatsiya qiling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" data-testid="button-start-free">
                  <Button className="bg-primary text-primary-foreground px-8 py-3 text-lg hover:bg-primary/90 font-semibold">
                    Bepul boshlash
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="px-8 py-3 text-lg font-semibold"
                  data-testid="button-watch-demo"
                >
                  <FaYoutube className="w-5 h-5 mr-2 text-red-500" />
                  Demo ko'rish
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary" data-testid="stat-daily-posts">15+</div>
                  <div className="text-sm text-muted-foreground">Kunlik postlar</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary" data-testid="stat-telegram-posts">5+</div>
                  <div className="text-sm text-muted-foreground">Telegram postlari</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary" data-testid="stat-uptime">24/7</div>
                  <div className="text-sm text-muted-foreground">Avtomatik rejim</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="border border-border shadow-xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">Content Generation Dashboard</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <div className="flex items-center space-x-3">
                          <PenTool className="w-4 h-4 text-primary" />
                          <span className="font-medium">Blog Post Generation</span>
                        </div>
                        <div className="text-green-500 font-semibold" data-testid="status-blog">Active</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/10">
                        <div className="flex items-center space-x-3">
                          <FaTelegram className="w-4 h-4 text-accent" />
                          <span className="font-medium">Telegram Automation</span>
                        </div>
                        <div className="text-green-500 font-semibold" data-testid="status-telegram">Active</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Palette className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">Image Generation</span>
                        </div>
                        <div className="text-blue-500 font-semibold" data-testid="status-image">Processing</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Bugun yaratilgan:</span>
                        <span className="font-semibold" data-testid="text-today-created">12/15 post</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Bizning xizmatlarimiz</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI texnologiyalari yordamida kontentingizni avtomatlashtiring va vaqtingizni tejang
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Blog Generation */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-ai-blog">
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
                </ul>
              </CardContent>
            </Card>

            {/* Telegram Automation */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-telegram">
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
                    Marketing soatlari
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bot integratsiyasi
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Image Generation */}
            <Card className="hover:shadow-lg transition-shadow" data-testid="card-image-generation">
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
                    OG image format
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Brand ranglar
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1200x630 o'lcham
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="button-view-all-services">
              <Button className="bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 font-semibold">
                Barcha xizmatlarni ko'rish
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
