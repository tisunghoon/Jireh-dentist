import PageHeader from './PageHeader'
import StrengthsSection from '../sections/Strengths'
import Highlights from '../sections/Highlights'

export default function StrengthsPage() {
  return (
    <>
      <PageHeader
        eyebrow="WHY JIREH"
        title="지레 치과의 강점"
        description="환자 중심의 진료 환경과 첨단 시스템, 그리고 분과별 전문의가 함께합니다."
      />
      <Highlights />
      <StrengthsSection />
    </>
  )
}
