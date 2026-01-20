import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <Sparkles size={18} />
              Novidade
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Conheça Nossa Vitrine Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore todos os nossos produtos de forma prática e descubra as melhores opções em cosméticos, perfumes, maquiagens e acessórios.
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Catálogo Completo</h3>
                    <p className="text-muted-foreground">Veja todos os produtos disponíveis com fotos e descrições detalhadas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Preço Único</h3>
                    <p className="text-muted-foreground">Todos os produtos com o melhor custo-benefício da região.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Fácil Navegação</h3>
                    <p className="text-muted-foreground">Interface intuitiva para você encontrar o que precisa rapidamente.</p>
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="bg-gradient-to-br from-primary/10 via-gold/5 to-accent/10 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Pronto para explorar?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Acesse nossa vitrine virtual e descubra produtos incríveis para realçar sua beleza!
                </p>
                <Link
                  to="/vitrine"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent transition-all duration-300 shadow-elegant hover:shadow-gold w-full sm:w-auto"
                >
                  <ShoppingBag size={20} />
                  Acessar Vitrine
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-muted-foreground mt-8">
            💄 Atualizamos nossa vitrine frequentemente com novos produtos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
