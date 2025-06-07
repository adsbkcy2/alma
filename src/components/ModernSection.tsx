
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ModernSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Modern Minimalist Living Room"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-tajawal text-gray-700">مجموعة معاصرة</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-cairo leading-tight">
              مودرن<br />
              بساطة
            </h2>
            <p className="text-gray-600 font-tajawal text-lg leading-relaxed">
              تصاميم تجمع بين البساطة والأناقة، مع اختيار دقيق للمواد والألوان لتناسب أسلوب حياتك العصري
            </p>

            {/* Small Gallery */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Link to="/collections" className="relative group cursor-pointer">
                <img 
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                  alt="Modern Chair"
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
              </Link>
              <Link to="/collections" className="relative">
                <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-colors">
                  <div className="text-center">
                    <h3 className="font-cairo font-bold text-lg">معرض</h3>
                    <p className="text-sm font-tajawal text-gray-600">من الأناقة</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSection;
