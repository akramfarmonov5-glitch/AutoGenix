import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  FileText, 
  MessageCircle, 
  Image, 
  AlertCircle,
  TrendingUp,
  Target
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";

interface AdminStats {
  todayPosts: number;
  totalTodayPosts: number;
  telegramPosts: number;
  totalTelegramPosts: number;
  generatedImages: number;
  maxDailyImages: number;
  pendingReview: number;
}

interface StatsCardsProps {
  stats?: AdminStats;
  isLoading: boolean;
}

export default function StatsCards({ stats, isLoading }: StatsCardsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-8 w-16" />
                </div>
                <Skeleton className="h-8 w-8 rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center text-muted-foreground">
              <AlertCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Statistika yuklanmadi</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const todayPostsPercentage = (stats.todayPosts / stats.totalTodayPosts) * 100;
  const telegramPostsPercentage = (stats.telegramPosts / stats.totalTelegramPosts) * 100;
  const imagesPercentage = (stats.generatedImages / stats.maxDailyImages) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Today's Posts */}
      <Card data-testid="card-today-posts">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Bugungi postlar</p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-bold text-foreground">
                  {stats.todayPosts}
                </p>
                <span className="text-sm text-muted-foreground">
                  / {stats.totalTodayPosts}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-xs text-green-500">
                  {todayPostsPercentage.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Telegram Posts */}
      <Card data-testid="card-telegram-posts">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Telegram postlar</p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-bold text-foreground">
                  {stats.telegramPosts}
                </p>
                <span className="text-sm text-muted-foreground">
                  / {stats.totalTelegramPosts}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <Target className="w-3 h-3 text-blue-500 mr-1" />
                <span className="text-xs text-blue-500">
                  {telegramPostsPercentage.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <FaTelegram className="w-6 h-6 text-accent" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Generated Images */}
      <Card data-testid="card-generated-images">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Yaratilgan rasmlar</p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-bold text-foreground">
                  {stats.generatedImages}
                </p>
                <span className="text-sm text-muted-foreground">
                  / {stats.maxDailyImages}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <div 
                  className={`w-3 h-3 rounded-full mr-1 ${
                    imagesPercentage < 80 ? 'bg-green-500' : 'bg-yellow-500'
                  }`} 
                />
                <span className={`text-xs ${
                  imagesPercentage < 80 ? 'text-green-500' : 'text-yellow-500'
                }`}>
                  {imagesPercentage.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Image className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pending Review */}
      <Card data-testid="card-pending-review">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Ko'rib chiqish kutilmoqda</p>
              <p className="text-2xl font-bold text-foreground">
                {stats.pendingReview}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.pendingReview > 0 ? "Tekshirish talab qilinadi" : "Hamma postlar tasdiqlangan"}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              stats.pendingReview > 0 ? 'bg-yellow-500/10' : 'bg-green-500/10'
            }`}>
              <AlertCircle className={`w-6 h-6 ${
                stats.pendingReview > 0 ? 'text-yellow-500' : 'text-green-500'
              }`} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
