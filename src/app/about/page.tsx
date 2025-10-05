import Image from 'next/image';

export default function About() {
  return (
    <main className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
       <Image
        src="/myphoto.jpeg"
        alt="Profile picture"
        width={160}
        height={160}
        className="rounded-full mx-auto mb-6"
      />
      <p className="text-lg mb-4">
       Welcome, my name is Kenley Bides - a student at Georgian College studying Interactive Media Design - Web.
       I have a passion for Web Development and Creative Digital Design.
      </p>
      <p className="text-lg mb-4">
        My mission is to improve day by day, continuously learning and growing as a developer and designer.
      </p>
    </main>
  );
}
