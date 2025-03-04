import Link from 'next/link'
import type { ReactNode } from 'react'

interface ItemProps {
  url: string
  children: ReactNode
}

export function Item({ url, children }: ItemProps) {
  return (
    <Link
      href={url}
      className="rounded-sm p-2.5 transition hover:bg-zinc-100/20 hover:transition"
    >
      <li>{children}</li>
    </Link>
  )
}
