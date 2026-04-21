import PageHeader from './PageHeader'
import PhilosophySection from '../sections/Philosophy'
import AboutIntro from '../sections/AboutIntro'

export default function PhilosophyPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        title="진료철학"
        description="환자 한 분 한 분을 가족처럼 생각하며, 평생 주치의로 함께하는 지레 치과의 약속입니다."
      />
      <AboutIntro />
      <PhilosophySection />
    </>
  )
}
