
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* القسم الرئيسي */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* معلومات الشركة */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/98b71a41-0f99-416e-8f1d-f19be4cf83e9.png" 
                  alt="Davis Rogers Interiors" 
                  className="h-16 w-auto brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-bold font-cairo mb-4">ديفيس روجرز للتصميم الداخلي</h3>
              <p className="text-gray-300 font-tajawal text-lg leading-relaxed mb-6">
                نحول أحلامك إلى واقع من خلال تصاميم داخلية متميزة تجمع بين الأناقة والوظيفة. 
                نقدم حلول تصميم شاملة تناسب جميع الأذواق والميزانيات.
              </p>
              
              {/* معلومات الاتصال */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="font-tajawal text-gray-300">+966 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="font-tajawal text-gray-300">info@davisrogers.sa</span>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                  <span className="font-tajawal text-gray-300">
                    الرياض - حي العليا<br />
                    طريق الملك فهد، مجمع العليا التجاري
                  </span>
                </div>
              </div>

              {/* أيقونات التواصل الاجتماعي */}
              <div className="flex space-x-4 space-x-reverse">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Twitter className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>

            {/* روابط سريعة */}
            <div>
              <h4 className="font-cairo font-bold mb-6 text-xl">روابط سريعة</h4>
              <div className="space-y-4 text-gray-300 font-tajawal">
                <Link to="/" className="block hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  الرئيسية
                </Link>
                <Link to="/collections" className="block hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  أعمالنا
                </Link>
                <Link to="/about" className="block hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  حول الشركة
                </Link>
                <Link to="/contact" className="block hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  اتصل بنا
                </Link>
              </div>
            </div>

            {/* خدماتنا */}
            <div>
              <h4 className="font-cairo font-bold mb-6 text-xl">خدماتنا</h4>
              <div className="space-y-4 text-gray-300 font-tajawal">
                <div className="block hover:text-white transition-colors">التصميم الداخلي السكني</div>
                <div className="block hover:text-white transition-colors">التصميم التجاري</div>
                <div className="block hover:text-white transition-colors">تصميم الفيلات</div>
                <div className="block hover:text-white transition-colors">تصميم المكاتب</div>
                <div className="block hover:text-white transition-colors">التصميم الفندقي</div>
                <div className="block hover:text-white transition-colors">استشارات التصميم</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* القسم السفلي */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 font-tajawal text-center lg:text-right">
              <p>&copy; 2024 ديفيس روجرز للتصميم الداخلي. جميع الحقوق محفوظة.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 sm:space-x-reverse text-center">
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-white transition-colors font-tajawal"
              >
                الشروط والأحكام
              </Link>
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white transition-colors font-tajawal"
              >
                سياسة الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
