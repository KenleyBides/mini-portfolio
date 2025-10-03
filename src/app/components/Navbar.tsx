import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-gray-400 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-bold">Ken's Portfolio</span>
        </Link>

        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
