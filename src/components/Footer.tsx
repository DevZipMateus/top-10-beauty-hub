import { Heart, Instagram, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Top 10 Cosméticos" className="h-16 sm:h-20 w-auto mb-3 sm:mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 leading-relaxed text-sm sm:text-base">
              Sua loja de cosméticos, perfumaria, maquiagens e acessórios com preços acessíveis. Beleza ao alcance de todos em Sorocaba!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4">Navegação</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm sm:text-base">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm sm:text-base">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm sm:text-base">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm sm:text-base">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Av. Paraná, 3669 - Cajuru do Sul, Sorocaba - SP</span>
              </li>
              <li>
                <a
                  href="mailto:top10cosmeticossorocaba@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-primary-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base break-all">top10cosmeticossorocaba@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/top10cosmeticossorocaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-primary-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">@top10cosmeticossorocaba</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-primary-foreground/50 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Top 10 Cosméticos. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1 text-primary-foreground/50 text-xs sm:text-sm">
              Feito com <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" /> em Sorocaba
            </p>
          </div>
          <p className="text-center text-primary-foreground/40 text-xs mt-3 sm:mt-4">
            CNPJ: 63.592.990/0001-14
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;