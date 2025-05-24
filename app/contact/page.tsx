"use client";

import type React from "react";

import { Instagram, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex justify-center">
      <main className="container py-4">
        <h1 className="text-xl md:text-lg sm:text-md font-bold mb-8">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2  sm:grid-cols-1 gap-12">
          <div>
            <p className="text-lg mb-8">
              I'm always interested in discussing new projects, commissions, or
              exhibition opportunities. Feel free to reach out using the form or
              contact information below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:hello@oliverballon.com"
                    className="text-gray-600"
                  >
                    hello@oliverballon.com
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <a
                  href="http://instagram.com/olliesavestheworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start"
                >
                  <Instagram className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                  <div>
                    <h3 className="font-medium">Instagram</h3>
                    <p className="text-gray-600">@olliesavestheworld</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="bg-gray-50 p-6 rounded-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. I'll get back to you
                  as soon as possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div> */}
        </div>
      </main>
    </div>
  );
}
