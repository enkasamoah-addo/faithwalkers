"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { SpeakerCard } from "@/components/conference/speaker-card"
import { Calendar, MapPin, Ticket, Zap, Users, Target, HandshakeIcon, UserPlus } from "lucide-react"

export default function ConferenceClientPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {}) // Handle autoplay policy
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 } // Play when 50% of the video is visible
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/spiritual-youth-worship-event.jpg"
            alt="Conference Background"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-xs mb-6 uppercase tracking-widest border border-primary/20">
            Faithwalkers Presents
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 text-white uppercase italic leading-[0.85]">
            Hashem Youth <br />
            Conference
          </h1>
          <p className="text-2xl md:text-4xl font-black text-primary mb-8 uppercase italic tracking-tight">
            "Salvation Is Here."
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            A transformative weekend designed to empower the next generation to walk in faith, discover their God-given
            purpose, and ignite a spiritual revival in our communities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 text-xl font-bold uppercase tracking-wider rounded-none w-full sm:w-auto"
            >
              Support the Event
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10">
           {/* <div className="flex items-center gap-3 text-white font-bold text-lg">
              <Calendar className="w-6 h-6 text-primary" /> August 15-18, 2025
            </div>
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <MapPin className="w-6 h-6 text-primary" /> Downtown Arena, Main Hall
            </div> */}
          </div>
        </div>
      </section>

      {/* Vision & Theme */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter">
              The Vision: <span className="text-primary">Revival</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Hashem Youth Conference isn't just an event; it's a spiritual encounter. Our vision is to create a space
              where young people can disconnect from the noise of the world and reconnect with their Creator.
            </p>
            <div className="grid gap-6">
              {[
                { title: "Faith", desc: "Building a foundation that cannot be shaken.", icon: Target },
                { title: "Transformation", desc: "Renewing minds through the power of Christ.", icon: Zap },
                { title: "Purpose", desc: "Unlocking the destiny Hashem has for you.", icon: Users },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <item.icon className="w-10 h-10 text-primary shrink-0" />
                  <div>
                    <h3 className="font-black uppercase italic text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <video ref={videoRef} src="/hashem video.MP4" loop muted={false} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter">
            Speakers & Ministers
          </h2>
          <div className="h-1.5 w-32 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience powerful messages and anointed worship from world-class speakers and ministers dedicated to the
            youth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Abranham Seowabor",
              role: "Keynote Speaker",
              bio: "Founder of Faithwalkers with a passion for youth discipleship.",
              image: "/images/speakers/man.png",
            },
            {
              name: "Brother Issac",
              role: "Youth Pastor",
              bio: "Dynamic speaker focused on biblical purpose and spiritual growth.",
              image: "/images/speakers/man.png",
            },
            {
              name: "Jael Ama Kowaa",
              role: "Worship Leader",
              bio: "Anointed worship leader bringing hearts to the throne of Hashem.",
              image: "/images/speakers/woman.png",
            },
            {
              name: "Seyram SESE",
              role: "Worship Leader",
              bio: "Anointed worship leader bringing hearts to the throne of Hashem.",
              image: "/images/speakers/woman.png",
            },
          ].map((speaker, idx) => (
            <SpeakerCard
              key={idx}
              {...speaker}
            />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Past Highlights</h2>
          <p className="text-muted-foreground">Relive the moments from previous conferences.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { src: "/images/gallery/a.jpg", alt: "Conference Highlight 1" },
            { src: "/images/gallery/b.jpg", alt: "Conference Highlight 2" },
            { src: "/images/gallery/c.jpg", alt: "Conference Highlight 3" },
            { src: "/images/gallery/d.jpg", alt: "Conference Highlight 4" },
            { src: "/images/gallery/e.jpg", alt: "Conference Highlight 5" },
            { src: "/images/conference-stage-highlight.jpg", alt: "Conference Stage" },
          ].map((item, idx) => (
            <div key={idx} className="aspect-square relative rounded-xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors & Partners Section with infinite marquee */}
      <section className="py-24 px-6 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter">
            Sponsors & Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are grateful for the generous support of our sponsors and partners who make this conference possible.
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-marquee gap-12 whitespace-nowrap hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, setIndex) =>
              [
                { name: "Jameson", logo: "/images/sponsors/Jameson_Irish_Whiskey_logo.png" },
                { name: "Johnnie Walker", logo: "/images/sponsors/Johnnie-Walker-Logo-PNG-Photos.png" },
                { name: "MTN", logo: "/images/sponsors/MTN-Logo.png" },
                { name: "Pepsi", logo: "/images/sponsors/Pepsi-Logo.wine.png" },
              ].map((sponsor, idx) => (
                <div
                  key={`${setIndex}-${idx}`}
                  className="flex-shrink-0 h-24 px-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group hover:border-primary/50 transition-colors"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={100}
                    height={80}
                    className="object-contain"
                  />
                </div>
              )),
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}</style>
      </section>

      {/* Get Involved Section with two prominent CTAs */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 via-white/5 to-white/5 border border-white/10 rounded-3xl p-12 lg:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter">Get Involved</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us in creating an unforgettable experience for the next generation. Whether through partnership or
              volunteering, your involvement makes an eternal impact.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="h-16 px-12 text-xl font-bold uppercase tracking-wider rounded-none group">
                <HandshakeIcon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Become a Partner
              </Button>
{/*               <Button
                size="lg"
                variant="outline"
                className="h-16 px-12 text-xl font-bold uppercase tracking-wider rounded-none border-white/20 hover:bg-white/10 bg-transparent group"
              >
                <UserPlus className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Become a Volunteer
              </Button> */}
            </div>

            <p className="text-sm text-muted-foreground mt-8 italic">
              "Every soul reached, every life transformed — you are a part of this story."
            </p>
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-20 px-6 border-t border-white/10 bg-background text-center">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase italic mb-8 inline-block">
            Faithwalkers
          </Link>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-sm font-bold uppercase tracking-widest text-white/60">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#donate" className="hover:text-primary transition-colors">
              Support
            </Link>
            <Link href="mailto:events@faithwalkers.org" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="text-sm text-muted-foreground italic">
            &copy; {new Date().getFullYear()} Faithwalkers Youth Ministry. "Walk by Faith."
          </div>
        </div>
      </footer>
    </main>
  )
}
