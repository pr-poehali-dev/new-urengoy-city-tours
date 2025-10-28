import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const achievements = [
    { icon: 'Award', text: 'Сертифицированный гид-экскурсовод' },
    { icon: 'BookOpen', text: 'Историк по образованию' },
    { icon: 'Globe', text: '8 лет опыта работы' },
    { icon: 'Users', text: 'Более 500 проведенных экскурсий' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Профессионализм
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            О вашем гиде
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                        <Icon name="User" size={80} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Александр Полярный</h3>
                      <p className="text-lg text-muted-foreground">Профессиональный гид</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Здравствуйте! Я влюблен в Новый Уренгой и Крайний Север. Уже более 8 лет я провожу 
                    увлекательные экскурсии, рассказывая об истории освоения Арктики, культуре коренных 
                    народов и современной жизни газовой столицы России.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Моя цель — показать вам не просто достопримечательности, а душу этого уникального 
                    северного города, его героическое прошлое и динамичное настоящее.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                          <Icon name={achievement.icon as any} size={20} className="text-white" />
                        </div>
                        <span className="text-sm font-medium">{achievement.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
