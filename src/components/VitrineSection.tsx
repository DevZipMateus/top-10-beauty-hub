import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollReveal from '@/hooks/useScrollReveal';

const VitrineSection = () => {
  const headerReveal = useScrollReveal();
  const cardReveal = useScrollReveal();
  const bottomReveal = useScrollReveal();

  return (
    <section id="vitrine" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gold/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            ref={headerReveal.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-12 reveal ${headerReveal.isVisible ? 'visible' : ''}`}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              <Sparkles size={16} className="animate-sparkle sm:w-[18px] sm:h-[18px]" />
              Novidade
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Conheça Nossa <span className="text-gradient">Vitrine Online</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Explore todos os nossos produtos de forma prática e descubra as melhores opções em cosméticos, perfumes, maquiagens e acessórios.
            </p>
          </div>

          {/* Content Card */}
          <div 
            ref={cardReveal.ref}
            className={`glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-elegant gradient-border reveal-scale ${cardReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left - Features */}
              <div className={`space-y-4 sm:space-y-6 stagger-children ${cardReveal.isVisible ? 'visible' : ''}`}>
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:animate-bounce-subtle" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">Catálogo Completo</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Veja todos os produtos disponíveis com fotos e descrições detalhadas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:glow-gold transition-all duration-300">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:animate-sparkle" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">Melhor Custo-Benefício</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Produtos de qualidade com os melhores preços da região.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">Fácil Navegação</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Interface intuitiva para você encontrar o que precisa rapidamente.</p>
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="bg-gradient-to-br from-primary/10 via-gold/5 to-accent/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden group">
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer-bg opacity-50" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-pulse-glow">
                    <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-float" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    Pronto para explorar?
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    Acesse nossa vitrine virtual e descubra produtos incríveis para realçar sua beleza!
                  </p>
                  <Link
                    to="/vitrine"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-accent hover-glow transition-all duration-300 shadow-elegant hover:shadow-gold w-full group/btn"
                  >
                    <ShoppingBag size={18} className="sm:w-5 sm:h-5 group-hover/btn:animate-bounce-subtle" />
                    Acessar Vitrine
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p 
            ref={bottomReveal.ref}
            className={`text-center text-muted-foreground mt-6 sm:mt-8 text-sm sm:text-base reveal ${bottomReveal.isVisible ? 'visible' : ''}`}
          >
            💄 Atualizamos nossa vitrine frequentemente com novos produtos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
