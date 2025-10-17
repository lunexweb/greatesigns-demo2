import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+27 72 567 9274",
      link: "tel:+27725679274",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@greatsigns.co.za",
      link: "mailto:info@greatsigns.co.za",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "63 Umbilo Rd, Durban",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8AM-5PM, Sat: 9AM-1PM",
      link: null,
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your professional signage solutions. Can you help me choose the right package for my business?"
  );
  const whatsappNumber = "27725679274"; // +27 72 567 9274

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative overflow-x-hidden"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/doqsolr8d/image/upload/v1760712446/Screenshot_2025-10-17_164245_bwekdv.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10 max-w-full overflow-x-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 px-2">
            Get in touch with our signage experts. We're here to help you with professional signage solutions for your business.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Connect</h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                  Ready to start your signage project? Reach out to us through any of these channels, and we'll get back to you promptly.
                </p>
              </div>

              {/* WhatsApp */}
              <Card className="border-2 border-accent shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">WhatsApp Us</h3>
                      <p className="text-muted-foreground">
                        Quick response for urgent inquiries
                      </p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent hover:bg-accent/90"
                    >
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Chat Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Request Quote */}
              <Card className="border-2 border-primary shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Request a Quote</h3>
                      <p className="text-muted-foreground">
                        Get a detailed proposal for your project
                      </p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <a href="/quote">Get Quote</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media - Coming Soon */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-4">
                  Social media profiles coming soon
                </p>
                <div className="flex gap-4">
                  <div className="p-3 bg-muted rounded-lg opacity-50">
                    <Facebook className="h-6 w-6" />
                  </div>
                  <div className="p-3 bg-muted rounded-lg opacity-50">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div className="p-3 bg-muted rounded-lg opacity-50">
                    <Linkedin className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Map / Office Info */}
            <Card className="shadow-2xl border-none h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Coverage</h4>
                    <p className="text-muted-foreground">
                      We provide signage services across South Africa, including:
                    </p>
                    <ul className="mt-3 space-y-2 text-muted-foreground">
                      <li>• Custom Signage Design</li>
                      <li>• Council Applications</li>
                      <li>• Professional Installation</li>
                      <li>• Nationwide Service</li>
                      <li>• And more...</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Office Hours</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-lg text-white">
                    <h4 className="font-semibold text-lg mb-2">Emergency Support</h4>
                    <p className="opacity-90 mb-3">
                      For urgent signage issues or support:
                    </p>
                    <a
                      href="tel:+27725679274"
                      className="font-bold text-xl hover:underline"
                    >
                      +27 72 567 9274
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="shadow-lg border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">How long does signage installation take?</h3>
                <p className="text-muted-foreground">
                  Most signage projects are completed in 1-3 days, depending on complexity and size.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Do you handle council applications?</h3>
                <p className="text-muted-foreground">
                  Yes, our qualified architect handles all council applications and drawings for seamless approval.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">What services do you provide?</h3>
                <p className="text-muted-foreground">
                  We provide custom signage design, council applications, professional installation, and nationwide service with 17 years of experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
