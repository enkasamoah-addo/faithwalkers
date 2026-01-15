"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/faithwalkers-logo"
            alt="Faithwalkers logo"
            width={160}
            height={48}
            priority
            className="object-contain"
          />
          <span className="sr-only">Faithwalkers</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#mission" className="text-sm font-medium hover:text-primary transition-colors">
            Mission
          </Link>
          <Link href="/hashem-youth-conference" className="text-sm font-medium hover:text-primary transition-colors">
            Conference
          </Link>
          <Link href="/#donate" className="text-sm font-medium hover:text-primary transition-colors">
            Donate
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          {/* Join now button *}
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-background bg-transparent"
          >
            Join Now
          </Button>
          */}
        </div>
      </div>
    </nav>
  )
}
