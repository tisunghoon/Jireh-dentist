import PageHeader from './PageHeader'
import FacilityGallery from '../sections/FacilityGallery'

export default function FacilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="FACILITY"
        title="시설안내"
        description="환자를 배려한 청결하고 쾌적한 공간을 직접 확인해 보세요."
      />
      <FacilityGallery />
    </>
  )
}
