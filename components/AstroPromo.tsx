import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ASTROBOT_LINK } from '../constants';
import { Sparkles, Moon, Star, Zap } from 'lucide-react';

export const AstroPromo: React.FC = () => {
  return (
    <Section id="astro" className="relative bg-[#0f1016] text-white overflow-hidden border-t border-white/5">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a103c] via-[#0f1016] to-[#0f1016] opacity-60 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm font-medium">
                <Sparkles size={14} />
                <span>HR-Астрология</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                Инструкция к сотруднику <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">по дате рождения</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
                Вы знаете Hard Skills сотрудника из резюме. Но знаете ли вы его истинную мотивацию? Энергопотенциал? Как он ведет себя в стрессе? 
                <br/><br/>
                Я разработал <strong>AstroBot</strong>, который покажет скрытые настройки вашей команды. Узнайте, как получить максимум результата от себя и сотрудников.
            </p>

            <ul className="space-y-4">
                {[
                    "Где деньги в вашей натальной карте?",
                    "Совместимость с бизнес-партнером",
                    "Скрытые таланты и риски выгорания"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-purple-200">
                        <Star className="w-5 h-5 text-purple-500 mr-3 fill-purple-500/20" />
                        {item}
                    </li>
                ))}
            </ul>

            <div className="pt-4">
                <Button href={ASTROBOT_LINK} className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-none shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                    <Zap className="w-5 h-5 mr-2 fill-white" />
                    Запустить AstroBot
                </Button>
            </div>
        </div>

        {/* Visual / Mockup Area */}
        <div className="relative flex justify-center items-center">
             <div className="relative w-full max-w-sm aspect-square">
                {/* Decorative Circles */}
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-12 border border-white/5 rounded-full"></div>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-indigo-900 rounded-full flex items-center justify-center shadow-2xl shadow-purple-900/50 backdrop-blur-md">
                        <Moon size={48} className="text-white fill-white/20" />
                    </div>
                </div>

                {/* Floating cards */}
                <div className="absolute top-10 right-0 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg animate-bounce duration-[3000ms]">
                    <div className="text-xs text-gray-400 mb-1">Анализ потенциала</div>
                    <div className="text-white font-bold">Лидер: 98%</div>
                </div>

                <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg animate-bounce duration-[4000ms]">
                    <div className="text-xs text-gray-400 mb-1">Зона роста</div>
                    <div className="text-white font-bold">Делегирование</div>
                </div>
             </div>
        </div>
      </div>
    </Section>
  );
};