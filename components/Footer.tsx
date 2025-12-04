import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { FAQS, TELEGRAM_LINK, WHATSAPP_LINK, PHONE_DISPLAY, LOGO_URL, LOGO_TEXT, PHONE_LINK, NAV_ITEMS } from '../constants';
import { Plus, Minus, Send, Phone, Upload, Settings2 } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg md:text-xl font-heading font-medium transition-colors ${isOpen ? 'text-marsala' : 'text-navy group-hover:text-marsala'}`}>
            {question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 text-marsala ${isOpen ? 'rotate-180' : ''}`}>
           {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);
  
  // Independent Footer Logo State
  const [footerLogo, setFooterLogo] = useState<string | null>(null);
  const [logoHeight, setLogoHeight] = useState(40);
  const [invertLogo, setInvertLogo] = useState(true); // Default to white (inverted) for dark footer
  const [showControls, setShowControls] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setFooterLogo(url);
      setLogoError(false);
    }
  };

  const displayLogo = footerLogo || LOGO_URL;

  return (
    <>
      <Section id="faq" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Вопросы и Ответы</h2>
        <div className="max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </Section>

      <Section dark className="text-center relative">
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                Устали от текучки и собеседований, которые тратят ваше время?
            </h2>
            <p className="text-lg text-gray-400">
                Напишите мне. Я понимаю боли малого бизнеса, потому что сам работаю на результат, а не за оклад. Давайте найдем человека, который усилит вашу команду уже в этом месяце.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                <Button href={TELEGRAM_LINK} className="bg-[#2AABEE] hover:bg-[#229ED9] text-white border-none">
                    <Send className="w-5 h-5 mr-2" /> Telegram
                </Button>
                <Button href={WHATSAPP_LINK} className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none">
                    <Phone className="w-5 h-5 mr-2" /> WhatsApp
                </Button>
            </div>
        </div>
      </Section>

      <footer className="bg-[#05080d] text-gray-500 py-12 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Logo Area with Independent Controls */}
            <div 
                className="flex-shrink-0 relative group"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
            >
               <label className="cursor-pointer block">
                  <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
                  
                  {(footerLogo || !logoError) ? (
                      <img 
                        src={displayLogo} 
                        onError={() => setLogoError(true)}
                        alt={LOGO_TEXT} 
                        style={{ height: `${logoHeight}px` }}
                        className={`w-auto transition-all duration-300 opacity-90 ${invertLogo ? 'brightness-0 invert' : ''}`} 
                      />
                   ) : (
                      <span className="text-2xl font-heading font-bold text-white tracking-widest uppercase opacity-90">
                        {LOGO_TEXT}
                      </span>
                   )}
                   
                   {/* Hint for upload */}
                   {!footerLogo && (
                     <div className="absolute -bottom-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                       Нажми для загрузки
                     </div>
                   )}
               </label>

               {/* Independent Footer Controls */}
               {showControls && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white shadow-lg p-3 rounded-lg flex flex-col gap-3 animate-fade-in w-48 z-20">
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
                     <div 
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded"
                        onClick={() => setInvertLogo(!invertLogo)}
                    >
                        <span className="text-xs text-gray-600">Сделать белым</span>
                        <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${invertLogo ? 'bg-marsala' : 'bg-gray-300'}`}>
                            <div className={`w-3 h-3 bg-white rounded-full shadow transition-transform ${invertLogo ? 'translate-x-4' : 'translate-x-0'}`} />
                        </div>
                    </div>
                  </div>
               )}
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8">
                {NAV_ITEMS.map((item, idx) => (
                    <a key={idx} href={item.href} className="text-sm font-medium hover:text-marsala transition-colors uppercase tracking-wider">
                        {item.label}
                    </a>
                ))}
            </nav>

            <a href={`tel:${PHONE_LINK}`} className="text-white hover:text-marsala transition-colors font-medium">
                {PHONE_DISPLAY}
            </a>
        </div>
        <div className="text-center text-xs text-gray-700 mt-12">
            &copy; {new Date().getFullYear()} HR Maximov. All rights reserved.
        </div>
      </footer>
    </>
  );
};