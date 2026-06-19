import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import '../App.css'
import vignaharaLogo from '../assets/logo/vignahara_logo.png'

interface SlideProps {
  title?: string;
  description?: string;
  image?: string;
}

const slides: SlideProps[] = [
  {
    image: vignaharaLogo,
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
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Fade(), Autoplay({ delay: 8000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            {slide.image && (
              <img src={slide.image} className="slide-logo main-logo" alt={slide.title ?? ''} />
            )}
            <div className="slide-content">
              {slide.title && <h1>{slide.title}</h1>}
              {slide.description && <p>{slide.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
