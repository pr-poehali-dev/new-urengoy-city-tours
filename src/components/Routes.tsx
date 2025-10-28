import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Routes = () => {
  const routes = [
    {
      id: 1,
      title: 'Сердце газовой столицы',
      description: 'Знакомство с центром города, памятниками первопроходцам и главными достопримечательностями',
      duration: '2 часа',
      difficulty: 'Легкий',
      price: '1500',
      highlights: ['Памятник газовикам', 'Главная площадь', 'Музей истории'],
      icon: 'Building2',
    },
    {
      id: 2,
      title: 'Индустриальный гигант',
      description: 'Экскурсия по промышленным объектам с посещением смотровых площадок и рассказом о газодобыче',
      duration: '3 часа',
      difficulty: 'Средний',
      price: '2500',
      highlights: ['Газовые месторождения', 'Смотровые площадки', 'История освоения'],
      icon: 'Factory',
    },
    {
      id: 3,
      title: 'Северное сияние',
      description: 'Вечерняя экскурсия с поиском северного сияния и рассказами о культуре народов Севера',
      duration: '4 часа',
      difficulty: 'Легкий',
      price: '3500',
      highlights: ['Наблюдение за сиянием', 'Фотосессия', 'Горячий чай'],
      icon: 'Sparkles',
      popular: true,
    },
    {
      id: 4,
      title: 'Арктический экстрим',
      description: 'Приключенческий тур с выездом за город, знакомством с природой тундры и экстремальными активностями',
      duration: '6 часов',
      difficulty: 'Сложный',
      price: '5000',
      highlights: ['Тундра', 'Снегоходы', 'Обед у костра'],
      icon: 'Mountain',
    },
  ];

  const difficultyColors = {
    'Легкий': 'bg-green-100 text-green-700',
    'Средний': 'bg-yellow-100 text-yellow-700',
    'Сложный': 'bg-red-100 text-red-700',
  };

  return (
    <section id="routes" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Популярные направления
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши маршруты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящую экскурсию из нашей коллекции уникальных маршрутов по Новому Уренгою
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {routes.map((route, index) => (
            <Card
              key={route.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                      <Icon name={route.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{route.title}</CardTitle>
                      {route.popular && (
                        <Badge className="mt-1 bg-accent text-white">
                          <Icon name="TrendingUp" size={12} className="mr-1" />
                          Популярный
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{route.price}₽</div>
                    <div className="text-sm text-muted-foreground">с человека</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-base">{route.description}</CardDescription>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {route.duration}
                  </Badge>
                  <Badge variant="outline" className={difficultyColors[route.difficulty as keyof typeof difficultyColors]}>
                    <Icon name="Activity" size={14} className="mr-1" />
                    {route.difficulty}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-foreground">Что включено:</div>
                  <ul className="space-y-1">
                    {route.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-green-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Icon name="Calendar" className="mr-2" size={16} />
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Routes;
