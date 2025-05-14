import Image from 'next/image'

const images = [
  {
    src: "/images/activities/running.jpg",
    alt: "Running",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "/images/activities/yoga.jpg",
    alt: "Yoga",
    className: "md:col-span-1"
  },
  {
    src: "/images/activities/gym.jpg",
    alt: "Gym",
    className: "md:col-span-1"
  },
  {
    src: "/images/activities/swimming.jpg",
    alt: "Swimming",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    src: "/images/activities/cycling.jpg",
    alt: "Cycling",
    className: "md:col-span-2"
  }
]

export function ImageMosaic() {
  return (
    <div className="relative w-full h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={image.alt}
            className={`group relative aspect-square overflow-hidden rounded-xl ${image.className}`}
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <span className="absolute bottom-3 left-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              {image.alt}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
} 