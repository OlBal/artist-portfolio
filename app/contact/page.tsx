"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
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
    <div className="min-h-screen">
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
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
                  <p className="text-gray-600">contact@sophiachen.art</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">(415) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Studio</h3>
                  <p className="text-gray-600">
                    123 Artist Lane
                    <br />
                    San Francisco, CA 94110
                    <br />
                    United States
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Studio visits by appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
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
          </div>
        </div>
      </main>

      <footer className="border-t py-12 bg-white">
        <div className="container text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Sophia Chen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
