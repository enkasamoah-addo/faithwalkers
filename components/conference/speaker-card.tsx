import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface SpeakerCardProps {
  name: string
  role: string
  image: string
  bio: string
}

export function SpeakerCard({ name, role, image, bio }: SpeakerCardProps) {
  return (
    <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
      <div className="aspect-[4/5] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-black uppercase italic text-primary mb-1">{name}</h3>
        <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  )
}
