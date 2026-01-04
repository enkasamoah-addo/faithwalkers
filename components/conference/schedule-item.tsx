import { Calendar, Clock } from "lucide-react"

interface ScheduleItemProps {
  time: string
  title: string
  description: string
  day: string
}

export function ScheduleItem({ time, title, description, day }: ScheduleItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors">
      <div className="md:w-48 shrink-0">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-tighter mb-2">
          <Calendar className="w-4 h-4" /> {day}
        </div>
        <div className="flex items-center gap-2 text-white font-black text-xl italic uppercase">
          <Clock className="w-5 h-5 text-primary" /> {time}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
