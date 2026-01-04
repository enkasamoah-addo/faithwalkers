"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover grayscale-[0.2]"
          poster="/youth-worship-worship-group-praying.jpg"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-group-of-people-worshiping-together-41031-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white uppercase italic">
            Faithwalkers
          </h1>
          <p className="text-xl md:text-2xl font-bold text-primary mb-6">For we walk by faith, not by sight</p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering youth to discover their purpose, grow in faith, and build a community that reflects the love of
            Christ.
          </p>

          {/* Call to action buttons
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-bold uppercase tracking-wider rounded-none">
              Join the Movement
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg font-bold uppercase tracking-wider rounded-none border-white/20 hover:bg-white/10 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-px h-12 bg-white/20" />
      </div>
    </section>
  )
}
