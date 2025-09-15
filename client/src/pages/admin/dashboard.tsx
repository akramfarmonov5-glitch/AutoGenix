import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import StatsCards from "@/components/admin/stats-cards";
import PostTable from "@/components/admin/post-table";
import { 
  Settings, 
  Zap, 
  LogOut, 
  Plus, 
  RefreshCw,
  BarChart3,
  FileText,
  Activity
} from "lucide-react";
import { Post } from "@shared/schema";

interface AdminStats {
  todayPosts: number;
  totalTodayPosts: number;
  telegramPosts: number;
  totalTelegramPosts: number;
  generatedImages: number;
  maxDailyImages: number;
  pendingReview: number;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"dashboard" | "posts" | "logs">("dashboard");
  const [generateTopic, setGenerateTopic] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      setLocation("/admin");
    }
  }, [setLocation]);

  // Get admin data
  const adminUser = localStorage.getItem("admin_user") 
    ? JSON.parse(localStorage.getItem("admin_user")!) 
    : null;

  // Fetch stats
  const { data: stats, isLoading: statsLoading } = useQuery<AdminStats>({
    queryKey: ["/api/admin/stats"],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  // Fetch posts
  const { data: posts, isLoading: postsLoading } = useQuery<Post[]>({
    queryKey: ["/api/admin/posts"],
  });

  // Generate post mutation
  const generateMutation = useMutation({
    mutationFn: async (topic: string) => {
      const token = localStorage.getItem("admin_token");
      const response = await apiRequest("POST", "/api/admin/generate", { topic });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Post yaratish boshlandi",
        description: "Yangi post AI yordamida yaratilmoqda. Bu bir necha daqiqa vaqt olishi mumkin.",
      });
      setGenerateTopic("");
      // Refresh data after a short delay
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["/api/admin/posts"] });
        queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
      }, 2000);
    },
    onError: (error) => {
      toast({
        title: "Xatolik yuz berdi",
        description: "Post yaratishda muammo bo'ldi. Qayta urinib ko'ring.",
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    setLocation("/admin");
  };

  const handleGenerate = () => {
    if (!generateTopic.trim()) {
      toast({
        title: "Mavzu kiritilmagan",
        description: "Iltimos, post mavzusini kiriting.",
        variant: "destructive",
      });
      return;
    }
    generateMutation.mutate(generateTopic);
  };

  if (!adminUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center relative">
                  <Settings className="w-4 h-4 text-accent" />
                  <Zap className="w-3 h-3 text-white absolute translate-x-1 -translate-y-0.5" />
                </div>
                <span className="text-xl font-bold text-foreground">AutoGenix AI</span>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Admin Panel
              </Badge>
            </div>

            {/* User Info & Actions */}
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-muted-foreground">Salom, </span>
                <span className="font-medium text-foreground" data-testid="text-admin-name">
                  {adminUser.username}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Chiqish
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg w-fit">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("dashboard")}
            className="rounded-md"
            data-testid="tab-dashboard"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "posts" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("posts")}
            className="rounded-md"
            data-testid="tab-posts"
          >
            <FileText className="w-4 h-4 mr-2" />
            Postlar
          </Button>
          <Button
            variant={activeTab === "logs" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("logs")}
            className="rounded-md"
            data-testid="tab-logs"
          >
            <Activity className="w-4 h-4 mr-2" />
            Loglar
          </Button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <StatsCards stats={stats} isLoading={statsLoading} />

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Tezkor amallar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="generateTopic" className="text-sm font-medium">
                      Yangi post yaratish
                    </Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="generateTopic"
                        placeholder="Post mavzusini kiriting..."
                        value={generateTopic}
                        onChange={(e) => setGenerateTopic(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleGenerate()}
                        data-testid="input-generate-topic"
                      />
                      <Button 
                        onClick={handleGenerate}
                        disabled={generateMutation.isPending}
                        data-testid="button-generate-post"
                      >
                        {generateMutation.isPending ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>So'nggi faoliyat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">AI post yaratildi</span>
                    <span className="text-xs text-muted-foreground">2 soat oldin</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Telegram postni yubordi</span>
                    <span className="text-xs text-muted-foreground">4 soat oldin</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Rasm yaratildi</span>
                    <span className="text-xs text-muted-foreground">6 soat oldin</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Posts Tab */}
        {activeTab === "posts" && (
          <PostTable posts={posts || []} isLoading={postsLoading} />
        )}

        {/* Logs Tab */}
        {activeTab === "logs" && (
          <Card>
            <CardHeader>
              <CardTitle>Tizim loglari</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Loglar tez orada qo'shiladi</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
