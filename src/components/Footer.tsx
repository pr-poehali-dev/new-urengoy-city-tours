import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="MapPin" size={24} className="text-primary" />
              <span className="text-xl font-bold">Тайны газовой столицы</span>
            </div>
            <p className="text-white/70 mb-4">
              Профессиональные экскурсии по Новому Уренгою. Открывайте тайны Арктики вместе с нами!
            </p>
            <div className="flex gap-3">
              {['MessageCircle', 'Send', 'Instagram', 'Facebook'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name={social as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'routes', label: 'Маршруты' },
                { id: 'prices', label: 'Цены' },
                { id: 'about', label: 'О гиде' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'reviews', label: 'Отзывы' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+79001234567" className="text-white/70 hover:text-primary transition-colors">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} className="text-primary" />
                <a href="mailto:info@urengoy-tours.ru" className="text-white/70 hover:text-primary transition-colors">
                  info@urengoy-tours.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary mt-1" />
                <span className="text-white/70">
                  г. Новый Уренгой,<br />ул. Ленина, д. 1
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} Тайны газовой столицы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
