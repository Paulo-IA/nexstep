import Image from 'next/image'
import { Button } from '../button/button'
import Logo from '../../assets/logo.png'
import { Navbar } from './components/navbar'

export function Header() {
  return (
    <header className="flex w-full items-center justify-center bg-zinc-900">
      <div className="m-auto flex w-full max-w-(--container-width) items-center justify-between py-5">
        <Image alt="NexStep Logo" src={Logo} width={189} height={100} />

        <Navbar.Root>
          <Navbar.Item url="#jobs">Serviços</Navbar.Item>
          <Navbar.Item url="#products">Produtos</Navbar.Item>
          <Navbar.Item url="#about">Sobre</Navbar.Item>
          <Navbar.Item url="#how-we-do">Como Fazemos</Navbar.Item>
        </Navbar.Root>

        <Button
          text="Fale conosco"
          variant="secondary"
          size="sm"
          asLink
          url="#contact"
        />
      </div>
    </header>
  )
}
