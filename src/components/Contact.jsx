const Contact = () => (
  <section className="py-12 text-center" id="contact">
    <h2 className="text-2xl font-bold mb-6">Contact</h2>
    <form className="max-w-md mx-auto space-y-4">
      <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
      <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 border rounded" />
      <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
