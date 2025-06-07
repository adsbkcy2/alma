
import { useEffect, useState, useRef } from 'react';

interface StatItem {
  number: string;
  label: string;
  targetValue?: number;
}

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    products: 0,
    branches: 0,
    designers: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { number: '500+', label: 'منتجات', targetValue: 500 },
    { number: '20+', label: 'فروع', targetValue: 20 },
    { number: '50+', label: 'مصممين معتمدين', targetValue: 50 },
    { number: '1st', label: 'في المنطقة' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate products counter
      const animateCounter = (key: keyof typeof animatedValues, target: number, duration: number = 2000) => {
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentValue = Math.floor(target * progress);
          
          setAnimatedValues(prev => ({
            ...prev,
            [key]: currentValue
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        animate();
      };

      animateCounter('products', 500, 2500);
      animateCounter('branches', 20, 2000);
      animateCounter('designers', 50, 2200);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-cairo text-gray-900 mb-2">
              {animatedValues.products}+
            </div>
            <div className="text-gray-600 font-tajawal">
              منتجات
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-cairo text-gray-900 mb-2">
              {animatedValues.branches}+
            </div>
            <div className="text-gray-600 font-tajawal">
              فروع
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-cairo text-gray-900 mb-2">
              {animatedValues.designers}+
            </div>
            <div className="text-gray-600 font-tajawal">
              مصممين معتمدين
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-cairo text-gray-900 mb-2">
              1st
            </div>
            <div className="text-gray-600 font-tajawal">
              في المنطقة
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
