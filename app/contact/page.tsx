"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-4xl font-bold text-[#333] text-center md:text-center">
        Contactez-moi
      </h1>

      <p className="mt-4 text-xl text-[#333] text-center max-w-2xl">
        Vous avez un projet web en tête ou souhaitez discuter d’une future
        collaboration ? Je suis disponible et prêt à relever de nouveaux défis.
        N’hésitez pas à me contacter !
      </p>

      <div className="mt-8 flex flex-col xl:flex-row pt-12 md:flex-col gap-12 bg-transparent ">
        <div className="p-6 text-[#333] text-start mt-10 sm:flex-col">
          <h2 className="text-2xl font-semibold mb-4 md:text-center sm:text-center">
            Mes Coordonnées
          </h2>
          <p className="mb-10 text-xl md:text-center">
            Vous pouvez me contacter en remplissant le formulaire ou alors
            directement par mail.
          </p>
          <p className="text-xl mb-4 md:text-center">
            <strong>Email : </strong>
            <a
              href="mailto:scicluna.mathieu@hotmail.fr"
              className="text-[#333] hover:text-[#ff7a29] "
            >
              scicluna.mathieu@hotmail.fr
            </a>
          </p>
          <p className="text-xl md:text-center">
            <strong>Localisation : </strong>Granville, 50400
          </p>
        </div>
        <ContactForm />
      </div>
    </motion.div>
  );
}
