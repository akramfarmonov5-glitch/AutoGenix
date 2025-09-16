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
      <section className="pt-32 pb-20 bg-gradient-hero bg-hero-pattern relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm">
                <Bot className="w-5 h-5 mr-3 text-primary" />
                <span className="text-sm font-semibold text-gray-700">№1 AI Content Automation Platform</span>
              </div>
              
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-none tracking-tight">
                  <span className="text-gray-900">Biznesingizni</span><br />
                  <span className="text-gradient">AI bilan</span><br />
                  <span className="text-gray-900">avtomatlashtiring</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                  Har kuni <span className="font-semibold text-primary">15 ta professional blog posti</span> va <span className="font-semibold text-primary">5 ta Telegram xabari</span> avtomatik yaratish. Gemini AI texnologiyasi bilan vaqtingizni 90% tejang.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" data-testid="button-start-free">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[200px]">
                    Bepul boshlash
                    <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-primary hover:bg-primary/5 transition-all duration-300 group min-w-[200px]"
                  data-testid="button-watch-demo"
                >
                  <FaYoutube className="w-5 h-5 mr-2 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  Demo ko'rish
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2" data-testid="stat-daily-posts">15+</div>
                  <div className="text-sm font-medium text-gray-600">Kunlik blog postlari</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2" data-testid="stat-telegram-posts">5+</div>
                  <div className="text-sm font-medium text-gray-600">Telegram xabarlari</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2" data-testid="stat-uptime">24/7</div>
                  <div className="text-sm font-medium text-gray-600">Avtomatik ishlash</div>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-6 border-t border-gray-200/50">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">Hozir 50+ kompaniya ishlatmoqda</span>
                </div>
              </div>
            </div>
            {/* Dashboard Preview */}
            <div className="relative lg:pl-8">
              {/* Floating Dashboard */}
              <div className="relative">
                <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm border border-gray-200/50 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Dashboard Header */}
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-semibold text-lg">AutoGenix Dashboard</h3>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium opacity-90">Faol</span>
                        </div>
                      </div>
                      
                      {/* Real-time Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold" data-testid="dashboard-posts">12</div>
                          <div className="text-xs opacity-80">Bugungi postlar</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold" data-testid="dashboard-telegram">3</div>
                          <div className="text-xs opacity-80">Telegram</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold" data-testid="dashboard-images">8</div>
                          <div className="text-xs opacity-80">Rasmlar</div>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-6 space-y-4">
                      {/* Active Services */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200/50">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <PenTool className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Blog Generation</div>
                              <div className="text-sm text-gray-600">Keyingi: 14:00</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-600 font-semibold text-sm" data-testid="status-blog">Faol</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200/50">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FaTelegram className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Telegram Bot</div>
                              <div className="text-sm text-gray-600">Keyingi: 15:00</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-blue-600 font-semibold text-sm" data-testid="status-telegram">Faol</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200/50">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                              <Palette className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">AI Rasm</div>
                              <div className="text-sm text-gray-600">Limit: 42/50</div>
                            </div>
                          </div>
                          <div className="text-purple-600 font-semibold text-sm" data-testid="status-image">84%</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Kunlik progress</span>
                          <span className="text-sm font-semibold text-primary" data-testid="text-today-progress">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full" style={{width: '80%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
              </div>
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
