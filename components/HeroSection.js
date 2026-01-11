export default function HeroSection({ name, role }) {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {name}
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          {role}
        </p>
      </div>
    </section>
  );
}
