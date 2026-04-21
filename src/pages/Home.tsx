import HeroSlider from '../sections/HeroSlider'
import Highlights from '../sections/Highlights'
import AboutIntro from '../sections/AboutIntro'
import DoctorsRow from '../sections/DoctorsRow'
import Philosophy from '../sections/Philosophy'
import TreatmentGrid from '../sections/TreatmentGrid'
import Strengths from '../sections/Strengths'
import FacilityGallery from '../sections/FacilityGallery'
import Reviews from '../sections/Reviews'
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
      <FacilityGallery />
      <Reviews />
      <ContactCTA />
    </>
  )
}
