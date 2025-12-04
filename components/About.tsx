import React from 'react';
import { Section } from './ui/Section';
import { Eye, TrendingUp, Layers, UserX, UserCheck, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      {/* Positioning / Filter */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Почему я работаю только с малым бизнесом?</h2>
          <div className="w-24 h-1 bg-marsala mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Я осознанно не работаю с корпорациями и гигантами рынка. Там ищут «винтики» в систему, а решение принимается месяцами.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-platinum border border-gray-100 rounded-sm">
                <UserX className="h-10 w-10 text-marsala mb-4" />
                <h3 className="text-xl font-bold font-heading mb-3">Против токсичности</h3>
                <p className="text-gray-600">В малом бизнесе один токсичный сотрудник может развалить всю команду. Я ставлю фильтр на входе.</p>
            </div>
            <div className="p-8 bg-platinum border border-gray-100 rounded-sm">
                <TrendingUp className="h-10 w-10 text-marsala mb-4" />
                <h3 className="text-xl font-bold font-heading mb-3">Скорость решений</h3>
                <p className="text-gray-600">Важен прямой контакт с собственником. Без сложной иерархии и долгих согласований.</p>
            </div>
            <div className="p-8 bg-platinum border border-gray-100 rounded-sm">
                <UserCheck className="h-10 w-10 text-marsala mb-4" />
                <h3 className="text-xl font-bold font-heading mb-3">Люди-партнеры</h3>
                <p className="text-gray-600">Нахожу тех, кто вольется в вашу «семью» и усилит бизнес, а не просто займет стул в офисе.</p>
            </div>
        </div>
      </Section>

      {/* About Me Details */}
      <Section dark id="about">
         <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
               <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">Кто я и почему мне доверяют собственники?</h2>
               <p className="text-lg text-gray-300 leading-relaxed mb-6">
                 Мне 39 лет. Я объединяю в работе две полярности, которых нет у штатных рекрутеров. Я не просто закрываю вакансию, я ищу фундамент для вашего бизнеса.
               </p>
               <div className="mt-12 p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                  <p className="italic text-gray-400">"Каждый нанятый сотрудник — это ваша инвестиция, которая должна окупаться."</p>
               </div>
            </div>
            
            <div className="space-y-10">
                <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 bg-marsala/20 flex items-center justify-center rounded-sm text-marsala border border-marsala/30">
                            <Eye size={24} className="text-white" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-2 text-white">Рентгеновское зрение (Профайлинг)</h3>
                        <p className="text-gray-400">Я оцениваю не только Hard Skills, но и характер. За 15 минут вижу то, что кандидат скрывает: мотивацию, конфликтность, лояльность.</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 bg-marsala/20 flex items-center justify-center rounded-sm text-marsala border border-marsala/30">
                            <TrendingUp size={24} className="text-white" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-2 text-white">Бизнес-мышление (Результат)</h3>
                        <p className="text-gray-400">Я не про «поговорить». Я про цифры, сроки и KPI. Мой подход — это стратегия.</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 bg-marsala/20 flex items-center justify-center rounded-sm text-marsala border border-marsala/30">
                            <Layers size={24} className="text-white" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-2 text-white">Масштаб (Стратегия)</h3>
                        <p className="text-gray-400">Помогаю строить команды, которые растут вместе с бизнесом. Человек должен стать опорой на годы.</p>
                    </div>
                </div>
            </div>
         </div>
      </Section>

      {/* Target Audience / Niches */}
      <Section>
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Вакансии, где личность решает всё</h2>
            <p className="mt-4 text-gray-500">Сложные люди для важных задач</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Руководители", subtitle: "РОП, Директора", desc: "Лидерство, ответственность, умение держать удар.", icon: Shield },
                { title: "Продажи", subtitle: "B2B / B2C", desc: "Эмпатия, драйв, умение слышать клиента, а не «впаривать».", icon: TrendingUp },
                { title: "Маркетинг & PR", subtitle: "Креатив", desc: "Гибкость ума, понимание психологии покупателя.", icon: Eye },
                { title: "Бизнес-ассистенты", subtitle: "Right hand", desc: "Абсолютная лояльность, стрессоустойчивость, «химия».", icon: UserCheck },
            ].map((item, idx) => (
                <div key={idx} className="group p-6 bg-white border border-gray-200 hover:border-marsala transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-slate-400 group-hover:text-marsala mb-4 transition-colors" />
                    <h3 className="text-lg font-bold font-heading mb-1">{item.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-marsala mb-3">{item.subtitle}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};