export default function HeroSection({ name, role }) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
      <p className="mt-4 text-lg text-gray-600">{role}</p>
    </section>
  );
}
