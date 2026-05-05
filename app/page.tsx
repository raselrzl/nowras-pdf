export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold">SchoolSaaS</h1>

        <div className="flex gap-3">
          <a
            href="/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Manage Your School Smarter
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          A simple SaaS platform to manage students, teachers, attendance, and
          fees — all in one place.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
          >
            Start Free
          </a>
          <a
            href="/login"
            className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-100"
          >
            Login
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto pb-20">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Student Management</h3>
          <p className="text-gray-600 text-sm">
            Easily add, update, and manage student records.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Teacher Control</h3>
          <p className="text-gray-600 text-sm">
            Assign teachers, manage roles, and track performance.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Reports & Analytics</h3>
          <p className="text-gray-600 text-sm">
            Get insights into attendance, fees, and overall performance.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} SchoolSaaS. All rights reserved.
      </footer>
    </main>
  );
}