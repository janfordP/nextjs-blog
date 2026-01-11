export default function AboutSection({ summary, interests }) {
  return (
    <section className="max-w-3xl mx-auto py-16">
      <h2 className="text-2xl font-semibold mb-6">About Me</h2>

      <div className="space-y-4 text-gray-700">
        {summary.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-medium mb-2">Interests</h3>
        <ul className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <li
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
