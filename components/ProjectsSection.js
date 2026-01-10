export default function ProjectsSection({ projects }) {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-2xl font-semibold mb-8">Projects & Ideas</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{project.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
