/* eslint-disable */
"use client"

import { useRef, useState } from "react"

const videos = [
    {
        url: "/videos/trainer-workout-1.mp4",
        title: "",
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
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 bg-background/50 z-[1]" />
            <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" muted loop autoPlay playsInline>
                <source src={videos[0].url} type="video/mp4" />
                Tu navegador no soporta el elemento video.
            </video>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]">
               {/*  <span className="text-primary-foreground font-medium bg-background/50 px-4 py-2 rounded-full">
                    {videos[0].title}
                </span> */}
            </div>
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

