import PageHeader from './PageHeader'
import ReviewsSection from '../sections/Reviews'
import ContactCTA from '../sections/ContactCTA'

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="REVIEWS"
        title="고객후기"
        description="환자분들이 직접 남겨 주신 진솔한 후기를 확인하실 수 있습니다."
      />
      <ReviewsSection />
      <ContactCTA />
    </>
  )
}
