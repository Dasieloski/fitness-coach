"use client"

import {
  ArrowRight,
  Crown,
  Dumbbell,
  Sparkles,
  Trophy,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LanguageSelector } from "@/components/language-selector"
import { translations } from "@/lib/translations"
import { MobileMenu } from "@/components/mobile-menu"
import { VideoGallery } from "@/components/video-gallery"
import { ImageGallery } from "@/components/image-gallery"
import { TransformationSlider } from "@/components/transformation-slider"

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const videoRef = useRef<HTMLVideoElement>(null)
  const [lang, setLang] = useState<"es" | "en">("es")
  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el)
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleStartTransformation = () => {
    // Scroll to contact form
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Video Background */}
      <video ref={videoRef} autoPlay muted loop playsInline className="video-background">
        <source src="/trainer-background.mp4" type="video/mp4" />
      </video>

      {/* Navigation - Updated with Link to VIP area */}
      <header className="fixed top-0 z-50 w-full">
        <div className="container mx-auto">
          <nav className="glass-effect flex items-center justify-between px-6 py-4 mt-4 rounded-full border border-white/10">
            <Link href="/" className="text-2xl font-playfair font-bold text-primary">
              ALAIN
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                {t.nav.about}
              </Link>
              <Link href="#transformations" className="text-sm hover:text-primary transition-colors">
                {t.nav.transformations}
              </Link>
              <Link href="#programs" className="text-sm hover:text-primary transition-colors">
                {t.nav.programs}
              </Link>
              <Link href="#contact" className="text-sm hover:text-primary transition-colors">
                {t.nav.contact}
              </Link>
              <Link href="/vip">
                <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                  {t.nav.vip}
                </Button>
              </Link>
              <LanguageSelector currentLang={lang} onLanguageChange={setLang} />
            </div>
            <MobileMenu lang={lang} onLanguageChange={setLang} t={t} />
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section with Video Gallery */}
        <section className="relative min-h-screen">
          <VideoGallery />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container mx-auto px-6 text-center">
              <h1
                id="hero-title"
                data-animate
                className={`font-playfair text-5xl md:text-7xl lg:text-8xl mb-8 md:mb-12 ${isVisible["hero-title"] ? "animate-fade-in-up" : ""
                  }`}
                style={{ animationDelay: "0.2s" }}
              >
                Transforma Tu
                <span className="text-gradient block mt-4">Mejor Versión</span>
              </h1>
              <p
                id="hero-subtitle"
                data-animate
                className={`text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 ${isVisible["hero-subtitle"] ? "animate-fade-in-up" : ""
                  }`}
                style={{ animationDelay: "0.4s" }}
              >
                {t.hero.subtitle}
              </p>
              <div
                id="hero-cta"
                data-animate
                className={isVisible["hero-cta"] ? "animate-fade-in-up" : ""}
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleStartTransformation}
                >
                  {t.hero.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-12 md:py-20 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-playfair text-3xl md:text-5xl text-center mb-8 md:mb-12">
              Mi <span className="text-gradient">Pasión</span>
            </h2>
            <ImageGallery />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20 relative z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Trophy, stat: "500+", label: t.stats.transformed },
                { icon: Crown, stat: "12", label: t.stats.years },
                { icon: Sparkles, stat: "100%", label: t.stats.commitment },
              ].map((item, index) => (
                <div
                  key={index}
                  id={`stat-${index}`}
                  data-animate
                  className={`glass-effect p-8 rounded-2xl text-center hover-lift ${isVisible[`stat-${index}`] ? "animate-fade-in-up" : ""
                    }`}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">{item.stat}</h3>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformations Section - Updated with Slider */}
        <section id="transformations" className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12">
              {t.transformations.title} <span className="text-gradient">{t.transformations.titleHighlight}</span>
            </h2>
            <TransformationSlider />
          </div>
        </section>

        {/* Programs Section - Updated card styles */}
        <section id="programs" className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12">
              {t.programs.title} <span className="text-gradient">{t.programs.titleHighlight}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t.programs.transformation.title,
                  price: "299",
                  features: [
                    t.programs.transformation.feature1,
                    t.programs.transformation.feature2,
                    t.programs.transformation.feature3,
                    t.programs.transformation.feature4,
                  ],
                },
                {
                  title: t.programs.elite.title,
                  price: "499",
                  features: [
                    t.programs.elite.feature1,
                    t.programs.elite.feature2,
                    t.programs.elite.feature3,
                    t.programs.elite.feature4,
                  ],
                  featured: true,
                },
                {
                  title: t.programs.vip.title,
                  price: "999",
                  features: [
                    t.programs.vip.feature1,
                    t.programs.vip.feature2,
                    t.programs.vip.feature3,
                    t.programs.vip.feature4,
                  ],
                },
              ].map((program, index) => (
                <Card
                  key={index}
                  id={`program-${index}`}
                  data-animate
                  className={`glass-effect hover-lift ${program.featured ? "border-primary" : "border-white/10"
                    } ${isVisible[`program-${index}`] ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <CardContent className="p-8">
                    {program.featured && (
                      <div className="text-primary text-sm font-bold mb-4 flex items-center">
                        <Crown className="w-4 h-4 mr-2" />
                        {t.programs.popular}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{program.title}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">{program.price}€</span>
                      <span className="text-muted-foreground">{t.programs.month}</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-foreground">
                          <Dumbbell className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${program.featured
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-muted text-foreground hover:bg-muted/90"
                        }`}
                    >
                      {t.programs.startNow}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Updated form styles */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="glass-effect max-w-4xl mx-auto rounded-2xl p-8 md:p-12 border border-white/10">
              <h2 className="font-playfair text-4xl md:text-5xl text-center mb-8">
                {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
              </h2>
              <p className="text-center text-muted-foreground mb-8">{t.contact.subtitle}</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={t.contact.name}
                    className="w-full bg-muted text-foreground border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    placeholder={t.contact.email}
                    className="w-full bg-muted text-foreground border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                  />
                </div>
                <textarea
                  placeholder={t.contact.message}
                  rows={4}
                  className="w-full bg-muted text-foreground border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                />
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  {t.contact.send}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Updated styles */}
      <footer className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">ALAIN</h3>
                <p className="text-muted-foreground">{t.footer.description}</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">{t.footer.quickLinks}</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                      {t.footer.about}
                    </Link>
                  </li>
                  <li>
                    <Link href="#programs" className="text-muted-foreground hover:text-primary transition-colors">
                      {t.footer.programs}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#transformations"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t.footer.transformations}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">{t.footer.contact}</h4>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">info@alainfitness.com</li>
                  <li className="text-muted-foreground">+34 600 000 000</li>
                  <li className="text-muted-foreground">Madrid, España</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">{t.footer.followUs}</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
              {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

