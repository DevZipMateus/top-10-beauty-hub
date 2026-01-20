import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import whatsappIcon from '@/assets/whatsapp-icon.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início', isAnchor: true },
    { href: '#sobre', label: 'Sobre', isAnchor: true },
    { href: '#produtos', label: 'Produtos', isAnchor: true },
    { href: '/vitrine', label: 'Vitrine', isAnchor: false },
    { href: '#contato', label: 'Contato', isAnchor: true },
  ];

  const scrollToSection = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.location.href = '/' + href;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elegant'
          : 'bg-background/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Top 10 Cosméticos" className="h-12 sm:h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group text-sm xl:text-base"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group text-sm xl:text-base"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
            <a
              href="https://wa.me/5515999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-medium hover:bg-accent transition-colors duration-200 shadow-elegant text-sm xl:text-base"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              Fale conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium py-3 px-4 text-left transition-colors duration-200 rounded-lg"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium py-3 px-4 text-left transition-colors duration-200 rounded-lg"
                >
                  {link.label}
                </Link>
              )
            ))}
            <a
              href="https://wa.me/5515999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-center hover:bg-accent transition-colors duration-200 mt-3"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;