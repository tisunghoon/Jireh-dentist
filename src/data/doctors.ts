// 이레치과 의료진 샘플 프로필 (부천 역곡 · 4인 원장 체제 가정).
// 실제 원장님 자료 수령 후 이 파일만 교체하면 전체 페이지에 반영됩니다.

export type Doctor = {
  id: string
  name: string
  role: string
  specialty: string
  credentials: string[]
}

export const DOCTORS: Doctor[] = [
  {
    id: 'dr1',
    name: '김민재',
    role: '대표원장',
    specialty: '통합치의학 · 임플란트',
    credentials: [
      '서울대학교 치과대학 졸업',
      '서울대학교 치과병원 통합치의학과 수련',
      '보건복지부 지정 통합치의학과 전문의',
      '대한구강악안면임플란트학회(KAOMI) 정회원',
      'ITI(국제임플란트학회) International Member',
      '前 부천 A치과 임플란트 센터장',
    ],
  },
  {
    id: 'dr2',
    name: '배성인',
    role: '진료원장',
    specialty: '보철 · 심미치료',
    credentials: [
      '연세대학교 치과대학 졸업',
      '연세대학교 치과병원 보철과 수련',
      '보건복지부 지정 치과보철과 전문의',
      '대한치과보철학회 정회원',
      '대한심미치과학회 정회원',
      '디지털 보철(CAD/CAM) 임상 다수',
    ],
  },
  {
    id: 'dr3',
    name: '정하늘',
    role: '진료원장',
    specialty: '치아교정 · 투명교정',
    credentials: [
      '경희대학교 치과대학 졸업',
      '경희대학교 치과병원 교정과 수련',
      '보건복지부 지정 치과교정과 전문의',
      '대한치과교정학회 인정의',
      'Invisalign Certified Doctor (인비절라인 공인의)',
      '성장기·성인 교정 임상 10년',
    ],
  },
  {
    id: 'dr4',
    name: '한지우',
    role: '진료원장',
    specialty: '소아치과 · 예방치료',
    credentials: [
      '이화여자대학교 임상치의학대학원 소아치과 전공',
      '前 서울대학교 어린이병원 소아치과 페어',
      '대한소아치과학회 정회원',
      '대한장애인치과학회 정회원',
      '어린이 행동조절 · 예방치료 임상 다수',
      '역곡초·성곡초 인근 소아 환아 케어 경험',
    ],
  },
]
