"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_2wlophq",
        "template_g7j3egp",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        "JAO6PwXM1d7B52qIw"
      );

      setIsSent(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      setError("Erreur lors de l'envoi du message. Réessayez plus tard.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-transparent p-8 rounded-lg ">
      <h2 className="text-2xl font-bold text-center mb-6">Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          rows={5}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#ff7a29] text-white p-3 rounded-lg hover:bg-[#ff944d] transition duration-300"
        >
          Envoyer
        </button>
      </form>

      {isSent && (
        <p className="text-green-600 text-center mt-4">
          Message envoyé avec succès !
        </p>
      )}
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}
    </div>
  );
}
