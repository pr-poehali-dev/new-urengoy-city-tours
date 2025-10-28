import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (900) 123-45-67',
      link: 'tel:+79001234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@urengoy-tours.ru',
      link: 'mailto:info@urengoy-tours.ru',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Новый Уренгой, ул. Ленина, д. 1',
      link: null,
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Ежедневно с 9:00 до 20:00',
      link: null,
    },
  ];

  const socials = [
    { icon: 'MessageCircle', name: 'Telegram', link: '#' },
    { icon: 'Send', name: 'WhatsApp', link: '#' },
    { icon: 'Instagram', name: 'Instagram', link: '#' },
    { icon: 'Facebook', name: 'VK', link: '#' },
  ];

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Свяжитесь с нами
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовы ответить на все ваши вопросы и помочь выбрать идеальную экскурсию
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={contact.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{contact.title}</h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Следите за нами в соцсетях</h3>
                  <p className="text-muted-foreground">
                    Свежие фото с экскурсий, специальные предложения и новости
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {socials.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="gap-2 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all"
                      asChild
                    >
                      <a href={social.link}>
                        <Icon name={social.icon as any} size={20} />
                        {social.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
