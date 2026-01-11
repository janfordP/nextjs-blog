export default function HeroSection({ role }) {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="text-2xl font-medium text-gray-500">
          {role}
        </p>
      </div>
    </section>
  );
}
