"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

const videos = [
    {
        url: "/videos/trainer-workout-1.mp4",
        title: "Entrenamiento de Fuerza",
    },
    {
        url: "/videos/trainer-workout-2.mp4",
        title: "Rutina HIIT",
    },
    {
        url: "/videos/trainer-workout-3.mp4",
        title: "Transformación Física",
    },
]

export function VideoGallery() {
    const [currentVideo, setCurrentVideo] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length)
    }

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
    }

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const playVideo = async () => {
            try {
                await video.play()
                setIsPlaying(true)
            } catch (error) {
                console.error("Error playing video:", error)
                setIsPlaying(false)
            }
        }

        video.load()
        playVideo()

        return () => {
            video.pause()
        }
    }, [currentVideo])

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 bg-background/50 z-[1]" /> {/* Overlay oscuro */}
            {/* Video principal */}
            <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" muted loop playsInline>
                <source src={videos[currentVideo].url} type="video/mp4" />
                Tu navegador no soporta el elemento video.
            </video>
            {/* Controles */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[2]">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-primary/20 hover:bg-primary/40 text-primary-foreground"
                    onClick={prevVideo}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <span className="text-primary-foreground font-medium bg-background/50 px-4 py-2 rounded-full">
                    {videos[currentVideo].title}
                </span>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-primary/20 hover:bg-primary/40 text-primary-foreground"
                    onClick={nextVideo}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
            {/* Mensaje de fallback si el video no se puede reproducir */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-[2] bg-background/80">
                    <p className="text-primary-foreground text-center">
                        No se pudo reproducir el video. Por favor, intenta recargar la página.
                    </p>
                </div>
            )}
        </div>
    )
}

