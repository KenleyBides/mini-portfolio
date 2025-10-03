export default function Projects() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>

      <div className="space-y-8">
        {/* Project 1 */}
        <div className="border p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Flexible Layout</h2>
          <a href="https://kenleybides.github.io/Assignment-1---COD1X/" target="_blank" rel="noopener noreferrer"><img
            src="/COD1X.png"
            alt="Portfolio Screenshot"
            className="mb-2 rounded"/>
          </a>
          <p>
            A Web Project showcasing a minimalist layout, changing depending on the screen size.
          </p>
          <br></br>
          <ul>
            <li>Minimalist Layout</li>
            <li>Working Navigation Bar</li>
            <li>Media Queries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
