"use client"

import { Menu } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSelector } from "./language-selector"

interface MobileMenuProps {
    lang: "es" | "en"
    onLanguageChange: (lang: "es" | "en") => void
    t: any
}

export function MobileMenu({ lang, onLanguageChange, t }: MobileMenuProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-primary hover:text-primary-foreground hover:bg-primary"
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-background border-l border-white/10">
                <SheetHeader>
                    <SheetTitle className="text-left text-primary">ALAIN</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                    <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                        {t.nav.about}
                    </Link>
                    <Link href="#transformations" className="text-foreground hover:text-primary transition-colors">
                        {t.nav.transformations}
                    </Link>
                    <Link href="#programs" className="text-foreground hover:text-primary transition-colors">
                        {t.nav.programs}
                    </Link>
                    <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                        {t.nav.contact}
                    </Link>
                    <Link href="/vip" className="text-foreground hover:text-primary transition-colors">
                        {t.nav.vip}
                    </Link>
                    <div className="pt-4">
                        <LanguageSelector currentLang={lang} onLanguageChange={onLanguageChange} />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
