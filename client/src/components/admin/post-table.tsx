import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Edit, 
  Eye, 
  Trash2, 
  Send,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  MoreHorizontal
} from "lucide-react";
import { Post } from "@shared/schema";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

interface PostTableProps {
  posts: Post[];
  isLoading: boolean;
}

export default function PostTable({ posts, isLoading }: PostTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const updatePostMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: number; updates: Partial<Post> }) => {
      const token = localStorage.getItem("admin_token");
      const response = await apiRequest("PATCH", `/api/admin/posts/${id}`, updates);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
      toast({
        title: "Muvaffaqiyatli!",
        description: "Post muvaffaqiyatli yangilandi.",
      });
    },
    onError: () => {
      toast({
        title: "Xatolik",
        description: "Postni yangilashda xatolik yuz berdi.",
        variant: "destructive",
      });
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => {
      const token = localStorage.getItem("admin_token");
      const response = await apiRequest("DELETE", `/api/admin/posts/${id}`, {});
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
      toast({
        title: "O'chirildi",
        description: "Post muvaffaqiyatli o'chirildi.",
      });
    },
    onError: () => {
      toast({
        title: "Xatolik",
        description: "Postni o'chirishda xatolik yuz berdi.",
        variant: "destructive",
      });
    },
  });

  // Filter posts based on search and status
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">Published</Badge>;
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>;
      case "review":
        return <Badge className="bg-red-100 text-red-800">Review</Badge>;
      case "queued":
        return <Badge className="bg-blue-100 text-blue-800">Queued</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleStatusChange = (postId: number, newStatus: string) => {
    updatePostMutation.mutate({ id: postId, updates: { status: newStatus } });
  };

  const handleDelete = (postId: number, postTitle: string) => {
    if (confirm(`"${postTitle}" postini o'chirishga ishonchingiz komilmi?`)) {
      deletePostMutation.mutate(postId);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Postlar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg">
                <Skeleton className="h-12 w-12 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-8 w-8" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Postlar ({posts.length})</span>
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Postlarni qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
                data-testid="input-search-posts"
              />
            </div>
            
            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40" data-testid="select-status-filter">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="queued">Queued</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {filteredPosts.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground" data-testid="empty-posts">
            <p>Hech qanday post topilmadi</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                data-testid={`post-row-${post.id}`}
              >
                <div className="flex items-center space-x-4 flex-1">
                  {/* Post Image */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    ) : (
                      <Eye className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  
                  {/* Post Info */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="font-medium text-foreground truncate"
                      data-testid={`post-title-${post.id}`}
                    >
                      {post.title}
                    </h3>
                    <p 
                      className="text-sm text-muted-foreground truncate"
                      data-testid={`post-slug-${post.id}`}
                    >
                      {post.slug}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.createdAt).toLocaleString('uz-UZ')}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center space-x-4">
                  {getStatusBadge(post.status)}
                  
                  {/* Actions */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        data-testid={`button-actions-${post.id}`}
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem 
                        onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                        data-testid={`action-view-${post.id}`}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ko'rish
                      </DropdownMenuItem>
                      
                      {post.status === "draft" && (
                        <DropdownMenuItem 
                          onClick={() => handleStatusChange(post.id, "published")}
                          data-testid={`action-publish-${post.id}`}
                        >
                          <Send className="w-4 h-4 mr-2" />
                          E'lon qilish
                        </DropdownMenuItem>
                      )}
                      
                      {post.status === "review" && (
                        <>
                          <DropdownMenuItem 
                            onClick={() => handleStatusChange(post.id, "published")}
                            data-testid={`action-approve-${post.id}`}
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Tasdiqlash
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleStatusChange(post.id, "draft")}
                            data-testid={`action-reject-${post.id}`}
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Rad qilish
                          </DropdownMenuItem>
                        </>
                      )}
                      
                      <DropdownMenuItem 
                        onClick={() => handleDelete(post.id, post.title)}
                        className="text-red-600 focus:text-red-600"
                        data-testid={`action-delete-${post.id}`}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        O'chirish
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
