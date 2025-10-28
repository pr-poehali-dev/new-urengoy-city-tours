import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const pricingPlans = [
    {
      title: 'Индивидуальная',
      description: 'Персональная экскурсия для вас и ваших близких',
      basePrice: 'от 3000',
      features: [
        'Любой маршрут на выбор',
        'Гибкое расписание',
        'Персональный подход',
        'Остановки по вашему желанию',
        'Фотосессия в подарок',
      ],
      icon: 'User',
      popular: false,
      people: '1-3 человека',
    },
    {
      title: 'Групповая',
      description: 'Присоединяйтесь к группе единомышленников',
      basePrice: 'от 1500',
      features: [
        'Фиксированные маршруты',
        'Регулярное расписание',
        'Группа до 15 человек',
        'Знакомство с попутчиками',
        'Доступная цена',
      ],
      icon: 'Users',
      popular: true,
      people: 'от 4 человек',
    },
    {
      title: 'Корпоративная',
      description: 'Идеально для команды или делегации',
      basePrice: 'от 25000',
      features: [
        'Эксклюзивный маршрут',
        'Транспорт включен',
        'Кофе-брейк',
        'Сувениры участникам',
        'Фото/видео съемка',
      ],
      icon: 'Briefcase',
      popular: false,
      people: 'от 10 человек',
    },
  ];

  const additionalServices = [
    { icon: 'Camera', title: 'Фотосъемка', price: '1500₽' },
    { icon: 'Car', title: 'Трансфер', price: '1000₽' },
    { icon: 'Coffee', title: 'Кофе-брейк', price: '500₽' },
    { icon: 'Gift', title: 'Сувениры', price: '300₽' },
  ];

  return (
    <section id="prices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Прозрачная оплата
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Стоимость экскурсий
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите формат, который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in ${
                plan.popular ? 'border-2 border-primary shadow-xl' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-tl-none rounded-br-none bg-gradient-to-r from-primary to-secondary text-white">
                    Популярный
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name={plan.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-foreground">{plan.basePrice}₽</div>
                  <div className="text-sm text-muted-foreground mt-1">{plan.people}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                      : 'bg-foreground hover:bg-foreground/90'
                  }`}
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Icon name="Calendar" className="mr-2" size={16} />
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-muted/30 to-muted/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Дополнительные услуги</CardTitle>
              <CardDescription>Сделайте вашу экскурсию еще более комфортной</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">{service.title}</div>
                    <div className="text-lg font-bold text-primary">{service.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Prices;
