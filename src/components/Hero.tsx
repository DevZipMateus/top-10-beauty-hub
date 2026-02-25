import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import heroBg from '@/assets/hero-bg.jpg';
import whatsappIcon from '@/assets/whatsapp-icon.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="relative mb-6 sm:mb-8 animate-fade-in">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
            <img 
              src={logo} 
              alt="Top 10 Cosméticos" 
              className="relative w-48 sm:w-56 md:w-64 lg:w-80 h-auto animate-float"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in px-2" style={{ animationDelay: '0.2s' }}>
            Top 10 Cosméticos
          </h1>

          {/* Subtitle */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-light mb-6 sm:mb-8 animate-fade-in px-2" style={{ animationDelay: '0.4s' }}>
            Sua loja de cosméticos, perfumaria, maquiagens e acessórios com <span className="text-primary font-medium">preços acessíveis</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            Beleza ao alcance de todos! Encontre os melhores produtos para realçar sua beleza com qualidade e preços acessíveis em Sorocaba.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://wa.me/5515991416446"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-accent transition-all duration-300 shadow-elegant hover:shadow-gold"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
              Visite nossa loja
            </a>
            <Link
              to="/vitrine"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Heart size={18} className="sm:w-5 sm:h-5" />
              Ver produtos
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-16 animate-fade-in px-2" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl min-w-[100px]">
              <span className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary">Preço</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Único</span>
            </div>
            <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl min-w-[100px]">
              <span className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-gold">Qualidade</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Garantida</span>
            </div>
            <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl min-w-[100px]">
              <span className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-accent">Variedade</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Completa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;