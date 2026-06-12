import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../App.css'

interface SlideProps {
  title: string;
  description: string;
  image?: string;
}

const slides: SlideProps[] = [
  {
    title: "Vignahara Inc.",
    description: "Financially feasible, socially responsible, and environmentally friendly housing solutions.",
  },
  {
    title: "Proptech Innovation",
    description: "Leveraging AI technology to identify and implement innovative housing solutions.",
  },
  {
    title: "Expanding Horizons",
    description: "Starting in Ontario, with a vision to provide quality housing across Canada.",
  }
];

export function HeroSlideshow() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
