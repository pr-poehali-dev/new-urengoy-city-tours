import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://cdn.poehali.dev/projects/c6fdd635-1c57-426f-8d03-05b45fc27e13/files/8fd00330-4854-4ca6-b6e4-8aaa12e5bbe3.jpg',
      title: 'Панорама города',
      category: 'Городские виды',
    },
    {
      url: 'https://cdn.poehali.dev/projects/c6fdd635-1c57-426f-8d03-05b45fc27e13/files/49cddafa-41a4-4a04-af55-cfd78b4b6282.jpg',
      title: 'Экскурсионная группа',
      category: 'Наши туры',
    },
    {
      url: 'https://cdn.poehali.dev/projects/c6fdd635-1c57-426f-8d03-05b45fc27e13/files/f61c3de4-651a-47a2-be87-363d8ea0cd1f.jpg',
      title: 'Северное сияние',
      category: 'Природа',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Фотогалерея
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Красота Севера
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Взгляните на потрясающие виды, которые вы увидите во время наших экскурсий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border-white/30">
                    {image.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
