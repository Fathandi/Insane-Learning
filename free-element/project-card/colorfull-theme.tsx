import React from 'react';

type Author = {
  name: string;
  avatarUrl: string;
  avatarAlt: string;
}

type CardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  author: Author;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  author
}) => (
  <div className="w-full max-w-[340px] bg-orange-50 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="relative">
      <img 
        src="/api/placeholder/400/200"
        alt={imageAlt}
        className="w-full h-[200px] object-cover bg-orange-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
    
    <div className="p-6">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">{title}</h2>
      <p className="text-amber-800 leading-relaxed mb-6">{description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-amber-200">
            <img 
              src="/api/placeholder/32/32"
              alt={author.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-amber-800">{author.name}</span>
        </div>
        
        <button 
          className="px-4 py-2 bg-amber-800 text-orange-50 rounded-md hover:bg-amber-900 transition-colors duration-200"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
);

const EarthToneCards = () => {
  const cards: CardProps[] = [
    {
      imageUrl: "/desert.jpg",
      imageAlt: "Desert landscape",
      title: "Desert Landscapes",
      description: "Experience the serene beauty of golden sand dunes and endless horizons. Where nature paints with earth's warmest colors.",
      author: {
        name: "Sarah Desert",
        avatarUrl: "/avatar1.jpg",
        avatarAlt: "Sarah Desert avatar"
      }
    },
    {
      imageUrl: "/forest.jpg",
      imageAlt: "Forest scenery",
      title: "Forest Serenity",
      description: "Discover the tranquil paths through ancient woodlands. Where every step brings you closer to nature's heart.",
      author: {
        name: "Tom Woods",
        avatarUrl: "/avatar2.jpg",
        avatarAlt: "Tom Woods avatar"
      }
    },
    {
      imageUrl: "/mountain.jpg",
      imageAlt: "Mountain view",
      title: "Mountain Majesty",
      description: "Embrace the rugged beauty of towering peaks and rocky trails. Where earth meets sky in perfect harmony.",
      author: {
        name: "Alex Peak",
        avatarUrl: "/avatar3.jpg",
        avatarAlt: "Alex Peak avatar"
      }
    }
  ];

  return (
    <div className="flex justify-center flex-wrap gap-8 p-8 max-w-[1200px] mx-auto bg-orange-50">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default EarthToneCards;
