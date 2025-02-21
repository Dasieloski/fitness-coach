"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"

const transformations = [
    {
        before: "/images/before-1.jpg",
        after: "/images/after-1.jpg",
        weeks: "12 semanas",
    },
    {
        before: "/images/before-2.jpg",
        after: "/images/after-2.jpg",
        weeks: "16 semanas",
    },
    {
        before: "/images/before-3.jpg",
        after: "/images/after-3.jpg",
        weeks: "24 semanas",
    },
]

export function TransformationSlider() {
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent((prev) => (prev + 1) % transformations.length)
    }

    const prev = () => {
        setCurrent((prev) => (prev - 1 + transformations.length) % transformations.length)
    }

    return (
        <div className="relative w-full">
            <div className="flex gap-4 md:gap-8">
                <div className="relative flex-1 h-[500px] overflow-hidden rounded-2xl">
                    <Image
                        src={transformations[current].before || "/placeholder.svg"}
                        alt="Antes"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent/0" />
                    <span className="absolute bottom-4 left-4 text-primary-foreground font-bold">Antes</span>
                </div>
                <div className="relative flex-1 h-[500px] overflow-hidden rounded-2xl">
                    <Image
                        src={transformations[current].after || "/placeholder.svg"}
                        alt="Después"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent/0" />
                    <span className="absolute bottom-4 left-4 text-primary-foreground font-bold">Después</span>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-primary/20 hover:bg-primary/40 text-primary-foreground"
                    onClick={prev}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <span className="text-primary-foreground font-medium">{transformations[current].weeks}</span>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-primary/20 hover:bg-primary/40 text-primary-foreground"
                    onClick={next}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
        </div>
    )
}

