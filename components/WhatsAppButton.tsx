import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppButton() {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");

  if (!number) return null;

  const message = encodeURIComponent(
    "Hi! I'd like help planning a Sri Lanka trip."
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-40 right-4 bottom-4 sm:right-6 sm:bottom-6 w-[52px] h-[52px] sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-md shadow-black/20 flex items-center justify-center text-white hover:-translate-y-0.5 transition-transform duration-300"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.2.58 4.28 1.68 6.13L4 29l8.06-1.64a11.9 11.9 0 0 0 3.96.68C22.6 28.04 28 22.64 28 16.02 28 9.4 22.6 3 16.02 3zm0 21.7c-1.34 0-2.65-.35-3.8-1.02l-.27-.16-4.78.97 1-4.66-.18-.29a9.6 9.6 0 0 1-1.5-5.5c0-5.32 4.33-9.65 9.65-9.65 5.32 0 9.65 4.33 9.65 9.65s-4.4 10.66-9.77 10.66zm5.3-7.24c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43a8.7 8.7 0 0 1-1.6-1.99c-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.5.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.35z" />
      </svg>
    </a>
  );
}
