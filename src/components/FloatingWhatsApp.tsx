"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  // Replace with the actual WhatsApp number including country code (without + or spaces)
  const phoneNumber = "919408556985"; 
  const message = encodeURIComponent("Hello, I'm interested in your industrial supplies. Can we discuss?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba5a] transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.551 4.198 1.597 6.02L.152 23.32l5.412-1.42a11.967 11.967 0 006.467 1.884h.005c6.645 0 12.029-5.383 12.029-12.03C24.065 5.383 18.678 0 12.031 0zm0 21.764h-.004a9.948 9.948 0 01-5.076-1.385l-.364-.216-3.774.99.1-.378 1.01-3.69-.236-.375A9.966 9.966 0 012.02 12.03c0-5.525 4.498-10.024 10.023-10.024 5.525 0 10.024 4.499 10.024 10.024 0 5.525-4.499 10.024-10.025 10.024zm5.503-7.518c-.302-.151-1.785-.882-2.062-.983-.277-.101-.479-.151-.68.151-.202.302-.781.983-.957 1.184-.176.202-.353.227-.655.076-1.332-.667-2.47-1.448-3.414-2.735-.245-.333-.032-.505.116-.653.136-.135.302-.352.453-.529.151-.176.202-.302.302-.504.101-.202.05-.378-.025-.529-.076-.151-.68-1.637-.932-2.241-.245-.589-.495-.509-.68-.519-.176-.01-.378-.01-.58-.01a1.118 1.118 0 00-.806.378c-.277.302-1.058 1.033-1.058 2.519s1.083 2.921 1.234 3.123c.151.202 2.128 3.249 5.156 4.556.721.31 1.284.495 1.724.634.723.23 1.382.197 1.902.119.585-.088 1.785-.73 2.037-1.436.252-.706.252-1.31.176-1.436-.075-.126-.277-.202-.579-.353z" />
      </svg>
    </motion.a>
  );
}
