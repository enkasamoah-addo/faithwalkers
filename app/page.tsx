import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Zap, Heart, Calendar, MapPin, Ticket, HandHeart, Megaphone, Gift, Flame } from "lucide-react"
import Image from "next/image"
import cn from "classnames"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />

      {/* About Section - We Are Faithwalkers */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image src="/images/faithwalkers-stage.jpg" alt="Faithwalkers Stage" fill className="object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase italic tracking-tight">
              We Are <span className="text-primary underline decoration-2 underline-offset-8">Faithwalkers</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Faithwalkers is more than just a youth ministry. It's a movement of young people committed to walking in
              faith, living with purpose, and transforming our world through the power of Christ.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-1">Community</h3>
                <p className="text-sm text-muted-foreground">A place to belong and grow with others.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Heart className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-1">Worship</h3>
                <p className="text-sm text-muted-foreground">Encountering Hashem in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tight">Our Mission</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To raise a generation of disciples who are spiritually grounded, empowered by faith, and ready to walk into
            their God-given destiny.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Spiritual Growth",
              desc: "Deepening our relationship with Hashem through prayer and study.",
              icon: Target,
            },
            {
              title: "Discipleship",
              desc: "Walking alongside each other as we follow Christ's example.",
              icon: Users,
            },
            {
              title: "Empowerment",
              desc: "Equipping youth with the tools to live out their purpose.",
              icon: Zap,
            },
          ].map((item, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors group">
              <CardContent className="p-8">
                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4 uppercase italic">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Conference Section (Featured Event) */}
      <section id="conference" className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-primary/20">
          <div className="lg:w-1/2 p-12 lg:p-20 text-background flex flex-col justify-center">
            <span className="inline-block px-4 py-1 rounded-full bg-background/10 text-background font-bold text-xs mb-6 uppercase tracking-widest">
              Upcoming Event
            </span>
            <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase italic tracking-tighter leading-none">
              Hashem Youth <br />
              Conference
            </h2>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 font-bold text-xl">
                <Calendar className="w-6 h-6" /> August 15-18, 2025
              </div>
              <div className="flex items-center gap-3 font-bold text-xl">
                <MapPin className="w-6 h-6" /> Downtown Arena, Main Hall
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-fit h-14 px-10 text-lg font-bold bg-background text-primary hover:bg-background/90 rounded-none uppercase"
              >
                <Link href="/hashem-youth-conference">
                  Register Now <Ticket className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-fit h-14 px-10 text-lg font-bold border-background text-background hover:bg-background hover:text-primary rounded-none uppercase bg-transparent"
              >
                <Link href="/hashem-youth-conference">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <Image src="/placeholder.svg?key=qkc28" alt="Conference" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/20 to-transparent" />
          </div>
        </div>

        {/* Gallery */}
        <div className="max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square relative rounded-xl overflow-hidden group">
            <Image
              src="/images/conference-stage-highlight.jpg"
              alt="Conference Highlight"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
            />
          </div>
          {[2, 3, 4].map((i) => (
            <div key={i} className="aspect-square relative rounded-xl overflow-hidden group">
              <Image
                src={`/youth-ministry-event-.jpg?key=jvxyv&height=400&width=400&query=youth+ministry+event+${i}`}
                alt="Event"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Events Section */}
      <section id="events" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tight">Our Events</h2>
            <div className="h-1 w-24 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl">
              Faithwalkers is a year-round movement. We are active in the streets, in the community, and in the heart of
              the city, bringing hope and movement wherever we go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Hashem Youth Conference",
                desc: "Our flagship annual gathering of thousands for a weekend of revival and purpose.",
                icon: Flame,
                link: "/hashem-youth-conference",
                cta: "Explore Conference",
                featured: true,
              },
              {
                title: "Evangelism & Outreach",
                desc: "Street ministry and community engagement, taking the message of Christ to the people.",
                icon: Megaphone,
                link: "#contact",
                cta: "Get Involved",
              },
              {
                title: "Charity & Service",
                desc: "Impactful service projects helping the vulnerable and showing love through action.",
                icon: HandHeart,
                link: "#contact",
                cta: "Learn More",
              },
              {
                title: "Support Drives",
                desc: "Organized drives to provide essentials to families and youth in need across the city.",
                icon: Gift,
                link: "#donate",
                cta: "Donate Now",
              },
            ].map((event, idx) => (
              <Card
                key={idx}
                className={cn(
                  "bg-white/5 border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/50 group",
                  event.featured && "ring-2 ring-primary/50 bg-primary/5",
                )}
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 w-fit group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <event.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase italic leading-tight">{event.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-grow">{event.desc}</p>
                  <Button
                    asChild
                    variant={event.featured ? "default" : "outline"}
                    className={cn(
                      "w-full rounded-none font-bold uppercase tracking-wider",
                      !event.featured && "bg-transparent border-white/20 hover:bg-white/10",
                    )}
                  >
                    <Link href={event.link}>{event.cta}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support the Movement */}
      <section id="donate" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/5 border-white/10 p-12 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tight">
              Support the Movement
            </h2>
            <div className="h-1 w-24 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
              Your generosity fuels our mission to reach youth everywhere. Give today to help us expand our programs and
              outreach.
            </p>
            <Button size="lg" className="rounded-none px-10 font-bold uppercase tracking-wide h-14 text-lg">
              Donate Online <Heart className="ml-2 w-5 h-5 fill-current" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/5 border-white/10 p-12 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tight">Get Involved</h2>
            <div className="h-1 w-24 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
              Clear calls to action. Join a group, volunteer your time, or partner with us. There is a place for you
              here.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-primary text-primary hover:bg-primary hover:text-background transition-colors bg-transparent"
              >
                Join a Group
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-primary text-primary hover:bg-primary hover:text-background transition-colors bg-transparent"
              >
                Become a Volunteer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-primary text-primary hover:bg-primary hover:text-background transition-colors bg-transparent"
              >
                Partner With Us
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 border-t border-white/10 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter text-white uppercase italic mb-6 inline-block"
            >
              Faithwalkers
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-8">
              "Walk by faith, not by sight." Raising a generation empowered by Christ to walk their purpose.
            </p>
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white/5 hover:bg-primary hover:text-background transition-colors"
              >
                <Zap className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-white/5 hover:bg-primary hover:text-background transition-colors"
              >
                <Users className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#mission" className="hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#conference" className="hover:text-white transition-colors">
                  Conference
                </Link>
              </li>
              <li>
                <Link href="#donate" className="hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Connect</h4>
            <p className="text-muted-foreground mb-4">
              123 Faith Avenue
              <br />
              Gospel Heights, GH 54321
            </p>
            <p className="text-muted-foreground">hello@faithwalkers.org</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground italic">
          &copy; {new Date().getFullYear()} Faithwalkers Youth Ministry. Built for the Glory of Hashem.
        </div>
      </footer>
    </main>
  )
}
