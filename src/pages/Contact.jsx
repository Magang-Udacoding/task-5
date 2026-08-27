import { useEffect, useState } from "react";

function Contact() {
  // useEffect 
  useEffect (()=> {
    document.title = 'Portfolio | Contact'
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form data:", formData);
    setSubmitted(true);
  }

  const contactInfo = [
    {
      label: "Email",
      value: "yourname@email.com",
      href: "mailto:yourname@email.com",
    },
    {
      label: "WhatsApp",
      value: "+62 823 8391 8084",
      href: "https://wa.me/6282383918084",
    },
    {
      label: "GitHub",
      value: "github.com/FailHy",
      href: "https://github.com/FailHy",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-blue-400"> Touch</span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Have Question or Want to Work Together? Send A Messages to Me!
        </p>
      </section>

      {/* content */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* contact info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Contact <span className="text-blue-400"> Info</span>
            </h2>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <a
                  href={info.href}
                  key={info.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-all duration-200 group"
                >
                  <p className="text-gray-400 text-sm">
                    {info.label}
                  </p>

                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-200">
                    {info.value}
                  </p>
                </a>
              ))}

              
            </div>
          </div>

          {/* form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Send <span className="text-blue-400"> Message</span>
            </h2>

            {submitted ? (
              <div className="bg-green-900/40 border border-green-500 text-green-400 rounded-xl p-6 text-center">
                <p className="text-2xl mb-2">Send</p>
                <p className="font-semibold">Message Sent!</p>
                <p className="text-sm mt-1 text-green-300">Not Connected to Backend</p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 text-sm text-blue-400 hover:underline"
                >
                  Send Other Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* name */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* email */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* message */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Type your message here...."
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* btn submit */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
