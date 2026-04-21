import HeroSlider from '../sections/HeroSlider'
import Highlights from '../sections/Highlights'
import AboutIntro from '../sections/AboutIntro'
import DoctorsRow from '../sections/DoctorsRow'
import Philosophy from '../sections/Philosophy'
import TreatmentGrid from '../sections/TreatmentGrid'
import Strengths from '../sections/Strengths'
import BeforeAfterSlider from '../sections/BeforeAfterSlider'
import FacilityGallery from '../sections/FacilityGallery'
import Reviews from '../sections/Reviews'
import BlogPreview from '../sections/BlogPreview'
import ContactCTA from '../sections/ContactCTA'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Highlights />
      <AboutIntro />
      <DoctorsRow />
      <Philosophy />
      <TreatmentGrid />
      <Strengths />
      <BeforeAfterSlider />
      <FacilityGallery />
      <Reviews />
      <BlogPreview />
      <ContactCTA />
    </>
  )
}
