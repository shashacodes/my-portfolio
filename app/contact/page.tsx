"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  Bookmark,
  PenLine,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Moon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import DarkModeToggle from "../components/button";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [newsletter, setNewsletter] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleNewsletterSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!newsletter) return;
    setNewsletterSubmitted(true);
    setNewsletter("");
    setTimeout(() => setNewsletterSubmitted(false), 4000);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900"
      }`}
    >
<div className="w-full max-w-3xl mx-auto px-6 lg:px-8">
  <Header darkMode={darkMode} activePage="contact" />


        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">
            SHARON IBANGA
          </h1>
          <p
            className={`text-xs ${
              darkMode ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            Frontend Engineer · React · Next.js · TypeScript
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p
            className={`text-sm leading-relaxed mb-6 ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Have a project in mind or a question about my work? Drop me a
            message using the form below, or get in touch directly via email or
            phone. I&apos;m always happy to connect.
          </p>

          <div className="space-y-3">
            <div>
              <label
                className={`block text-xs mb-1 ${
                  darkMode ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="jane doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full px-3 py-2 text-sm rounded-md border outline-none transition-colors ${
                  darkMode
                    ? "bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-600 focus:border-zinc-500"
                    : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400"
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-xs mb-1 ${
                  darkMode ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="ibsharon19@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full px-3 py-2 text-sm rounded-md border outline-none transition-colors ${
                  darkMode
                    ? "bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-600 focus:border-zinc-500"
                    : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400"
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-xs mb-1 ${
                  darkMode ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Message
              </label>
              <textarea
                placeholder="Your message..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full px-3 py-2 text-sm rounded-md border outline-none transition-colors resize-none ${
                  darkMode
                    ? "bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-600 focus:border-zinc-500"
                    : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400"
                }`}
              />
            </div>

            <button
              onClick={handleSubmit}
              className={`w-full py-2.5 text-sm font-medium rounded-md transition-colors ${
                submitted
                  ? "bg-green-600 text-white"
                  : darkMode
                  ? "bg-zinc-600 hover:bg-zinc-500 text-white"
                  : "bg-zinc-600 hover:bg-zinc-700 text-white"
              }`}
            >
              {submitted ? "Message Sent ✓" : "Submit"}
            </button>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-3 mb-10">
          <div
            className={`rounded-md p-3 ${
              darkMode ? "bg-zinc-800" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Mail size={14} className="text-zinc-500" />
              <span className="text-xs font-medium">Email</span>
            </div>
            <a
              href="mailto:ibsharon19@gmail.com"
              className={`text-xs break-all ${
                darkMode
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              sharon@gmail.com
            </a>
          </div>

          <div
            className={`rounded-md p-3 ${
              darkMode ? "bg-zinc-800" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Phone size={14} className="text-zinc-500" />
              <span className="text-xs font-medium">Phone</span>
            </div>
            <a
              href="tel:+2348141117307"
              className={`text-xs ${
                darkMode
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              +234 814 111 7307
            </a>
          </div>
        </div>

        <hr
          className={`mb-6 ${darkMode ? "border-zinc-700" : "border-zinc-300"}`}
        />

<Newsletter darkMode={darkMode} />


        <footer className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="http://linkedin.com/in/sharon-ibanga-511894177"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={16}
                className={`transition-colors ${
                  darkMode
                    ? "text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              />
            </a>
            <a
              href="https://yoursite.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <Globe
                size={16}
                className={`transition-colors ${
                  darkMode
                    ? "text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              />
            </a>
            <a href="mailto:ibsharon19@gmail.com" aria-label="Email">
              <Mail
                size={16}
                className={`transition-colors ${
                  darkMode
                    ? "text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              />
            </a>
          </div>

          <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

        </footer>
      </div>
    </div>
  );
}