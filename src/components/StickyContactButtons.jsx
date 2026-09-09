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
    {
      label: "Call Now",
      href: "tel:+919873735716",
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
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            variants={{
              rest: {
                width: 52,
              },
              hover: {
                width: 155,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            style={{
              backgroundColor: button.bg,
            }}
            className="group relative flex h-12 origin-right items-center overflow-hidden rounded-full border border-white/20 text-white shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          >
            {/* Icon */}
            <motion.div
              variants={{
                rest: {
                  scale: 1,
                  rotate: 0,
                },
                hover: {
                  scale: 1.08,
                  rotate: 5,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="absolute left-0 top-0 z-20 flex h-12 w-12 shrink-0 items-center justify-center"
            >
              <Icon
                className="h-[21px] w-[21px]"
                strokeWidth={2.3}
              />
            </motion.div>

            {/* Text */}
            <motion.span
              variants={{
                rest: {
                  opacity: 0,
                  x: -10,
                },
                hover: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                opacity: {
                  duration: 0.2,
                  delay: 0.08,
                },
                x: {
                  duration: 0.2,
                  delay: 0.05,
                },
              }}
              className="relative z-10 ml-12 whitespace-nowrap pr-5 text-sm font-semibold"
            >
              {button.label}
            </motion.span>

            {/* Full Width Shine */}
            <motion.span
              variants={{
                rest: {
                  left: "-100%",
                },
                hover: {
                  left: "120%",
                },
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute top-0 z-30 h-full w-10 -skew-x-[20deg] bg-white/30"
            />

            {/* Hover Overlay */}
            <motion.span
              variants={{
                rest: {
                  backgroundColor: "rgba(255,255,255,0)",
                },
                hover: {
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
              className="pointer-events-none absolute inset-0 z-40 rounded-full"
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default StickyContactButtons;