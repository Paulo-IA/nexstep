import type { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <nav>
      <ul className="flex gap-14">{children}</ul>
    </nav>
  )
}
