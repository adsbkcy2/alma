
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold font-cairo mb-6 animate-fade-in">
          تصميم داخلي راقي
        </h1>
        <p className="text-lg md:text-xl font-tajawal mb-8 max-w-2xl mx-auto leading-relaxed">
          اكتشف مجموعتنا الفريدة من الأثاث العصري والفاخر الذي يجمع بين التصميم المعاصر والجودة العالية
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/collections">
            <Button 
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-tajawal"
              size="lg"
            >
              أعمالنا
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-tajawal"
              size="lg"
            >
              <span className="text-black font-bold">اتصل بنا</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
