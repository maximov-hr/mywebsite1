import React, { useState } from 'react';
import { Button } from './ui/Button';
import { HERO_FALLBACK_URL, WHATSAPP_LINK } from '../constants';
import { ArrowRight, CheckCircle2, Upload, ZoomIn, MoveVertical } from 'lucide-react';
// @ts-ignore
import heroImage from '../photo.jpg';

export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(heroImage || HERO_FALLBACK_URL);
  
  // Image adjustments
  const [zoom, setZoom] = useState(1);
  const [positionY, setPositionY] = useState(50); // 50% is center
  const [isCustomImg, setIsCustomImg] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgSrc(url);
      setIsCustomImg(true);
      // Reset defaults on new upload
      setZoom(1);
      setPositionY(50);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-navy text-white overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 pt-10 lg:pt-0 animate-fade-in-up order-2 lg:order-1 pb-12 lg:pb-0">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-marsala animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-gray-200">HR-ПАРТНЕР</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight">
            Подбираю <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">единомышленников,</span> <br/>
            которые усилят ваш бизнес
          </h1>
          
          <div className="space-y-4 max-w-lg text-lg text-gray-300 leading-relaxed font-light">
            <p>
              Системный подход, глубокий психологический профайлинг и гарантия результата.
            </p>
            <p>
               <span className="text-white font-medium border-b border-marsala/50">Специализация:</span> Продажи, Маркетинг, Управление.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button href={WHATSAPP_LINK} variant="white">
              Обсудить вакансию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="pt-8 flex flex-col space-y-3 text-sm text-gray-400">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="h-5 w-5 text-marsala" />
              <span>Без бюрократии и корпоративной воды</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="h-5 w-5 text-marsala" />
              <span>Прямой контакт с экспертом</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[50vh] lg:h-[90vh] flex justify-center lg:justify-end items-end order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent z-10 lg:from-navy lg:via-transparent pointer-events-none"></div>
            
            <div className="relative z-0 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto h-full flex items-end overflow-hidden lg:rounded-t-2xl">
              {/* Image Frame/Backdrop */}
              <div className="absolute top-10 right-10 w-full h-full border-2 border-white/5 hidden lg:block rounded-tr-3xl pointer-events-none"></div>
              
              <div className="relative w-full h-full">
                <img 
                  src={imgSrc} 
                  onError={() => setImgSrc(HERO_FALLBACK_URL)}
                  alt="Дмитрий Максимов HR" 
                  style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: 'top center',
                      objectPosition: `center ${positionY}%`
                  }}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-105 rounded-t-2xl lg:rounded-none transition-transform duration-100 ease-out"
                />
                
                {/* Controls Overlay (Visible on Hover) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center gap-6 p-6 backdrop-blur-sm rounded-t-2xl lg:rounded-none">
                  
                  {/* Upload Button */}
                  <label className="cursor-pointer flex flex-col items-center group/btn">
                    <div className="bg-white/10 p-3 rounded-full mb-2 group-hover/btn:bg-marsala transition-colors">
                        <Upload className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-white font-bold text-sm uppercase tracking-wider">Загрузить фото</span>
                    <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleFileChange}
                    />
                  </label>

                  {/* Sliders (Only if Custom Image or to adjust default) */}
                  <div className="w-full max-w-xs space-y-4 bg-white/10 p-4 rounded-lg border border-white/10">
                      <div className="space-y-1">
                          <div className="flex justify-between text-xs text-gray-300">
                              <span className="flex items-center gap-1"><ZoomIn size={12}/> Масштаб</span>
                              <span>{Math.round(zoom * 100)}%</span>
                          </div>
                          <input 
                            type="range" 
                            min="1" 
                            max="2" 
                            step="0.05"
                            value={zoom}
                            onChange={(e) => setZoom(parseFloat(e.target.value))}
                            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-marsala"
                          />
                      </div>

                      <div className="space-y-1">
                          <div className="flex justify-between text-xs text-gray-300">
                              <span className="flex items-center gap-1"><MoveVertical size={12}/> Позиция (Вверх/Вниз)</span>
                          </div>
                          <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={positionY}
                            onChange={(e) => setPositionY(Number(e.target.value))}
                            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-marsala"
                          />
                      </div>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};