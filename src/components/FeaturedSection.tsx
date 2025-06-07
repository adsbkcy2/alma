
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="text-sm text-gray-500 font-tajawal">أناقة • جودة عالية</div>
            <h2 className="text-4xl md:text-5xl font-bold font-cairo leading-tight">
              أسلوب عصري<br />
              سحر خالد
            </h2>
            <p className="text-gray-600 font-tajawal text-lg leading-relaxed">
              اكتشف مجموعة ديفيس روجرز الحصرية لعام 2024، تتميز بتصاميم مبتكرة وأناقة استثنائية. مع الالتزام بالجودة العالية والحرفية المتقنة، نقدم لك أثاثاً يعكس ذوقك الرفيع.
            </p>
            <Link to="/collections">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 font-tajawal">
                اكتشف المزيد
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Modern Living Space"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
