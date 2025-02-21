/* eslint-disable */
"use client"

import { ArrowLeft, CheckCircle2, Crown, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { translations } from "@/lib/translations"

export default function VipPage() {
    const [lang, setLang] = useState<"es" | "en">("es")
    const t = translations[lang]

    const vipBenefits = [
        {
            title: "Entrenamiento Personalizado Premium",
            description: "Acceso exclusivo a sesiones one-on-one con Alain",
            icon: Crown,
        },
        {
            title: "Nutrición Elite",
            description: "Plan nutricional personalizado y ajustado semanalmente",
            icon: CheckCircle2,
        },
        {
            title: "Acceso 24/7",
            description: "Contacto directo y soporte ilimitado",
            icon: Lock,
        },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Video Background */}
            <video autoPlay muted loop playsInline className="video-background">
                <source src="/vip-background.mp4" type="video/mp4" />
            </video>

            {/* Back Button */}
            <div className="fixed top-6 left-6 z-50">
                <Link href="/">
                    <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
                    </Button>
                </Link>
            </div>

            <main className="relative pt-32 pb-16">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl mb-6">
                            Área <span className="text-gradient">VIP</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Accede a una experiencia de entrenamiento exclusiva y personalizada. Transforma tu vida con un servicio
                            premium diseñado para resultados excepcionales.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {vipBenefits.map((benefit, index) => (
                            <Card key={index} className="glass-effect hover-lift border border-white/10">
                                <CardContent className="p-6">
                                    <benefit.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Features Section */}
                    <div className="glass-effect rounded-2xl p-8 md:p-12 border border-white/10 mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                                    Características <span className="text-gradient">Exclusivas</span>
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold mb-1">Evaluación Completa</h4>
                                            <p className="text-muted-foreground">Análisis detallado de tu composición corporal y objetivos</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold mb-1">Plan Personalizado</h4>
                                            <p className="text-muted-foreground">
                                                Programa de entrenamiento adaptado a tus necesidades específicas
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold mb-1">Seguimiento Premium</h4>
                                            <p className="text-muted-foreground">
                                                Monitorización constante de tu progreso y ajustes en tiempo real
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image
                                    src="/vip-training.jpg"
                                    alt="VIP Training"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                            ¿Listo para una Experiencia <span className="text-gradient">Elite</span>?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Únete al programa VIP y experimenta una transformación física y mental sin precedentes. Plazas limitadas
                            para asegurar una atención personalizada.
                        </p>
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={() => (window.location.href = "mailto:info@alainfitness.com?subject=Información%20VIP")}
                        >
                            SOLICITAR INFORMACIÓN VIP
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}

