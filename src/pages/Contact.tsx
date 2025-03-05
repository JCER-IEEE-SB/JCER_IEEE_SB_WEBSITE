import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-1 bg-gradient-to-b from-gray-900 to-[#00629B]">
      {/* Hero Section */}
      <section className="relative mt-16 py-20 bg-gradient-to-b from-gray100 to-[#00629B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Visit Us", text: "JCER Campus, 682/2, 683/2A, Udyambag, Angol, Belagavi, Karnataka 590008" },
                  { icon: Mail, title: "Email Us", text: "jcerieee@gmail.com" },
                  { icon: Phone, title: "Call Us", text: "+91 9110841457" },
                ].map(({ icon: Icon, title, text }, index) => (
                  <div key={index} className="flex items-start">
                    <Icon className="w-6 h-6 text-[#00629B]" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                      <p className="mt-1 text-gray-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                <a
                  href="https://www.instagram.com/jcer_ieee/"
                  className="text-gray-600 hover:text-[#00629B] transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <Instagram className="w-6 h-6" />
                  <span>Instagram</span>
                </a>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.709278771437!2d74.48638057486484!3d15.822328646000937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65fce1db9ac3%3A0x272a8426898e54a2!2sJGI%20-%20Jain%20College%20Of%20Engineering%20And%20Research!5e1!3m2!1sen!2sin!4v1739013136899!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "subject"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      // value={formData[field]}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00629B] focus:ring focus:ring-[#00629B] focus:ring-opacity-50"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00629B] focus:ring focus:ring-[#00629B] focus:ring-opacity-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00629B] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? "Sending..." : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;





// // ----------------------DONE!!---------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------------------------------------



