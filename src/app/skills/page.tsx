export default function Skills() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Skills</h1>

      <p className="text-lg mb-6 text-center">
        {`During my time in Georgian College, I've built a good foundation when it comes to Development skills.`}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Skill 1 */}
        <div className="flex flex-col items-center border p-4 rounded shadow hover:scale-105 transition-transform duration-300">
          <img src="/htmllogo.png" alt="HTML" className="w-12 h-12 mb-2"/>
          <span className="font-medium">HTML</span>
        </div>

        {/* Skill 2 */}
        <div className="flex flex-col items-center border p-4 rounded shadow hover:scale-105 transition-transform duration-300">
          <img src="/csslogo.webp" alt="CSS" className="w-12 h-12 mb-2"/>
          <span className="font-medium">CSS</span>
        </div>

        {/* Skill 3 */}
        <div className="flex flex-col items-center border p-4 rounded shadow hover:scale-105 transition-transform duration-300">
          <img src="/jslogo.webp" alt="JavaScript" className="w-12 h-12 mb-2"/>
          <span className="font-medium">JavaScript</span>
        </div>
      </div>
    </main>
  );
}
