import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Shield, LogIn, Settings, Zap } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(1, "Foydalanuvchi nomi majburiy"),
  password: z.string().min(1, "Parol majburiy"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const response = await apiRequest("POST", "/api/admin/login", data);
      return response.json();
    },
    onSuccess: (data) => {
      // Store the token
      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("admin_user", JSON.stringify(data.user));
      
      toast({
        title: "Muvaffaqiyatli!",
        description: "Admin panelga kirish muvaffaqiyatli amalga oshirildi.",
      });
      
      setLocation("/admin/dashboard");
    },
    onError: (error) => {
      toast({
        title: "Kirish xatosi",
        description: "Foydalanuvchi nomi yoki parol noto'g'ri.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center relative">
              <Settings className="w-6 h-6 text-accent" />
              <Zap className="w-4 h-4 text-white absolute translate-x-1 -translate-y-0.5" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">AutoGenix AI</h1>
          <p className="text-muted-foreground">Admin Panel</p>
        </div>

        <Card className="border border-border shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Admin Panel
              </h2>
              <p className="text-muted-foreground text-sm">
                Tizimga kirish uchun ma'lumotlarni kiriting
              </p>
            </div>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="username" className="text-foreground">
                  Foydalanuvchi nomi
                </Label>
                <Input
                  id="username"
                  {...form.register("username")}
                  placeholder="Admin username"
                  className="mt-2"
                  data-testid="input-username"
                />
                {form.formState.errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.username.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="password" className="text-foreground">
                  Parol
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...form.register("password")}
                  placeholder="••••••••"
                  className="mt-2"
                  data-testid="input-password"
                />
                {form.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3"
                disabled={loginMutation.isPending}
                data-testid="button-login"
              >
                {loginMutation.isPending ? (
                  "Kirilmoqda..."
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Tizimga kirish
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                © 2024 AutoGenix AI. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to website link */}
        <div className="text-center mt-6">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setLocation("/")}
            data-testid="button-back-home"
          >
            ← Asosiy saytga qaytish
          </Button>
        </div>
      </div>
    </div>
  );
}
