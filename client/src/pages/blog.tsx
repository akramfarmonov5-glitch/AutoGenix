import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Post } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            AutoGenix AI <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI yordamida yaratilgan eng so'nggi maqolalar va yo'riqnomalar
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse" data-testid={`skeleton-post-${i}`}>
                  <div className="w-full h-48 bg-muted rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex space-x-2">
                        <div className="w-12 h-6 bg-muted rounded"></div>
                        <div className="w-16 h-6 bg-muted rounded"></div>
                      </div>
                      <div className="w-full h-6 bg-muted rounded"></div>
                      <div className="w-3/4 h-4 bg-muted rounded"></div>
                      <div className="w-1/2 h-4 bg-muted rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12" data-testid="error-message">
              <p className="text-red-500 mb-4">Bloglarni yuklashda xatolik yuz berdi</p>
              <Button onClick={() => window.location.reload()}>Qayta urinish</Button>
            </div>
          )}

          {posts && posts.length === 0 && (
            <div className="text-center py-12" data-testid="empty-state">
              <p className="text-muted-foreground mb-4">Hozircha hech qanday blog postlari yo'q</p>
              <Link href="/admin" data-testid="link-admin-create">
                <Button>Birinchi postni yarating</Button>
              </Link>
            </div>
          )}

          {posts && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="group" data-testid={`post-${post.id}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    {post.imageUrl && (
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          data-testid={`img-post-${post.id}`}
                        />
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          {post.tags?.slice(0, 2).map((tag, index) => (
                            <Badge 
                              key={index} 
                              variant="secondary" 
                              className="text-xs"
                              data-testid={`tag-${tag}-${post.id}`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer line-clamp-2"
                          data-testid={`title-${post.id}`}
                        >
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p 
                          className="text-muted-foreground mb-4 line-clamp-3"
                          data-testid={`excerpt-${post.id}`}
                        >
                          {post.excerpt || post.body.substring(0, 150) + "..."}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span data-testid={`date-${post.id}`}>
                              {new Date(post.createdAt).toLocaleDateString('uz-UZ')}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>5 daqiqa</span>
                          </div>
                        </div>
                        <Link href={`/blog/${post.slug}`} data-testid={`link-read-${post.id}`}>
                          <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            To'liq o'qish
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          )}

          {posts && posts.length >= 20 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" data-testid="button-load-more">
                Yana yuklash
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
