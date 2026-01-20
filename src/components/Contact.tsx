import { MapPin, Mail, Clock, Instagram, Sparkles } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';
import contactBg from '@/assets/contact-bg.jpg';
import whatsappIcon from '@/assets/whatsapp-icon.png';

const Contact = () => {
  const headerReveal = useScrollReveal();
  const infoReveal = useScrollReveal();
  const mapReveal = useScrollReveal();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Avenida Paraná, 3669 - Cajuru do Sul',
      subcontent: 'Sorocaba - SP, 18105-002',
    },
    {
      icon: Clock,
      title: 'Horário de funcionamento',
      content: 'Segunda a sexta: 09h às 18h',
      subcontent: 'Sábados: 09h às 14h',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'Inery66@gmail.com',
      link: 'mailto:Inery66@gmail.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@top10cosmeticossorocaba',
      link: 'https://instagram.com/top10cosmeticossorocaba',
    },
  ];

  return (
    <section id="contato" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerReveal.ref}
          className={`text-center mb-10 sm:mb-12 md:mb-16 reveal ${headerReveal.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">
            <Sparkles size={16} className="animate-sparkle" />
            Entre em contato
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Fale conosco
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Estamos prontos para atender você! Visite nossa loja ou entre em contato pelos nossos canais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div 
            ref={infoReveal.ref}
            className={`space-y-4 sm:space-y-6 stagger-children ${infoReveal.isVisible ? 'visible' : ''}`}
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-3 sm:gap-4 p-4 sm:p-6 glass-card rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 hover-lift hover-glow transition-all duration-300 group"
              >
                <div className="flex-shrink-0 p-2.5 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl h-fit group-hover:glow-primary transition-all duration-300">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:animate-bounce-subtle" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-foreground mb-1 text-sm sm:text-base">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base break-words"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <>
                      <p className="text-muted-foreground text-sm sm:text-base">{info.content}</p>
                      {info.subcontent && (
                        <p className="text-muted-foreground text-sm sm:text-base">{info.subcontent}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5515999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-accent hover-glow transition-all duration-300 shadow-elegant group"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce-subtle" />
              Fale pelo WhatsApp
            </a>
          </div>

          {/* Map */}
          <div 
            ref={mapReveal.ref}
            className={`relative reveal-right ${mapReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl sm:rounded-3xl blur-xl transform -rotate-2 animate-pulse-glow" />
            <div className="relative glass-card rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-elegant h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] gradient-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0!2d-47.4557!3d-23.4678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI4JzA0LjEiUyA0N8KwMjcnMjAuNSJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Top 10 Cosméticos"
                className="sm:min-h-[350px] md:min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
