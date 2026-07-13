import React, { useState, useEffect } from 'react';
import tobi from '../../Assets/tobi.jpg';
import esther from '../../Assets/esther.jpg';
import majone from '../../Assets/majone.png';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const TESTIMONIALS = [
  {
    quote:
      'I was always scared to try trading online, but Majorlink changed that. Everything is clear, and their team is always ready to help. Whether you\'re in Cyprus or Nigeria, Majorlink is the real deal for crypto and gift card trades.',
    name: 'Caramel Plug',
    role: 'Influencer & Brand Ambassador',
    avatar: majone,
  },
  {
    quote:
      'Before Majorlink, I was lost in the crypto world. Now, buying and selling cryptocurrencies and gift cards has become so easy for me. Every time I use Majorlink, I know my money is safe. If you\'re in Cyprus or Nigeria, this is the platform to use!',
    name: 'Phoebe',
    role: 'Influencer & Brand Ambassador',
    avatar: esther,
  },
  {
    quote:
      "I've tried a few different places to buy and sell crypto and gift cards, but nothing beats Majorlink. It's easy to use, fast, and I always get the best rates. Big thumbs up from me, especially for my fellow Nigerians!",
    name: 'Daniel Adebisi',
    role: 'Medical Doctor',
    avatar: tobi,
  },
  {
    quote:
      "All my friends in Nigeria and Cyprus are using Majorlink, and now I know why! It's the simplest way to deal with cryptocurrencies and gift cards. No headaches, just smooth transactions every time.",
    name: 'Ngozi Chukwu',
    role: 'Business Woman',
    avatar: esther,
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full py-12 md:py-20 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: '#4B5DFF', minHeight: '420px' }}
      aria-label="Testimonials"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Large decorative quote mark */}
      <div
        className="text-white font-grifter select-none pointer-events-none mb-4"
        style={{ fontSize: 'clamp(48px, 10vw, 72px)', lineHeight: 1, opacity: 0.9 }}
        aria-hidden="true"
      >
        ❝
      </div>

      {/* Quote */}
      <blockquote
        className="text-center max-w-2xl mx-auto px-4 sm:px-0 font-archivo font-medium"
        style={{
          fontSize: 'clamp(18px, 4vw, 27px)',
          lineHeight: '180%',
          color: '#FAFAFA',
        }}
      >
        {t.quote}
      </blockquote>

      {/* Avatar + name */}
      <div className="flex items-center space-x-3 mt-10">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
        <div className="text-left">
          <p style={textStyle(TEXT_STYLES.testimonialName)}>{t.name}</p>
          {t.role && (
            <p className="opacity-70" style={textStyle(TEXT_STYLES.testimonialName)}>
              {t.role}
            </p>
          )}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center space-x-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className="rounded-full transition-all duration-300 focus:outline-none"
            style={{
              width: i === active ? 28 : 10,
              height: 6,
              background: i === active ? '#fff' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default TestimonialsSection;
