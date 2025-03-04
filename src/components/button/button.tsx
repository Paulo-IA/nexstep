import Link from 'next/link'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  size?: 'sm' | 'lg'
  asLink?: boolean
  url?: string
  variant?: 'primary' | 'secondary'
}

export function Button({
  text,
  size = 'lg',
  asLink = false,
  variant = 'primary',
  url,
  ...rest
}: ButtonProps) {
  const variantStyles =
    variant === 'primary'
      ? 'bg-[#a7bffc] text-white hover:bg-[#98b0eb] hover:border-[#98b0eb]'
      : 'text-[#a7bffc] hover:bg-[#a7bffc]/20'

  const sizeStyles = size === 'sm' ? 'text-base' : 'text-xl'

  if (asLink && !url) return

  return asLink ? (
    <Link
      href={url!}
      className={`flex items-center justify-center rounded-xl border border-[#a7bffc] px-3 py-2 transition hover:scale-105 hover:cursor-pointer hover:transition ${variantStyles} ${sizeStyles}`}
    >
      {' '}
      {text}
    </Link>
  ) : (
    <button
      type="button"
      className={`flex items-center justify-center rounded-xl border border-[#a7bffc] px-3 py-2 transition hover:scale-105 hover:cursor-pointer hover:transition ${variantStyles} ${sizeStyles}`}
      {...rest}
    >
      {text}
    </button>
  )
}
