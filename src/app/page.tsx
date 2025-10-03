import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
      <p className="text-lg mb-6">
        Current Georgian College student in the Interactive Media Design - Web Program
      </p>
      <p className="text-md mb-6">
        "Be the change you wish to see in the world"
        <br></br>- Mahatma Ghandi
      </p>
      <Link
        href="/about"
        className="bg-gray-500 px-6 py-3 rounded hover:bg-gray-600 transition"
      >
        Learn More
      </Link>
    </div>
  )
}
