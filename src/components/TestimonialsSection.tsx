
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'أحمد المطيري',
      position: 'مالك فيلا',
      content: 'تعامل رائع ومهني، فريق ديفيس روجرز حول منزلي إلى تحفة فنية. النتيجة فاقت كل توقعاتي.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'فاطمة السعد',
      position: 'صاحبة مطعم',
      content: 'تصميم مطعمي كان أكثر من رائع، العملاء معجبون بالديكور والأجواء الراقية.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'محمد العتيبي',
      position: 'مدير شركة',
      content: 'مكتبنا الجديد أصبح أكثر إنتاجية وجمالاً، تصميم يعكس هوية شركتنا بشكل مثالي.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-cairo mb-6">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 font-tajawal max-w-2xl mx-auto">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="mb-6">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl font-tajawal text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div>
              <h4 className="font-cairo font-bold text-xl mb-2">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-500 font-tajawal">
                {testimonials[currentTestimonial].position}
              </p>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial 
                    ? 'bg-black' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
