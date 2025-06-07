
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // محاكاة نتائج البحث
      const mockResults = [
        'فيلا عصرية - الرياض',
        'شقة فاخرة - جدة',
        'مكتب إداري - الدمام',
        'مطعم فاخر - مكة'
      ].filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(mockResults);
    }
  };

  const isHomePage = location.pathname === '/';
  const headerTextColor = isHomePage 
    ? (isScrolled ? 'text-gray-700' : 'text-white')
    : 'text-gray-700';

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? (isScrolled 
              ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' 
              : 'bg-transparent')
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/98b71a41-0f99-416e-8f1d-f19be4cf83e9.png" 
                alt="Davis Rogers Interiors" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link 
                to="/" 
                className={`transition-colors font-tajawal hover:opacity-80 ${headerTextColor}`}
              >
                الرئيسية
              </Link>
              <Link 
                to="/collections" 
                className={`transition-colors font-tajawal hover:opacity-80 ${headerTextColor}`}
              >
                أعمالنا
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors font-tajawal hover:opacity-80 ${headerTextColor}`}
              >
                حول
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors font-tajawal hover:opacity-80 ${headerTextColor}`}
              >
                اتصل بنا
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden md:flex"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className={`h-5 w-5 ${headerTextColor}`} />
              </Button>
              
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className={`h-5 w-5 ${headerTextColor}`} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white">
                  <div className="flex flex-col space-y-6 mt-8">
                    <Link 
                      to="/" 
                      className="text-xl font-tajawal text-gray-700 hover:text-black transition-colors"
                    >
                      الرئيسية
                    </Link>
                    <Link 
                      to="/collections" 
                      className="text-xl font-tajawal text-gray-700 hover:text-black transition-colors"
                    >
                      أعمالنا
                    </Link>
                    <Link 
                      to="/about" 
                      className="text-xl font-tajawal text-gray-700 hover:text-black transition-colors"
                    >
                      حول
                    </Link>
                    <Link 
                      to="/contact" 
                      className="text-xl font-tajawal text-gray-700 hover:text-black transition-colors"
                    >
                      اتصل بنا
                    </Link>
                    <div className="pt-4 border-t">
                      <Button 
                        variant="outline" 
                        className="w-full font-tajawal"
                        onClick={() => setIsSearchOpen(true)}
                      >
                        <Search className="h-4 w-4 ml-2" />
                        بحث
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-cairo font-bold">البحث</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchResults([]);
                  setSearchQuery('');
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="ابحث عن أعمالنا..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg font-tajawal mb-4"
                autoFocus
              />
              <Button type="submit" className="w-full font-tajawal">
                بحث
              </Button>
            </form>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <h4 className="font-cairo font-semibold mb-2">النتائج:</h4>
                <div className="space-y-2">
                  {searchResults.map((result, index) => (
                    <div key={index} className="p-2 bg-gray-50 rounded font-tajawal text-sm">
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
