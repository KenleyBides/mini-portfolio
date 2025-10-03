export default function About() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <img
      // Recent Picture - 
        src="/myphoto.jpeg"
        alt="Profile picture"
        className="w-40 h-40 rounded-full mx-auto mb-6"
      />
      <p className="text-lg mb-4">
       Welcome, my name is Kenley Bides - a student at Georgian College studying Interactive Media Design - Web.
       I have a passion for Web Development and Creative Digital Design.
      </p>
      <p className="text-lg mb-4">
        My mission is to improve day by day, continuously learning and growing as a developer and designer.
      </p>
    </div>
  );
}
