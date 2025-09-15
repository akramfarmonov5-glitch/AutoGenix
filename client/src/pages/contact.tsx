import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Info
} from "lucide-react";
import { FaTelegram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactSchema = z.object({
  firstName: z.string().min(1, "Ism majburiy"),
  lastName: z.string().min(1, "Familiya majburiy"),
  email: z.string().email("Noto'g'ri email format"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Xabar kamida 10 ta belgi bo'lishi kerak"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Xabar yuborildi!",
        description: "Tez orada siz bilan bog'lanamiz.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Xatolik yuz berdi",
        description: "Xabarni yuborishda muammo bo'ldi. Qayta urinib ko'ring.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Biz bilan <span className="text-primary">bog'laning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Loyihangizni muhokama qilish uchun biz bilan aloqa o'rnating
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border border-border shadow-lg">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8" data-testid="success-message">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Xabar yuborildi!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada javob beramiz.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} data-testid="button-send-another">
                      Yana xabar yuborish
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">
                      Xabar yuborish
                    </h3>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName" className="text-foreground">
                            Ism *
                          </Label>
                          <Input
                            id="firstName"
                            {...form.register("firstName")}
                            placeholder="Ismingiz"
                            className="mt-2"
                            data-testid="input-firstname"
                          />
                          {form.formState.errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.formState.errors.firstName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-foreground">
                            Familiya *
                          </Label>
                          <Input
                            id="lastName"
                            {...form.register("lastName")}
                            placeholder="Familiyangiz"
                            className="mt-2"
                            data-testid="input-lastname"
                          />
                          {form.formState.errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.formState.errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...form.register("email")}
                          placeholder="email@example.com"
                          className="mt-2"
                          data-testid="input-email"
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          Telefon
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...form.register("phone")}
                          placeholder="+998 XX XXX XX XX"
                          className="mt-2"
                          data-testid="input-phone"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="company" className="text-foreground">
                          Kompaniya
                        </Label>
                        <Input
                          id="company"
                          {...form.register("company")}
                          placeholder="Kompaniya nomi"
                          className="mt-2"
                          data-testid="input-company"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-foreground">
                          Xabar *
                        </Label>
                        <Textarea
                          id="message"
                          {...form.register("message")}
                          placeholder="Loyihangiz haqida batafsil yozing..."
                          rows={4}
                          className="mt-2 resize-none"
                          data-testid="textarea-message"
                        />
                        {form.formState.errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.message.message}
                          </p>
                        )}
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-3"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {contactMutation.isPending ? (
                          "Yuborilmoqda..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Xabar yuborish
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Aloqa ma'lumotlari
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground">info@autogenix.uz</p>
                        <p className="text-muted-foreground">support@autogenix.uz</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaTelegram className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Telegram</h4>
                        <p className="text-muted-foreground">@AutoGenixSupport</p>
                        <a 
                          href="https://t.me/AutoGenixSupport" 
                          className="text-primary hover:underline"
                          data-testid="link-telegram-support"
                        >
                          t.me/AutoGenixSupport
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Telefon</h4>
                        <p className="text-muted-foreground">+998 XX XXX XX XX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Manzil</h4>
                        <p className="text-muted-foreground">
                          Toshkent shahar,<br />
                          Chilonzor tumani
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Ish vaqti
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dushanba - Juma:</span>
                      <span className="font-semibold text-foreground">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shanba:</span>
                      <span className="font-semibold text-foreground">10:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Yakshanba:</span>
                      <span className="font-semibold text-foreground">Dam olish</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Info className="w-4 h-4 mr-2" />
                      Tez javob olish uchun Telegram orqali murojaat qiling
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
