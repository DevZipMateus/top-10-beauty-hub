import whatsappIcon from '@/assets/whatsapp-icon.png';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5515999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 hover:scale-105 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
    </a>
  );
};

export default WhatsAppButton;
