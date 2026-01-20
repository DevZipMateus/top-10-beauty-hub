import { Sparkles, Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent/5 blur-xl" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="relative mb-8 animate-fade-in">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
            <img 
              src={logo} 
              alt="Top 10 Cosméticos" 
              className="relative w-64 md:w-80 h-auto animate-float"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Top 10 Cosméticos
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Sua loja de <span className="text-primary font-medium">preço único</span> em cosméticos, perfumaria, maquiagens e acessórios
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Beleza ao alcance de todos! Encontre os melhores produtos para realçar sua beleza com qualidade e preços acessíveis em Sorocaba.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://wa.me/5515999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent transition-all duration-300 shadow-elegant hover:shadow-gold"
            >
              <Sparkles size={20} />
              Visite nossa loja
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Heart size={20} />
              Ver produtos
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-primary">Preço</span>
              <span className="text-sm text-muted-foreground">Único</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-gold">Qualidade</span>
              <span className="text-sm text-muted-foreground">Garantida</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-accent">Variedade</span>
              <span className="text-sm text-muted-foreground">Completa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;