import { Sparkles } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';
import productsBg from '@/assets/products-bg.jpg';
import categoryMakeup from '@/assets/category-makeup.jpg';
import categoryPerfume from '@/assets/category-perfume.jpg';
import categoryCosmetics from '@/assets/category-cosmetics.jpg';
import categoryAccessories from '@/assets/category-accessories.jpg';
const Products = () => {
  const headerReveal = useScrollReveal();
  const priceReveal = useScrollReveal();
  const categoriesReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  const categories = [{
    image: categoryMakeup,
    title: 'Maquiagens',
    description: 'Batons, sombras, bases, corretivos, máscaras e muito mais para realçar sua beleza',
    color: 'primary'
  }, {
    image: categoryPerfume,
    title: 'Perfumaria',
    description: 'Fragrâncias exclusivas e marcantes para todos os gostos e ocasiões',
    color: 'gold'
  }, {
    image: categoryCosmetics,
    title: 'Cosméticos',
    description: 'Produtos para cuidados com pele, cabelo e corpo de alta qualidade',
    color: 'accent'
  }, {
    image: categoryAccessories,
    title: 'Acessórios',
    description: 'Pincéis, esponjas, organizadores e tudo para sua rotina de beleza',
    color: 'primary'
  }];
  const getColorClasses = (color: string) => {
    const colors: Record<string, {
      bg: string;
      text: string;
      border: string;
      glow: string;
    }> = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/30',
        glow: 'hover:glow-primary'
      },
      gold: {
        bg: 'bg-gold/10',
        text: 'text-gold',
        border: 'border-gold/30',
        glow: 'hover:glow-gold'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent/30',
        glow: 'hover:glow-primary'
      }
    };
    return colors[color] || colors.primary;
  };
  return <section id="produtos" className="relative py-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: `url(${productsBg})`
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headerReveal.ref} className={`text-center mb-16 reveal ${headerReveal.isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
            <Sparkles size={16} className="animate-sparkle" />
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
        <div ref={priceReveal.ref} className={`relative mb-16 reveal-scale ${priceReveal.isVisible ? 'visible' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-gold/5 to-accent/5 rounded-3xl shimmer-bg" />
          <div className="relative glass-card rounded-3xl p-8 md:p-12 text-center shadow-elegant gradient-border">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6 animate-bounce-subtle">
              <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
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

        {/* Categories Grid with Images */}
        <div ref={categoriesReveal.ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${categoriesReveal.isVisible ? 'visible' : ''}`}>
          {categories.map((category, index) => {
          const colors = getColorClasses(category.color);
          return <div key={index} className={`group glass-card rounded-2xl overflow-hidden border ${colors.border} ${colors.glow} hover-lift transition-all duration-500`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-bg" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>;
        })}
        </div>

        {/* CTA */}
        
      </div>
    </section>;
};
export default Products;