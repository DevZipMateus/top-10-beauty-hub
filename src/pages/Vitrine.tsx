import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Disable body scroll when component mounts
    document.body.style.overflow = 'hidden';
    
    // Hide MonteSite badge on this page
    const montesiteBadge = document.getElementById('montesite-footer-badge');
    if (montesiteBadge) {
      montesiteBadge.style.display = 'none';
    }
    
    // Re-enable scroll and show badge when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      if (montesiteBadge) {
        montesiteBadge.style.display = '';
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header - solid, not fixed */}
      <div className="h-20 flex-shrink-0 w-full bg-background">
        <Header />
      </div>
      
      {/* Main Content - iframe fills remaining space */}
      <main className="flex-1 w-full">
        <iframe 
          src="https://top10cosmeticos.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
          loading="lazy"
        />
      </main>
    </div>
  );
};

export default Vitrine;