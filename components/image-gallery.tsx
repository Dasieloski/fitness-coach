"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
    {
        url: "/images/trainer-1.jpg",
        title: "Entrenamiento de Fuerza",
    },
    {
        url: "/images/trainer-2.jpg",
        title: "Resultados Reales",
    },
    {
        url: "/images/trainer-3.jpg",
        title: "Disciplina y Dedicación",
    },
    {
        url: "/images/trainer-4.jpg",
        title: "Transformación Total",
    },
]

export function ImageGallery() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full overflow-hidden rounded-2xl"
                    style={{
                        transform: `translateY(${scrollY * 0.1 * (index % 2 ? 1 : -1)}px)`,
                    }}
                >
                    <Image
                        src={image.url || "/placeholder.svg?height=300&width=300"}
                        alt={image.title}
                        loading="lazy"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                        <h3 className="text-sm sm:text-base md:text-xl font-bold text-primary-foreground">{image.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

