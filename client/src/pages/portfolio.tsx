import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "TechStore UZ",
      description: "Texnika do'koni uchun AI-powered blog va product descriptions yaratish tizimi",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["E-commerce", "AI Content", "Automation"],
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Milliy Taomlar",
      description: "Restoran uchun kunlik menu va maxsus takliflar avtomatik e'lon qilish tizimi",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Restaurant", "Telegram Bot", "Daily Posts"],
      category: "Restaurant"
    },
    {
      id: 3,
      title: "EduPlatform",
      description: "Ta'lim platformasi uchun kurs yangiliklari va o'quvchi ota-onalariga avtomatik xabarlar",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Education", "Notifications", "Multi-channel"],
      category: "Education"
    },
    {
      id: 4,
      title: "MedCenter AI",
      description: "Tibbiyot markazida bemorlar uchun avtomatik eslatmalar va yangiliklar tizimi",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Healthcare", "Reminders", "Patient Care"],
      category: "Healthcare"
    },
    {
      id: 5,
      title: "SportClub Pro",
      description: "Sport klubi uchun mashg'ulotlar jadvali va motivatsion xabarlar avtomatizatsiyasi",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Sports", "Scheduling", "Motivation"],
      category: "Sports"
    },
    {
      id: 6,
      title: "BeautyStudio",
      description: "Go'zallik studiyasi uchun yangi xizmatlar va aksiyalar haqida avtomatik postlar",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Beauty", "Promotions", "Social Media"],
      category: "Beauty"
    }
  ];

  const tagColors = {
    "E-commerce": "bg-blue-100 text-blue-800",
    "AI Content": "bg-purple-100 text-purple-800",
    "Automation": "bg-green-100 text-green-800",
    "Restaurant": "bg-orange-100 text-orange-800",
    "Telegram Bot": "bg-cyan-100 text-cyan-800",
    "Daily Posts": "bg-yellow-100 text-yellow-800",
    "Education": "bg-indigo-100 text-indigo-800",
    "Notifications": "bg-pink-100 text-pink-800",
    "Multi-channel": "bg-teal-100 text-teal-800",
    "Healthcare": "bg-red-100 text-red-800",
    "Reminders": "bg-amber-100 text-amber-800",
    "Patient Care": "bg-emerald-100 text-emerald-800",
    "Sports": "bg-lime-100 text-lime-800",
    "Scheduling": "bg-violet-100 text-violet-800",
    "Motivation": "bg-rose-100 text-rose-800",
    "Beauty": "bg-fuchsia-100 text-fuchsia-800",
    "Promotions": "bg-sky-100 text-sky-800",
    "Social Media": "bg-slate-100 text-slate-800"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Bizning <span className="text-primary">portfoliomiz</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Muvaffaqiyatli loyihalar va mijozlar bilan ishlaganmiz
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow" data-testid={`portfolio-${item.id}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`img-portfolio-${item.id}`}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      data-testid={`button-view-${item.id}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ko'rish
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 
                    className="text-xl font-semibold text-foreground mb-2"
                    data-testid={`title-${item.id}`}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-muted-foreground mb-4"
                    data-testid={`description-${item.id}`}
                  >
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className={`text-xs ${tagColors[tag as keyof typeof tagColors] || 'bg-gray-100 text-gray-800'}`}
                        data-testid={`tag-${tag}-${item.id}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Natijalarimiz</h2>
            <p className="text-muted-foreground">Mijozlarimiz bilan erishgan yutuqlar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="stat-projects">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Yakunlangan loyihalar</div>
            </div>
            <div className="text-center" data-testid="stat-posts">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Yaratilgan postlar</div>
            </div>
            <div className="text-center" data-testid="stat-clients">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Mamnun mijozlar</div>
            </div>
            <div className="text-center" data-testid="stat-automation">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Avtomatizatsiya darajasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Sizning loyihangiz keyingisi bo'lsin
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            AI-powered kontent avtomatizatsiyasi bilan biznesingizni rivojlantiring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="button-start-project">
              <Button className="bg-primary text-primary-foreground px-8 py-3 text-lg hover:bg-primary/90 font-semibold">
                Loyihani boshlash
              </Button>
            </Link>
            <Link href="/services" data-testid="button-view-services">
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg font-semibold"
              >
                Xizmatlarni ko'rish
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
