import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    route: '',
    people: '1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения бронирования.',
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      route: '',
      people: '1',
      message: '',
    });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Бронирование
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Забронировать экскурсию
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Заполните форму, и мы свяжемся с вами для уточнения деталей
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Форма бронирования</CardTitle>
              <CardDescription>
                Все поля обязательны для заполнения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      <Icon name="User" size={16} className="inline mr-2" />
                      Ваше имя
                    </Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Icon name="Phone" size={16} className="inline mr-2" />
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Icon name="Mail" size={16} className="inline mr-2" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">
                      <Icon name="Calendar" size={16} className="inline mr-2" />
                      Желаемая дата
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="route">
                      <Icon name="Map" size={16} className="inline mr-2" />
                      Выберите маршрут
                    </Label>
                    <Select
                      value={formData.route}
                      onValueChange={(value) => setFormData({ ...formData, route: value })}
                      required
                    >
                      <SelectTrigger id="route">
                        <SelectValue placeholder="Выберите маршрут" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="heart">Сердце газовой столицы (1500₽)</SelectItem>
                        <SelectItem value="industrial">Индустриальный гигант (2500₽)</SelectItem>
                        <SelectItem value="aurora">Северное сияние (3500₽)</SelectItem>
                        <SelectItem value="extreme">Арктический экстрим (5000₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="people">
                      <Icon name="Users" size={16} className="inline mr-2" />
                      Количество человек
                    </Label>
                    <Select
                      value={formData.people}
                      onValueChange={(value) => setFormData({ ...formData, people: value })}
                    >
                      <SelectTrigger id="people">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'человек' : num < 5 ? 'человека' : 'человек'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    <Icon name="MessageSquare" size={16} className="inline mr-2" />
                    Дополнительные пожелания
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших предпочтениях, особых требованиях или вопросах..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
