import { LucideIcon } from 'lucide-react'

interface CardProps {
  icon: LucideIcon
  title: string
  text: string
}

export function Card({ icon: Icon, title, text }: CardProps) {
  return (
    <div className="relative flex min-h-96 max-w-[400] flex-col gap-6 rounded-2xl border border-zinc-600 bg-linear-150 from-[#292932]/60 from-45% to-[#A7BFFC]/30 p-12 backdrop-blur-2xl transition hover:scale-[1.03] hover:shadow-2xl hover:shadow-slate-800/60 hover:transition">
      <Icon size={52} className="text-[#A7BFFC]" />
      <h3 className="text-2xl text-[#A7BFFC]">{title}</h3>
      <p className="text-zinc-500">{text}</p>
    </div>
  )
}
