import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { AstroPromo } from './components/AstroPromo';
import { TelegramPromo } from './components/TelegramPromo';
import { Footer } from './components/Footer';
import { LOGO_URL, LOGO_TEXT, NAV_ITEMS, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from './constants';
import { Menu, X, Settings2, Moon, Sun } from 'lucide-react';
import { Button } from './components/ui/Button';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  
  // Logo sizing & color state
  const [logoHeight, setLogoHeight] = useState(48);
  const [invertLogo, setInvertLogo] = useState(true); // Default to inverted (white) for dark background
  const [showLogoControls, setShowLogoControls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setCustomLogo(url);
      setLogoError(false);
    }
  };

  // Logic: Invert only if user wants it AND we are on the dark background (not scrolled)
  // If scrolled (white background), we typically want the original dark logo.
  const shouldApplyInvert = invertLogo && !isScrolled;

  return (
    <main className="min-h-screen relative font-sans">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo with Upload Feature */}
          <div 
            className="relative group z-50 flex items-center gap-4"
            onMouseEnter={() => setShowLogoControls(true)}
            onMouseLeave={() => setShowLogoControls(false)}
          >
            <label className="cursor-pointer block relative">
              <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              
              {(customLogo || (!logoError && LOGO_URL)) ? (
                <img 
                  src={customLogo || LOGO_URL} 
                  onError={() => setLogoError(true)}
                  alt={LOGO_TEXT} 
                  style={{ height: `${logoHeight}px` }}
                  className={`w-auto transition-all duration-300 ${shouldApplyInvert ? 'brightness-0 invert' : ''} ${!isScrolled && !customLogo && !shouldApplyInvert ? 'brightness-0 invert' : ''}`} 
                />
              ) : (
                 <span className={`text-xl md:text-2xl font-heading font-bold tracking-widest uppercase transition-colors duration-300 ${
                   isScrolled ? 'text-navy' : 'text-white'
                 }`}>
                   {LOGO_TEXT}
                 </span>
              )}

              {/* Tooltip for upload */}
              {!customLogo && (
                <div className="absolute -bottom-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-navy text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                  Нажми, чтобы загрузить лого
                </div>
              )}
            </label>

            {/* Logo Controls (Visible on Hover if Custom Logo is set) */}
            {customLogo && showLogoControls && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg p-3 rounded-lg border border-gray-100 flex flex-col gap-3 animate-fade-in w-48">
                    
                    {/* Size Control */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Размер</span>
                        <input 
                            type="range" 
                            min="20" 
                            max="100" 
                            value={logoHeight} 
                            onChange={(e) => setLogoHeight(Number(e.target.value))}
                            className="w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-marsala"
                        />
                    </div>

                    {/* Color Toggle */}
                    <div 
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded"
                        onClick={() => setInvertLogo(!invertLogo)}
                    >
                        <span className="text-xs text-gray-600">Сделать белым</span>
                        <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${invertLogo ? 'bg-marsala' : 'bg-gray-300'}`}>
                            <div className={`w-3 h-3 bg-white rounded-full shadow transition-transform ${invertLogo ? 'translate-x-4' : 'translate-x-0'}`} />
                        </div>
                    </div>
                    <div className="text-[10px] text-gray-400 leading-tight">
                        (Только для темного фона)
                    </div>
                </div>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-navy hover:text-marsala' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact/CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href={`tel:${PHONE_LINK}`} 
              className={`font-heading font-bold transition-colors duration-300 ${
                isScrolled ? 'text-navy hover:text-marsala' : 'text-white hover:text-gray-200'
              }`}
            >
              {PHONE_DISPLAY}
            </a>
            <Button 
              href={WHATSAPP_LINK} 
              variant={isScrolled ? 'primary' : 'white'}
              className="!py-2.5 !px-6 !text-sm"
            >
               Связаться
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden relative z-50 transition-colors ${isScrolled || mobileMenuOpen ? 'text-navy' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} className={mobileMenuOpen ? "text-white" : ""} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in lg:hidden">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-2xl font-heading font-bold text-white hover:text-marsala transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <a href={`tel:${PHONE_LINK}`} className="text-gray-300 text-xl font-medium">
              {PHONE_DISPLAY}
            </a>
            <Button href={WHATSAPP_LINK} onClick={() => setMobileMenuOpen(false)}>
              Написать в WhatsApp
            </Button>
          </div>
        )}
      </header>

      <Hero />
      <About />
      <Services />
      <AstroPromo />
      <TelegramPromo />
      <Footer />
      
    </main>
  );
}

export default App;