import type { ElementType } from 'react'

interface CardProps {
  variant?: 'primary' | 'secondary'
  icon: ElementType
  title: string
  text: string
}

export function Card({
  icon: Icon,
  title,
  text,
  variant = 'primary',
}: CardProps) {
  const cardStyles =
    variant === 'primary'
      ? 'border border-zinc-600 bg-linear-150 backdrop-blur-2xl from-[#292932]/60 hover:shadow-slate-800/60 from-45% to-[#A7BFFC]/30'
      : 'bg-white hover:shadow-zinc-800/60'

  return (
    <div
      className={`relative flex min-h-96 max-w-[400] flex-col gap-6 rounded-2xl p-12 transition hover:scale-[1.03] hover:shadow-2xl hover:transition ${cardStyles}`}
    >
      <Icon size={52} className="text-[#A7BFFC]" />
      <h3 className="text-2xl font-semibold text-[#A7BFFC]">{title}</h3>
      <p className="text-zinc-500">{text}</p>
    </div>
  )
}
