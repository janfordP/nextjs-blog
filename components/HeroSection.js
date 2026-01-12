export default function HeroSection({ role }) {
  return (
    <section className="w-screen py-20 flex justify-center">
      <p className="text-2xl font-medium text-gray-700 text-center">
        {role}
      </p>
    </section>
  );
}
