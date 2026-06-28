import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import '../App.css'
import sustainableLivingLandscape from '../assets/slides/Building_the_Future_of_Sustainable_Living_Landscape.jpg'
import sustainableLivingPortrait from '../assets/slides/Building_the_Future_of_Sustainable_Living_Portrait.jpg'
import sustainableHousingLandscape from '../assets/slides/SustainableHousing_Landscape.png'
import sustainableHousingPortrait from '../assets/slides/SustainableHousing_Portrait.jpg'
import strategicPartnershipsLandscape from '../assets/slides/StrategicPartnerships_Landscape.png'
import strategicPartnershipsPortrait from '../assets/slides/StrategicPartnerships_Portrait.jpg'
import environmentalResponsibilityLandscape from '../assets/slides/EnvironmentalResponsibility_Landscape.png'
import environmentalResponsibilityPortrait from '../assets/slides/EnvironmentalResponsibility_Portrait.jpg'
import longTermInvestmentFocusLandscape from '../assets/slides/LongTermInvestmentFocus_Landscape.png'
import longTermInvestmentFocusPortrait from '../assets/slides/LongTermInvestmentFocus_Portrait.png'
import aiPoweredHousingSolutionsLandscape from '../assets/slides/AiPoweredHousingSolutions_Landscape.png'
import aiPoweredHousingSolutionsPortrait from '../assets/slides/AiPoweredHousingSolutions_Portrait.png'
import expandingHorizonsLandscape from '../assets/slides/ExpandingHorizons_Landscape.png'
import expandingHorizonsPortrait from '../assets/slides/ExpandingHorizons_Portrait.png'

interface SlideProps {
  title?: string;
  description?: string;
  image?: string;
  backgroundLandscape?: string; // 1920 x 1080, shown in landscape layouts
  backgroundPortrait?: string;  // 1080 x 1350, shown in portrait layouts
}

const slides: SlideProps[] = [
  {
    title: "Building the Future of Sustainable Living",
    description: "Investing in environmentally responsible housing solutions that create long-term value for communities, partners, and future generations.",
    backgroundLandscape: sustainableLivingLandscape, // 1920 x 1080, shown in landscape layouts
    backgroundPortrait: sustainableLivingPortrait,  // 1080 x 1350, shown in portrait layouts 
  },
  {
    title:"Sustainable Housing",
    description: "We invest in practical, responsible housing solutions designed to support livability, affordability, and long-term community growth.",
    backgroundLandscape: sustainableHousingLandscape, // 1920 x 1080, shown in landscape layouts
    backgroundPortrait: sustainableHousingPortrait,  // 1080 x 1350, shown in portrait layouts
  },
  {
    title: "Strategic Partnerships",
    description: "We collaborate with investors, organizations, and community partners to create housing opportunities that deliver shared value.",
    backgroundLandscape: strategicPartnershipsLandscape, // 1920 x 1080, shown in landscape layouts
    backgroundPortrait: strategicPartnershipsPortrait,  // 1080 x 1350, shown in portrait layouts
  },
  {
    title: "Environmental Responsibility",
    description: "We support energy-conscious and resource-efficient housing approaches that reduce environmental impact and improve quality of life.",
    backgroundLandscape: environmentalResponsibilityLandscape, // 1920 x 1080, shown in landscape layouts
    backgroundPortrait: environmentalResponsibilityPortrait,  // 1080 x 1350, shown in portrait layouts 
  },
  {
    title: "Long-Term Investment Focus",
    description: "Aligning strong financial performance with long-term social and environmental responsibility.",
    backgroundLandscape: longTermInvestmentFocusLandscape, // 1920 x 1080, shown in landscape layouts
    backgroundPortrait: longTermInvestmentFocusPortrait,  // 1080 x 1350, shown in portrait layouts
  },
  {
    title: "AI-Powered Housing Solutions",
    description: "Leveraging market data and advanced insights to build the future of sustainable living.",
    backgroundLandscape: aiPoweredHousingSolutionsLandscape, // 1920 x 1080, shown in landscape layouts
    backgroundPortrait: aiPoweredHousingSolutionsPortrait,  // 1080 x 1350, shown in portrait layouts
  },
  {
    title: "Expanding Horizons",
    description: "Starting in Ontario, with a vision to provide quality housing across Canada.",
    backgroundLandscape: expandingHorizonsLandscape, // 1920 x 1080, shown in landscape layouts
    backgroundPortrait: expandingHorizonsPortrait,  // 1080 x 1350, shown in portrait layouts
  }
];

export function HeroSlideshow() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Fade(), Autoplay({ delay: 10000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  // Reset the autoplay timer so a manual interaction doesn't trigger an
  // immediate auto-advance right after the user clicks.
  const resetAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    const stopOnInteraction = autoplay.options.stopOnInteraction
    if (stopOnInteraction === false) autoplay.reset()
    else autoplay.stop()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      resetAutoplay()
    },
    [emblaApi, resetAutoplay]
  )

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    resetAutoplay()
  }, [emblaApi, resetAutoplay])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    resetAutoplay()
  }, [emblaApi, resetAutoplay])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => {
            const slideStyle: React.CSSProperties = {}
            if (slide.backgroundLandscape) {
              ;(slideStyle as Record<string, string>)['--bg-landscape'] = `url(${slide.backgroundLandscape})`
            }
            if (slide.backgroundPortrait) {
              ;(slideStyle as Record<string, string>)['--bg-portrait'] = `url(${slide.backgroundPortrait})`
            }
            return (
              <div className="embla__slide" key={index} style={slideStyle}>
                {slide.image && (
                  <img src={slide.image} className="slide-logo main-logo" alt={slide.title ?? ''} />
                )}
                <div className="slide-content">
                  {slide.title && <h1>{slide.title}</h1>}
                  {slide.description && <p>{slide.description}</p>}
                  <div className="hero-ctas">
                    <a className="cta primary" href="/contact">Contact Us</a>
                    <a className="cta secondary" href="/projects">Our Projects</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="embla__controls">
        <button
          className="embla__arrow embla__arrow--prev"
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="embla__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex}
            />
          ))}
        </div>

        <button
          className="embla__arrow embla__arrow--next"
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
