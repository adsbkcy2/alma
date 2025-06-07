
import { Link } from 'react-router-dom';

const CollectionGrid = () => {
  const collections = [
    {
      name: 'مودريان',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      link: '/collections/modrian'
    },
    {
      name: 'آرتكس',
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      link: '/collections/artex'
    },
    {
      name: 'كريستال',
      image: 'https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/collections/crystal'
    },
    {
      name: 'بريرا',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      link: '/collections/brera'
    },
    {
      name: 'فينيسيا',
      image: 'https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/collections/venezia'
    },
    {
      name: 'ميلانو',
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      link: '/collections/milano'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-cairo mb-4">
              استكشف مجموعتنا<br />
              المميزة
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-600 font-tajawal max-w-md">
              ديفيس روجرز تقدم مجموعة متنوعة من التصاميم المعاصرة، تصاميم أيقونية ومبتكرة تناسب جميع الأذواق
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link 
              key={index}
              to={collection.link}
              className="relative group cursor-pointer overflow-hidden rounded-2xl block"
            >
              <img 
                src={collection.image}
                alt={collection.name}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-white">
                <h3 className="text-xl font-bold font-cairo">{collection.name}</h3>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mt-2 group-hover:bg-gray-200 transition-colors">
                  <span className="text-black text-sm">←</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
