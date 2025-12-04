import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CHANNEL_LINK } from '../constants';
import { Send, FileText, Mic, MessageCircle } from 'lucide-react';

export const TelegramPromo: React.FC = () => {
  return (
    <Section id="blog" className="bg-platinum">
       <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
         <div className="grid md:grid-cols-2">
            
            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 text-[#2AABEE] mb-6 font-bold tracking-wide uppercase text-sm">
                    <Send size={16} />
                    <span>Блог HR-Эксперта</span>
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">
                    Вся «внутрянка» найма и управления
                </h2>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                    В своем Telegram-канале я делюсь тем, что не рассказывают на курсах. Реальные разборы факапов, лайфхаки по найму за 0 рублей и психология управления.
                </p>

                <div className="space-y-4 mb-10">
                    <div className="flex items-start">
                        <div className="bg-blue-50 p-2 rounded-lg mr-4 text-[#2AABEE]">
                            <FileText size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-navy">Разборы кейсов</h4>
                            <p className="text-sm text-gray-500">Как мы наняли РОПа за 3 дня</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-blue-50 p-2 rounded-lg mr-4 text-[#2AABEE]">
                            <Mic size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-navy">Голосовые чаты</h4>
                            <p className="text-sm text-gray-500">Ответы на вопросы собственников</p>
                        </div>
                    </div>
                </div>

                <Button href={CHANNEL_LINK} className="bg-[#2AABEE] hover:bg-[#229ED9] text-white border-none w-full md:w-auto self-start">
                    Подписаться на канал
                </Button>
            </div>

            {/* Visual Side */}
            <div className="bg-[#f0f8ff] relative min-h-[300px] flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10" 
                     style={{ 
                        backgroundImage: 'radial-gradient(#2AABEE 2px, transparent 2px)', 
                        backgroundSize: '30px 30px' 
                     }}>
                </div>
                
                {/* Mockup of Channel Posts */}
                <div className="w-full max-w-xs space-y-4 relative z-10">
                    {/* Message 1 */}
                    <div className="bg-white p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-sm border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <p className="text-navy font-medium text-sm mb-2">🔥 Как понять, что кандидат врет на собеседовании?</p>
                        <p className="text-xs text-gray-500">3 неочевидных признака, которые выдают...</p>
                        <div className="mt-2 text-[10px] text-gray-400 text-right">14:02</div>
                    </div>

                    {/* Message 2 */}
                    <div className="bg-white p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-sm border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#2AABEE]">
                                <Mic size={14} />
                             </div>
                             <div className="h-1 bg-gray-100 flex-grow rounded-full overflow-hidden">
                                <div className="h-full bg-[#2AABEE] w-1/3"></div>
                             </div>
                             <span className="text-xs text-gray-500">04:20</span>
                        </div>
                        <p className="text-navy font-medium text-sm">Про выгорание собственника</p>
                         <div className="mt-1 text-[10px] text-gray-400 text-right">16:45</div>
                    </div>

                    {/* Subscribe Button Mock */}
                    <div className="text-center">
                        <div className="inline-block bg-[#2AABEE]/10 text-[#2AABEE] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                            JOIN CHANNEL
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </Section>
  );
};