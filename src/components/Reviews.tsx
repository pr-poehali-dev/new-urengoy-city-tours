import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      name: 'Мария Иванова',
      city: 'Москва',
      rating: 5,
      date: 'Октябрь 2024',
      text: 'Потрясающая экскурсия! Александр — настоящий профессионал, который влюблен в свой город. Узнали много интересного об истории освоения Севера. Особенно запомнилось посещение смотровой площадки с видом на месторождения.',
    },
    {
      name: 'Дмитрий Петров',
      city: 'Санкт-Петербург',
      rating: 5,
      date: 'Сентябрь 2024',
      text: 'Были на вечерней экскурсии "Северное сияние". Повезло увидеть невероятное природное явление! Гид знает лучшие точки для наблюдения. Горячий чай и атмосфера были просто волшебными.',
    },
    {
      name: 'Елена Смирнова',
      city: 'Екатеринбург',
      rating: 5,
      date: 'Август 2024',
      text: 'Ездили на экстремальный тур в тундру всей семьей. Дети в восторге от снегоходов! Александр провел интересную программу, рассказал о природе Арктики. Обед у костра был незабываемым.',
    },
    {
      name: 'Андрей Кузнецов',
      city: 'Новосибирск',
      rating: 5,
      date: 'Июль 2024',
      text: 'Отличная обзорная экскурсия по центру города. За 2 часа успели увидеть все главные достопримечательности и узнать массу интересных фактов. Рекомендую всем, кто впервые в Новом Уренгое!',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Отзывы клиентов
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что говорят туристы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных путешественников уже открыли для себя тайны газовой столицы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="text-white font-bold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.city}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {review.text}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500" />
                  <span className="text-sm text-muted-foreground">Проверенный отзыв</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-foreground mb-2">4.9/5</div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-muted-foreground">Средний рейтинг</div>
              </div>
              <div className="h-12 w-px bg-border hidden md:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
