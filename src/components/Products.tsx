import { Sparkles, Palette, Droplets, Gem } from 'lucide-react';
import productsBg from '@/assets/products-bg.jpg';

const Products = () => {
  const categories = [
    {
      icon: Palette,
      title: 'Maquiagens',
      description: 'Batons, sombras, bases, corretivos, máscaras e muito mais para realçar sua beleza',
      color: 'primary',
    },
    {
      icon: Droplets,
      title: 'Perfumaria',
      description: 'Fragrâncias exclusivas e marcantes para todos os gostos e ocasiões',
      color: 'gold',
    },
    {
      icon: Sparkles,
      title: 'Cosméticos',
      description: 'Produtos para cuidados com pele, cabelo e corpo de alta qualidade',
      color: 'accent',
    },
    {
      icon: Gem,
      title: 'Acessórios',
      description: 'Pincéis, esponjas, organizadores e tudo para sua rotina de beleza',
      color: 'primary',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
      gold: { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold/20' },
      accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="produtos" className="relative py-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${productsBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
            <Sparkles size={16} />
            Nosso catálogo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos produtos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo a preço único! Descubra nossa variedade de produtos de beleza selecionados com carinho para você.
          </p>
        </div>

        {/* Price Highlight */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-gold/5 to-accent/5 rounded-3xl" />
          <div className="relative bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 text-center shadow-elegant">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">Diferencial exclusivo</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Todos os produtos por <span className="text-gradient">preço único!</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Na Top 10 Cosméticos você encontra qualidade e variedade sem surpresas no caixa. Beleza acessível para todos!
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`group bg-card/90 backdrop-blur-sm rounded-2xl p-8 border ${colors.border} hover:shadow-elegant transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex p-4 ${colors.bg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5515999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent transition-all duration-300 shadow-elegant"
          >
            <Sparkles size={20} />
            Visite nossa loja
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;