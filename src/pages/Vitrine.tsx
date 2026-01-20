import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Disable body scroll when component mounts
    document.body.style.overflow = 'hidden';
    
    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header - 80px (h-20 = 5rem) */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Main Content - iframe */}
      {/* Height = 100vh - 80px (header) - 63px (badge) = calc(100vh - 143px) */}
      <main className="flex-1 w-full" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe 
          src="https://top10cosmeticos.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
          loading="lazy"
        />
      </main>
      
      {/* Badge Space - 63px */}
      <div className="h-[63px] flex-shrink-0 w-full" />
    </div>
  );
};

export default Vitrine;