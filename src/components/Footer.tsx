import { Heart, Instagram, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Top 10 Cosméticos" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 leading-relaxed">
              Sua loja de preço único em cosméticos, perfumaria, maquiagens e acessórios. Beleza ao alcance de todos em Sorocaba!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-primary transition-colors duration-200">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-primary transition-colors duration-200">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-primary-foreground/70 hover:text-primary transition-colors duration-200">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-primary transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Av. Paraná, 3669 - Cajuru do Sul, Sorocaba - SP</span>
              </li>
              <li>
                <a
                  href="mailto:Inery66@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  Inery66@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/top10cosmeticossorocaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                  @top10cosmeticossorocaba
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Top 10 Cosméticos. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1 text-primary-foreground/50 text-sm">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> em Sorocaba
            </p>
          </div>
          <p className="text-center text-primary-foreground/40 text-xs mt-4">
            CNPJ: 63.592.990/0001-14
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;