import { Target, Eye, Heart, History, Sparkles, Shield, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Heart, title: 'Acessibilidade', desc: 'Beleza ao alcance de todos' },
    { icon: Shield, title: 'Qualidade', desc: 'Produtos selecionados' },
    { icon: Users, title: 'Inclusão', desc: 'Valorizamos a diversidade' },
    { icon: TrendingUp, title: 'Inovação', desc: 'Sempre atualizados' },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
            <Sparkles size={16} />
            Conheça a Top 10
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre a empresa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sua loja de cosméticos, perfumaria, maquiagens e acessórios a preço único
          </p>
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <History className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Nossa história</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Top 10 Cosméticos surge após uma pesquisa de mercado identificando uma carência da região na oferta de cosméticos, maquiagens, acessórios e perfumaria.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Inaugurada em <span className="text-primary font-semibold">13 de dezembro de 2025</span>, a Top 10 surge para fortalecer a região atuando nas necessidades da população local, oferecendo produtos de qualidade a preço único.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transform rotate-3" />
            <div className="relative bg-secondary rounded-3xl p-8 shadow-elegant">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <span className="block text-4xl font-display font-bold text-primary">2025</span>
                  <span className="text-sm text-muted-foreground">Fundação</span>
                </div>
                <div className="text-center p-4">
                  <span className="block text-4xl font-display font-bold text-gold">100%</span>
                  <span className="text-sm text-muted-foreground">Preço único</span>
                </div>
                <div className="text-center p-4">
                  <span className="block text-4xl font-display font-bold text-accent">+1000</span>
                  <span className="text-sm text-muted-foreground">Produtos</span>
                </div>
                <div className="text-center p-4">
                  <span className="block text-4xl font-display font-bold text-primary">5★</span>
                  <span className="text-sm text-muted-foreground">Avaliação</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:border-primary/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer produtos de cosméticos, perfumaria, maquiagem e acessórios com preço único, qualidade e variedade, proporcionando uma experiência de compra acessível, prática e confiável, valorizando a autoestima e o bem-estar de nossos clientes.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:border-gold/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gold/10 rounded-xl">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Visão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como referência em loja de preço único no segmento de beleza, destacando-se pela diversidade de produtos, excelência no atendimento e compromisso com a satisfação do cliente, tornando o cuidado pessoal acessível a todos.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold text-foreground">Nossos valores</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-secondary rounded-full mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;