import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

// Компонент карточки результата
function ResultCard({ text, delay }: { text: string; delay: string }) {
  return (
    <li 
      className="flex items-center gap-3 text-emerald-700 bg-white p-6 rounded-lg shadow-sm 
        hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      style={{ 
        animation: 'slideRight 0.5s ease-out forwards',
        animationDelay: delay 
      }}
    >
      <ArrowRight className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <span className="font-medium">{text}</span>
    </li>
  );
}

// Компонент Stor
function Stor() {
  return (
    <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
      <img 
        src="https://sun9-43.userapi.com/impg/HfPo7K_9AdI_h9xQg6Y_kPifvpllAko9nO7j2g/IJhV7c8S08U.jpg?size=1024x1024&quality=96&sign=b4f568047a9dc8e369b49396d2145d88&type=album"
        alt="Vitacaps product"
        className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
        <div className="p-12 text-white" style={{ animation: 'fadeIn 1s ease-out forwards' }}>
          <h1 
            className="text-5xl font-bold mb-6 leading-tight"
            style={{ animation: 'slideUp 1s ease-out forwards' }}
          >
            Секрет, Который Помог Мне Забыть о Геморрое Раз и Навсегда!
          </h1>
          <div 
            className="flex items-center gap-3"
            style={{ animation: 'slideUp 1s ease-out forwards 200ms' }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" />
              ))}
            </div>
            <span className="text-yellow-400 font-semibold text-lg">Реальная история</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stor;
