import { Target, Eye, Heart, History, Sparkles, Shield, Users, TrendingUp } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';
import aboutBg from '@/assets/about-bg.jpg';
import storeInterior from '@/assets/store-interior.jpg';

const About = () => {
  const headerReveal = useScrollReveal();
  const historyReveal = useScrollReveal();
  const imageReveal = useScrollReveal();
  const missionReveal = useScrollReveal();
  const visionReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();

  const values = [
    { icon: Heart, title: 'Acessibilidade', desc: 'Beleza ao alcance de todos' },
    { icon: Shield, title: 'Qualidade', desc: 'Produtos selecionados' },
    { icon: Users, title: 'Inclusão', desc: 'Valorizamos a diversidade' },
    { icon: TrendingUp, title: 'Inovação', desc: 'Sempre atualizados' },
  ];

  return (
    <section id="sobre" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${aboutBg})` }}
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
            Conheça a Top 10
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Sobre a empresa
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Sua loja de cosméticos, perfumaria, maquiagens e acessórios a preço único
          </p>
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <div 
            ref={historyReveal.ref}
            className={`order-2 lg:order-1 reveal-left ${historyReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl backdrop-blur-sm hover-glow transition-all duration-300">
                <History className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">Nossa história</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              A Top 10 Cosméticos surge após uma pesquisa de mercado identificando uma carência da região na oferta de cosméticos, maquiagens, acessórios e perfumaria.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Inaugurada em <span className="text-primary font-semibold">13 de dezembro de 2025</span>, a Top 10 surge para fortalecer a região atuando nas necessidades da população local, oferecendo produtos de qualidade a preço único.
            </p>
          </div>
          <div 
            ref={imageReveal.ref}
            className={`order-1 lg:order-2 relative reveal-right ${imageReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl sm:rounded-3xl blur-2xl transform rotate-3 animate-pulse-glow" />
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant border border-border group">
              <img 
                src={storeInterior} 
                alt="Interior da loja Top 10 Cosméticos" 
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center bg-background/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 hover-lift">
                    <span className="block text-xl sm:text-2xl font-display font-bold text-primary">2025</span>
                    <span className="text-xs text-muted-foreground">Fundação</span>
                  </div>
                  <div className="text-center bg-background/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 hover-lift">
                    <span className="block text-xl sm:text-2xl font-display font-bold text-gold">100%</span>
                    <span className="text-xs text-muted-foreground">Preço único</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Mission */}
          <div 
            ref={missionReveal.ref}
            className={`glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-elegant border border-border hover:border-primary/30 hover-glow transition-all duration-300 reveal-left ${missionReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl animate-bounce-subtle">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Oferecer produtos de cosméticos, perfumaria, maquiagem e acessórios com preço único, qualidade e variedade, proporcionando uma experiência de compra acessível, prática e confiável, valorizando a autoestima e o bem-estar de nossos clientes.
            </p>
          </div>

          {/* Vision */}
          <div 
            ref={visionReveal.ref}
            className={`glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-elegant border border-border hover:border-gold/30 hover-glow transition-all duration-300 reveal-right ${visionReveal.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2.5 sm:p-3 bg-gold/10 rounded-xl animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">Visão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Ser reconhecida como referência em loja de preço único no segmento de beleza, destacando-se pela diversidade de produtos, excelência no atendimento e compromisso com a satisfação do cliente, tornando o cuidado pessoal acessível a todos.
            </p>
          </div>
        </div>

        {/* Values */}
        <div 
          ref={valuesReveal.ref}
          className={`reveal ${valuesReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">Nossos valores</h3>
          </div>
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children ${valuesReveal.isVisible ? 'visible' : ''}`}>
            {values.map((value, index) => (
              <div
                key={index}
                className="group glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border border-border hover:border-primary/30 hover-lift transition-all duration-300"
              >
                <div className="inline-flex p-3 sm:p-4 bg-secondary rounded-full mb-3 sm:mb-4 group-hover:bg-primary/10 group-hover:glow-primary transition-all duration-300">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:animate-sparkle" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{value.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
