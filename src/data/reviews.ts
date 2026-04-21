export type Review = {
  platform: 'naver' | 'kakao' | 'google'
  tag: string
  title: string
  preview: string
  date: string
}

export const REVIEWS: Review[] = [
  {
    platform: 'naver',
    tag: '임플란트',
    title: '세심한 상담과 만족스러운 결과',
    preview:
      '진료 계획부터 차근차근 설명해 주셔서 믿고 치료받을 수 있었어요. 결과도 자연스럽고 관리까지 꼼꼼하게 해주셨습니다.',
    date: '2024.11',
  },
  {
    platform: 'kakao',
    tag: '소아치과',
    title: '아이가 편안해하는 치과',
    preview:
      '아이 눈높이에 맞춘 설명과 친절한 응대 덕분에 아이가 치과를 무서워하지 않게 되었습니다.',
    date: '2024.10',
  },
  {
    platform: 'naver',
    tag: '투명교정',
    title: '생활 속에서 편한 교정',
    preview:
      '투명 장치라 티 나지 않고, 체계적인 체크로 결과도 만족스러웠어요. 꾸준한 케어 감사합니다.',
    date: '2024.09',
  },
  {
    platform: 'google',
    tag: '치주치료',
    title: '체계적인 잇몸 관리',
    preview:
      '단계별 치료 계획과 꼼꼼한 설명 덕분에 안심하고 진료받을 수 있었습니다.',
    date: '2024.08',
  },
  {
    platform: 'naver',
    tag: '충치치료',
    title: '통증 없이 편안한 치료',
    preview:
      '마취부터 마무리까지 세심하게 신경 써 주셔서 편안하게 치료받았습니다.',
    date: '2024.07',
  },
  {
    platform: 'kakao',
    tag: '협진',
    title: '여러 전문의의 협진이 인상적',
    preview:
      '복합적인 케이스였는데 여러 원장님의 협진으로 최선의 치료 방향을 제시해 주셨습니다.',
    date: '2024.06',
  },
]
