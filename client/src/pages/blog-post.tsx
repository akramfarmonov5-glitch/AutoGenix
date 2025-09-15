import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Post } from "@shared/schema";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<Post>({
    queryKey: ["/api/posts", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="w-1/4 h-6 bg-muted rounded mb-4"></div>
              <div className="w-3/4 h-12 bg-muted rounded mb-6"></div>
              <div className="w-full h-64 bg-muted rounded mb-8"></div>
              <div className="space-y-4">
                <div className="w-full h-4 bg-muted rounded"></div>
                <div className="w-full h-4 bg-muted rounded"></div>
                <div className="w-3/4 h-4 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4" data-testid="error-title">
              Post topilmadi
            </h1>
            <p className="text-muted-foreground mb-8">
              Siz izlayotgan blog post mavjud emas yoki o'chirilgan.
            </p>
            <Link href="/blog" data-testid="link-back-to-blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Blogga qaytish
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt || post.metaDescription || undefined,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast here
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" data-testid="breadcrumb">
            <Link 
              href="/blog" 
              className="text-primary hover:text-primary/80 flex items-center"
              data-testid="link-blog-breadcrumb"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Blog
            </Link>
          </nav>

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              {post.tags?.slice(0, 3).map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  data-testid={`tag-${tag}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
              data-testid="post-title"
            >
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span data-testid="post-date">
                    {new Date(post.createdAt).toLocaleDateString('uz-UZ', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>5 daqiqa o'qish</span>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={sharePost}
                data-testid="button-share"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Ulashish
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {post.imageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
                data-testid="post-image"
              />
            </div>
          )}

          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            data-testid="post-content"
          >
            {post.body.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Bu post AI yordamida yaratilgan</p>
                <p className="text-xs text-muted-foreground">
                  AutoGenix AI - Kontentingizni avtomatlashtiring
                </p>
              </div>
              <Link href="/contact" data-testid="link-contact">
                <Button variant="outline">
                  Biz bilan bog'laning
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
}
