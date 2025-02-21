"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSelectorProps {
    currentLang: "es" | "en"
    onLanguageChange: (lang: "es" | "en") => void
}

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-16 px-2 text-primary hover:text-primary-foreground hover:bg-primary">
                    {currentLang.toUpperCase()}
                    <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-16 bg-background border border-white/10">
                <DropdownMenuItem
                    onClick={() => onLanguageChange("es")}
                    className="text-foreground hover:text-primary-foreground hover:bg-primary cursor-pointer"
                >
                    ES
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => onLanguageChange("en")}
                    className="text-foreground hover:text-primary-foreground hover:bg-primary cursor-pointer"
                >
                    EN
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

