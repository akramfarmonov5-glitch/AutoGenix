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
  Bot,
  Calendar
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
                <Link href="/admin" data-testid="link-watch-demo">
                  <Button 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-primary hover:bg-primary/5 transition-all duration-300 group min-w-[200px]"
                    data-testid="button-watch-demo"
                  >
                    <FaYoutube className="w-5 h-5 mr-2 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                    Demo ko'rish
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
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
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Bizning Xizmatlar
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI Texnologiyalar Bilan<br />
              <span className="text-gradient">Kontent Avtomatizatsiyasi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional darajadagi AI yechimlar bilan biznesingizni keyingi bosqichga olib chiqing
            </p>
          </div>
          
          {/* Services Grid - 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Blog Generation */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden" data-testid="card-ai-blog">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Blog Generatsiyasi</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Har kuni 15 ta SEO-optimallashtirilgan blog posti avtomatik yaratish
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">15 post/kun (07:00-21:00)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">SEO optimizatsiya</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">O'zbek va ingliz tili</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telegram Automation */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden" data-testid="card-telegram">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaTelegram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Telegram Avtomatizatsiya</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Marketing xabarlari va kontentlarni avtomatik joylashtiring
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">5 post/kun</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Marketing soatlari</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Bot integratsiyasi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Image Generation */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden" data-testid="card-image-generation">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rasm Generatsiyasi</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Gemini 2.5 Flash yordamida professional rasmlar yarating
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">OG image format</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Brand ranglari</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">1200x630 o'lcham</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Moderation */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden" data-testid="card-moderation">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kontent Moderatsiyasi</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Avtomatik kontent tekshirish va sifat nazorati
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">So'z-so'zga tekshirish</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Sifat baholash</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Qora ro'yxat filtri</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Control */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden" data-testid="card-cost-control">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Xarajatlar Nazorati</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AI API xarajatlarini nazorat qilish va optimallashtirish
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Kunlik limit</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Xarajat hisoboti</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Ogohlantirish tizimi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admin Dashboard */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden" data-testid="card-admin-dashboard">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To'liq nazorat va boshqaruv paneli
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Real-time monitoring</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Statistika va hisobotlar</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Sozlamalar boshqaruvi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link href="/services" data-testid="button-view-all-services">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Barcha xizmatlarni ko'rish
                <Settings className="w-5 h-5 ml-2 group-hover:rotate-90 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI Yaratgan Kontent
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              So'nggi <span className="text-gradient">Blog Postlarimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI texnologiyamiz yordamida yaratilgan professional blog postlarini o'qing va platformamizning quvvatini ko'ring
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg" data-testid="card-blog-1">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                    Texnologiya
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  AI Texnologiyalari: Biznes Dunyosida Inqilob
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Sun'iy intellekt texnologiyalari zamonaviy biznesda qanday inqilob yaratayotgani va kompaniyalar...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Bugun</span>
                  </div>
                  <span className="text-green-600 font-semibold">AI Generated</span>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg" data-testid="card-blog-2">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Bot className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                    Marketing
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  Kontent Marketing: AI Bilan Strategiya
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Zamonaviy kontent marketing strategiyalarida sun'iy intellektdan qanday foydalanish mumkin...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Kecha</span>
                  </div>
                  <span className="text-green-600 font-semibold">AI Generated</span>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg" data-testid="card-blog-3">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-600">
                    Biznes
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  Startup Rivojlantirish: Muvozanat va Strategiya
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Startup kompaniyalar uchun samarali rivojlantirish strategiyalari va muvozanatli yondashuv...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>2 kun oldin</span>
                  </div>
                  <span className="text-green-600 font-semibold">AI Generated</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA to Blog Page */}
          <div className="text-center">
            <Link href="/blog" data-testid="button-view-all-blogs">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Barcha blog postlarni ko'rish
                <PenTool className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Muvaffaqiyat Hikoyalari
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mijozlarimizning <span className="text-gradient">Natijalari</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AutoGenix AI yordamida o'z bizneslarini muvaffaqiyatli rivojlantirgan kompaniyalarning haqiqiy natijalari
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 - TechCorp */}
            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg" data-testid="card-case-study-1">
              <CardContent className="p-8">
                {/* Company Logo/Name */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">TC</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">TechCorp Solutions</h3>
                    <p className="text-sm text-gray-600">IT Xizmatlar</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600" data-testid="metric-content-increase">300%</div>
                    <div className="text-xs text-gray-600">Kontent o'sishi</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600" data-testid="metric-time-saved">85%</div>
                    <div className="text-xs text-gray-600">Vaqt tejash</div>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 italic mb-4">
                  "AutoGenix AI bizning kontent strategiyamizni butunlay o'zgartirdi. Endi bir kunda 15 ta sifatli blog posti avtomatik yaratamiz."
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">Akmal Nazarov</div>
                    <div className="text-gray-600">Marketing Director</div>
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Faol mijoz
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 - StartupHub */}
            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg" data-testid="card-case-study-2">
              <CardContent className="p-8">
                {/* Company Logo/Name */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">SH</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">StartupHub</h3>
                    <p className="text-sm text-gray-600">Biznes Inkubator</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600" data-testid="metric-engagement">450%</div>
                    <div className="text-xs text-gray-600">Engagement</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600" data-testid="metric-leads">200%</div>
                    <div className="text-xs text-gray-600">Lead o'sishi</div>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 italic mb-4">
                  "Telegram avtomatizatsiyasi bizga katta yordam berdi. 5 ta post kunlik avtomatik tarzda yuboriladi va natijalar ajoyib."
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">Dilshoda Karimova</div>
                    <div className="text-gray-600">CEO & Founder</div>
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Faol mijoz
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 - EduPlatform */}
            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg" data-testid="card-case-study-3">
              <CardContent className="p-8">
                {/* Company Logo/Name */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">EP</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">EduPlatform</h3>
                    <p className="text-sm text-gray-600">Online Ta'lim</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600" data-testid="metric-course-content">500%</div>
                    <div className="text-xs text-gray-600">Kurs kontenti</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600" data-testid="metric-student-engagement">180%</div>
                    <div className="text-xs text-gray-600">Talaba faolligi</div>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 italic mb-4">
                  "AI rasm generatsiyasi bizning kurs materiallarimizni yangi darajaga olib chiqdi. Har bir mavzu uchun professional rasmlar."
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">Bobur Umarov</div>
                    <div className="text-gray-600">Ta'lim Direktori</div>
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Faol mijoz
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-total-clients">50+</div>
              <div className="text-gray-600">Faol mijozlar</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-posts-generated">15,000+</div>
              <div className="text-gray-600">Yaratilgan postlar</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-hours-saved">10,000+</div>
              <div className="text-gray-600">Tejangan soatlar</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-satisfaction">98%</div>
              <div className="text-gray-600">Mijoz mamnuniyati</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link href="/contact" data-testid="button-start-your-success">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Sizning muvaffaqiyatingizni boshlang
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Section Header */}
            <div className="mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm mb-6">
                <Bot className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-semibold text-gray-700">24/7 Qo'llab-quvvatlash</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tayyor <span className="text-gradient">boshlashga</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                AutoGenix AI bilan biznesingizni avtomatlashtiring. Mutaxassislarimiz sizga eng yaxshi yechimni taklif qiladi.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Quick Start */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white border-0 shadow-lg" data-testid="card-quick-start">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tezkor Boshlash</h3>
                  <p className="text-gray-600 mb-6">
                    5 daqiqada ro'yxatdan o'ting va avtomatik kontent yaratishni boshlang
                  </p>
                  <Link href="/contact" data-testid="link-quick-start">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold">
                      Hoziroq boshlang
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Expert Consultation */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white border-0 shadow-lg" data-testid="card-consultation">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mutaxassis Maslahati</h3>
                  <p className="text-gray-600 mb-6">
                    Bizning AI mutaxassislari bilan bepul maslahat seansi o'tkazing
                  </p>
                  <Link href="/contact" data-testid="link-consultation">
                    <Button variant="outline" className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold">
                      Maslahat olish
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Custom Solution */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white border-0 shadow-lg" data-testid="card-custom-solution">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Maxsus Yechim</h3>
                  <p className="text-gray-600 mb-6">
                    Biznesingiz uchun individual AI strategiya va yechim ishlab chiqamiz
                  </p>
                  <Link href="/contact" data-testid="link-custom-solution">
                    <Button variant="outline" className="w-full border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold">
                      Loyiha muhokamasi
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <FaTelegram className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telegram</h4>
                  <p className="text-gray-600 text-sm">@AutoGenixSupport</p>
                  <p className="text-xs text-gray-500">Tezkor javob</p>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 text-green-600 font-bold text-lg">@</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">info@autogenix.uz</p>
                  <p className="text-xs text-gray-500">Professional muloqot</p>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ish Vaqti</h4>
                  <p className="text-gray-600 text-sm">Dush-Juma: 9:00-18:00</p>
                  <p className="text-xs text-gray-500">O'zbekiston vaqti</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-12">
              <Link href="/contact" data-testid="button-main-contact">
                <Button className="bg-primary text-white hover:bg-primary/90 px-12 py-4 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  Biz bilan bog'laning
                  <Bot className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                Bepul konsultatsiya va demo sesiya uchun bog'laning
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
