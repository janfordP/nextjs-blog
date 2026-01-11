export default function HeroSection({ role }) {
  return (
    <section className="py-20 flex justify-center">
      <div className="max-w-3xl w-full text-center px-6">
        <p className="text-2xl font-medium text-gray-700">
          {role}
        </p>
      </div>
    </section>
  );
}
