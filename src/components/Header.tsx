import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'routes', label: 'Маршруты' },
    { id: 'prices', label: 'Цены' },
    { id: 'about', label: 'О гиде' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" className="text-primary" size={28} />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Тайны газовой столицы
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection('booking')}
            className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            Забронировать
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('booking')}
              className="w-full bg-gradient-to-r from-primary to-secondary"
            >
              Забронировать
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
