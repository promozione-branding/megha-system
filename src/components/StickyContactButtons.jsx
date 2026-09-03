
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const StickyContactButtons = () => {
  const buttons = [
    {
      label: "WhatsApp",
      href: "https://wa.me/919873735713",
      icon: MessageCircle,
      bg: "#25D366",
      hoverBg: "#20bd5a",
      target: "_blank",
    },
    {
      label: "Call Now",
      href: "tel:+919873735713",
      icon: Phone,
      bg: "#2563eb",
      hoverBg: "#1d4ed8",
    },
  ];

  return (
    <div className="fixed bottom-6 right-5 z-[9999] flex flex-col items-end gap-3">
      {buttons.map((button) => {
        const Icon = button.icon;

        return (
          <motion.a
            key={button.label}
            href={button.href}
            target={button.target}
            rel={button.target ? "noopener noreferrer" : undefined}
            initial={{ width: 52 }}
            whileHover={{ width: 155 }}
            whileTap={{ scale: 0.96 }}
            transition={{
              width: {
                type: "spring",
                stiffness: 500,
                damping: 30,
              },
              scale: {
                duration: 0.15,
              },
            }}
            style={{
              backgroundColor: button.bg,
            }}
            className="group relative flex h-12 origin-right items-center overflow-hidden rounded-full border border-white/20 text-white shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          >
            {/* Icon container */}
            <motion.div
              className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center"
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
            >
              <Icon
                className="h-[21px] w-[21px]"
                strokeWidth={2.3}
              />
            </motion.div>

            {/* Text */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{
                opacity: {
                  duration: 0.15,
                  delay: 0.08,
                },
                x: {
                  duration: 0.2,
                  delay: 0.05,
                },
              }}
              className="ml-12 whitespace-nowrap pr-5 text-sm font-semibold"
            >
              {button.label}
            </motion.span>

            {/* Shine effect */}
            <motion.span
              initial={{ x: "-150%" }}
              whileHover={{ x: "250%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-8 skew-x-[-20deg] bg-white/25"
            />

            {/* Hover overlay */}
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full"
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default StickyContactButtons;