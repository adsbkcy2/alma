
const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'منتجات' },
    { number: '20+', label: 'فروع' },
    { number: '50+', label: 'مصممين معتمدين' },
    { number: '1st', label: 'في المنطقة' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-cairo text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-tajawal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
