import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <Icon name="Award" className="text-accent" size={20} />
            <span className="text-sm font-semibold">Лучшие экскурсии по Новому Уренгою</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Откройте тайны
            </span>
            <br />
            <span className="text-foreground">газовой столицы</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Погрузитесь в уникальную атмосферу северного города. Узнайте историю освоения Арктики и познакомьтесь с культурой крайнего Севера
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать экскурсию
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('routes');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-lg px-8 py-6 border-2"
            >
              <Icon name="Map" className="mr-2" size={20} />
              Посмотреть маршруты
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { icon: 'Users', value: '500+', label: 'Довольных туристов' },
              { icon: 'MapPinned', value: '12', label: 'Уникальных маршрутов' },
              { icon: 'Star', value: '4.9', label: 'Средний рейтинг' },
              { icon: 'Clock', value: '2-4ч', label: 'Длительность' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Icon name={stat.icon as any} className="text-primary mx-auto mb-2" size={32} />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
