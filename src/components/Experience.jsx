const Experience = () => (
  <section className="bg-gray-50 py-16 px-4" id="experience">
    <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-600">I3MATRIX PVT LTD – PHP Developer</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Nov 2024 – Present</p>
        <p className="mt-2 text-gray-800 dark:text-gray-200">
          Implemented doctor registration and login features using Eloquent ORM, Blade templates, and Laravel routing.
          Secured routes with middleware and applied dependency injection for clean, maintainable code.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-600">XMEDIA SOLUTION – Full Stack Developer</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Aug 2023 – July 2024</p>
        <p className="mt-2 text-gray-800 dark:text-gray-200">
          Enquiry tracking, contract generation, payment clearance, and automated billing.
          Generated PDF invoices using HTML and triggered auto-emails. Worked with Core PHP, CodeIgniter, and MySQL.
        </p>
      </div>
    </div>
  </section>
);

export default Experience;


