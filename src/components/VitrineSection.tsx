import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollReveal from '@/hooks/useScrollReveal';

const VitrineSection = () => {
  const headerReveal = useScrollReveal();
  const cardReveal = useScrollReveal();
  const bottomReveal = useScrollReveal();

  return (
    <section id="vitrine" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            ref={headerReveal.ref}
            className={`text-center mb-12 reveal ${headerReveal.isVisible ? 'visible' : ''}`}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <Sparkles size={18} className="animate-sparkle" />
              Novidade
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Conheça Nossa <span className="text-gradient">Vitrine Online</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore todos os nossos produtos de forma prática e descubra as melhores opções em cosméticos, perfumes, maquiagens e acessórios.
            </p>
          </div>

          {/* Content Card */}
          <div 
            ref={cardReveal.ref}
            className={`glass-card rounded-3xl p-8 md:p-12 shadow-elegant gradient-border reveal-scale ${cardReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Features */}
              <div className={`space-y-6 stagger-children ${cardReveal.isVisible ? 'visible' : ''}`}>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300">
                    <ShoppingBag className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Catálogo Completo</h3>
                    <p className="text-muted-foreground">Veja todos os produtos disponíveis com fotos e descrições detalhadas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:glow-gold transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-gold group-hover:animate-sparkle" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Preço Único</h3>
                    <p className="text-muted-foreground">Todos os produtos com o melhor custo-benefício da região.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Fácil Navegação</h3>
                    <p className="text-muted-foreground">Interface intuitiva para você encontrar o que precisa rapidamente.</p>
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="bg-gradient-to-br from-primary/10 via-gold/5 to-accent/10 rounded-2xl p-8 text-center relative overflow-hidden group">
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer-bg opacity-50" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <ShoppingBag className="w-10 h-10 text-primary animate-float" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Pronto para explorar?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Acesse nossa vitrine virtual e descubra produtos incríveis para realçar sua beleza!
                  </p>
                  <Link
                    to="/vitrine"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover-glow transition-all duration-300 shadow-elegant hover:shadow-gold w-full sm:w-auto group/btn"
                  >
                    <ShoppingBag size={20} className="group-hover/btn:animate-bounce-subtle" />
                    Acessar Vitrine
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p 
            ref={bottomReveal.ref}
            className={`text-center text-muted-foreground mt-8 reveal ${bottomReveal.isVisible ? 'visible' : ''}`}
          >
            💄 Atualizamos nossa vitrine frequentemente com novos produtos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
