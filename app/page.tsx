"use client"

import { Phone, Mail, MapPin, ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"                 
                alt="Rajdeep Polymers Logo"     
                width={48}                      
                height={48}
                className="object-contain rounded-full"  
                priority                        
              />
              <div>
                <h1 className="font-bold text-sm text-foreground">RAJDEEP POLYMERS</h1>
                <p className="text-xs text-muted-foreground">Premium Plastic Moulding</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <Link href="#home" className="text-sm font-medium text-foreground hover:text-primary transition">
                HOME
              </Link>
              <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition">
                ABOUT US
              </Link>
              <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition">
                SERVICES
              </Link>
              <Link href="#capabilities" className="text-sm font-medium text-foreground hover:text-primary transition">
                CAPABILITIES
              </Link>
              <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition">
                CONTACT US
              </Link>
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded text-sm font-medium hover:bg-accent/90 transition">
                GET QUOTE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="#home" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                HOME
              </Link>
              <Link href="#about" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                ABOUT US
              </Link>
              <Link href="#services" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                SERVICES
              </Link>
              <Link href="#capabilities" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                CAPABILITIES
              </Link>
              <Link href="#contact" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                CONTACT US
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                Precision Injection <span className="text-primary">Moulding</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Rajdeep Polymers is an ISO 9001:2015 certified company based in Nashik, Maharashtra, specializing in high-precision injection moulding solutions. We manufacture premium plastic moulding components for diverse industries, ensuring exceptional quality, reliability, and innovation in every product.
                With a strong focus on customer satisfaction and continuous improvement, Rajdeep Polymers delivers products that meet global standards and exceed client expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary/90 transition inline-flex items-center justify-center gap-2">
                  Explore Services <ArrowRight size={18} />
                </button>
                <button className="border-2 border-primary text-primary px-6 py-3 rounded font-medium hover:bg-primary/10 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/production lab.jpg/"
                alt="Injection moulding production"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Decorative shape */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full -mr-48 -mb-48"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive injection moulding solutions tailored to meet diverse industry requirements with
              precision and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Plastic Injection Moulding",
                description:
                  "High-precision plastic component manufacturing using advanced injection moulding technology.",
                icon: "🔧",
              },
              {
                title: "Custom Mould Design",
                description:
                  "Expert design and fabrication of custom moulds tailored to your specific product requirements.",
                icon: "📐",
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous quality control and testing to ensure every product meets international standards.",
                icon: "✓",
              },
              {
                title: "Rapid Prototyping",
                description: "Quick turnaround on prototype development and small batch production for testing.",
                icon: "⚡",
              },
              {
                title: "Large Scale Production",
                description: "Efficient mass production capabilities with consistent quality and competitive pricing.",
                icon: "📦",
              },
              {
                title: "Technical Support",
                description: "Comprehensive technical guidance throughout the entire product development lifecycle.",
                icon: "💡",
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Equipped with state-of-the-art facilities and experienced professionals to handle complex moulding
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Our entire manufacturing facility operates on 100% solar power, reflecting our dedication to clean energy, environmental responsibility, and a sustainable future.",
                "Multi-cavity mould design and manufacturing",
                "Advanced injection moulding machines up to XXX tons",
                "Tolerance control within ±0.05mm",
                "Material expertise: ABS, HDPE, LDPE, PP, PET, TPE",
                "Overmoulding and insert moulding capabilities",
                "Color matching and surface finishing options",
                "ISO certified quality management system",
                "Quick mould turnaround time",
              ].map((capability, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-foreground text-lg">{capability}</p>
                </div>
              ))}
            </div>
            <div>
              <img
                src="/factory.jpg"
                alt="Factory outlet"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Rajdeep Polymers?</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "500+", label: "Successful Projects" },
              { number: "50+", label: "Industry Clients" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background text-foreground">
            <div className="container mx-auto text-center px-4">
              <h2 className="text-3xl font-bold mb-8">Our Valued Customers</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                {[
                  "Abhijeet Technoplast Pvt Ltd",
                  "Tata VIP INDUSTRIS LTD",
                  "Hindustan SAMSONITE PVT LTD",
                ].map((customer) => (
                  <div
                    key={customer}
                    className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition"
                  >
                    {customer}
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with our team of experts to discuss your plastic moulding components requirements and get a customized
            solution.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:bg-accent/90 transition text-lg inline-block">
            Request a Quote Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex gap-4">
              <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-300 mb-1">98230 37085</p>
                <p className="text-gray-300">8668457837</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-300">
                  <a href="roshankashmire1000@gmail.com"></a>roshankashmire1000@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-gray-300">
                  <a href="https://maps.app.goo.gl/cjzjWadcSUsmrEYj9">GAT NO 214 Khatwad phata Talegaon Dindori</a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Rajdeep Polymers. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
