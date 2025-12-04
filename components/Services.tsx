import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { SERVICES, CASES, TELEGRAM_LINK } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <>
      {/* Services Cards */}
      <Section id="services" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Услуги</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex flex-col h-full p-8 bg-platinum border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold font-heading mb-4 text-navy">{service.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm font-medium text-gray-700">
                    <span className="w-1.5 h-1.5 bg-marsala rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button href={TELEGRAM_LINK} variant="primary">Узнать стоимость услуг</Button>
        </div>
      </Section>

      {/* Methodology - Dark Section */}
      <Section dark className="border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Как я нахожу лучших, пока другие перебирают резюме</h2>
                <div className="h-1 w-20 bg-marsala mb-8"></div>
            </div>
            <div className="space-y-8">
                <div className="relative pl-8 border-l border-marsala/30">
                    <span className="absolute -left-1.5 top-0 w-3 h-3 bg-marsala rounded-full"></span>
                    <h3 className="text-xl font-bold text-white mb-2">1. Погружение в ДНК бизнеса</h3>
                    <p className="text-gray-400">Прежде чем искать, я изучаю вас. Мне нужно понять «химию» руководителя и ценности компании. Я ищу пазл, который идеально встанет в вашу картину.</p>
                </div>
                <div className="relative pl-8 border-l border-marsala/30">
                    <span className="absolute -left-1.5 top-0 w-3 h-3 bg-marsala rounded-full"></span>
                    <h3 className="text-xl font-bold text-white mb-2">2. Жесткий фильтр</h3>
                    <p className="text-gray-400">Я отсеиваю до 90% кандидатов на этапе телефонного интервью. До вас доходят только 2-3 финалиста, готовых к работе.</p>
                </div>
                <div className="relative pl-8 border-l border-marsala/30">
                    <span className="absolute -left-1.5 top-0 w-3 h-3 bg-marsala rounded-full"></span>
                    <h3 className="text-xl font-bold text-white mb-2">3. Адаптация и Гарантия</h3>
                    <p className="text-gray-400">Я не бросаю вас после подписания оффера. Если кандидат не подойдет — я найду замену бесплатно.</p>
                </div>
            </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="cases" className="bg-platinum">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Реальные задачи, которые я решил</h2>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto">
            {CASES.map((item, index) => (
                <div key={index} className="bg-white p-8 md:p-10 shadow-sm border-l-4 border-marsala flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
                        <h3 className="text-xl font-bold font-heading text-navy mb-2">{item.title}</h3>
                        <div className="text-sm font-bold uppercase tracking-wider text-marsala bg-marsala/5 py-1 px-3 w-fit rounded-sm mb-4">
                            {item.role}
                        </div>
                    </div>
                    <div className="md:w-2/3 space-y-4">
                        <div>
                            <span className="font-bold text-navy block mb-1">Проблема:</span>
                            <p className="text-gray-600">{item.problem}</p>
                        </div>
                        <div>
                            <span className="font-bold text-navy block mb-1">Решение:</span>
                            <p className="text-gray-600">{item.solution}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-sm border border-green-100">
                            <span className="font-bold text-green-800 block mb-1 flex items-center">
                                <Check size={16} className="mr-2" /> Результат:
                            </span>
                            <p className="text-green-700 font-medium">{item.result}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};