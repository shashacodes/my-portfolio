"use client"
import React, { useState } from "react";
import Head from "next/head";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import emailjs from "emailjs-com";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { Home } from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_your_service_id", 
        "template_your_template_id", 
        formData,
        "user_your_user_id" 
      );

      if (response.status === 200) {
        setSubmissionStatus("Message sent successfully!");
      } else {
        setSubmissionStatus("There was an error sending your message.");
      }
    } catch (error: unknown) {
        setSubmissionStatus("There was an error sending your message.");
        if (error instanceof Error) {
          console.error("Error occurred while sending email:", error.message);
        } else {
          console.error("Unknown error occurred while sending email.");
        }
      }
      
  };

  return (
    <>
  <Link href="/" passHref>
        <IconButton
          sx={{
            position: 'fixed',
            top: 30,
            left: 30,
            backgroundColor: '#052E16',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#388E3C',
            },
          }}
        >
          <Home fontSize="large" />
        </IconButton>
      </Link>  
       <div>
      <Head>
        <title>Contact Me - Your Name</title>
        <meta
          name="description"
          content="Get in touch with me for inquiries, collaboration, or to learn more about my work."
        />
      </Head>

      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">Contact Me</h1>
          <p className="text-lg text-gray-600 mb-8">
            Whether you have a question, a project, or just want to connect, feel free to reach out!
          </p>
         

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition duration-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email</h3>
              <p className="text-gray-600 mb-4">
                Have any questions or inquiries? Send me an email, and I’ll get back to you as soon as possible.
              </p>
              <a href="mailto:ibsharon19@gmail.com" className="text-[#052E16] italic hover:text-blue-700">
                <FaEnvelope className="inline mr-2" />
                ibsharon19@gmail.com
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition duration-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">LinkedIn</h3>
              <p className="text-gray-600 mb-4">
                Let’s connect on LinkedIn for professional discussions, networking, and more.
              </p>
              <a
                href="https://www.linkedin.com/in/sharon-ibanga-511894177/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#052E16] italic hover:text-blue-700"
              >
                <FaLinkedin className="inline mr-2" />
                LinkedIn Profile
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition duration-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">GitHub</h3>
              <p className="text-gray-600 mb-4">
                Explore my repositories and open-source projects on GitHub.
              </p>
              <a
                href="https://github.com/shashacodes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#052E16] hover:text-gray-900 italic"
              >
                <FaGithub className="inline mr-2" />
                GitHub Profile
              </a>
            </div>
          </div>

          <form className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send a Message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-700 text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700 text-sm font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-gray-700 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#052E16] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {submissionStatus && (
            <p className="mt-4 text-center text-gray-600">{submissionStatus}</p>
          )}
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
