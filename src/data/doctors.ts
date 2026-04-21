import { img } from './imageBase'

export type Doctor = {
  id: string
  name: string
  role: string
  specialty: string
  image: string
  credentials: string[]
}

export const DOCTORS: Doctor[] = [
  {
    id: 'dr1',
    name: '김민재',
    role: '대표원장',
    specialty: '통합치의학 · 임플란트',
    image: img('drimg1.png'),
    credentials: [
      '서울대학교 치과대학 졸업',
      '서울대학교 치과병원 통합치의학과 수련',
      '보건복지부 지정 통합치의학과 전문의',
      '대한구강악안면임플란트학회(KAOMI) 정회원',
      'ITI(국제임플란트학회) International Member',
      '미국 UCLA 치과대학 임플란트 연수',
    ],
  },
  {
    id: 'dr2',
    name: '이서윤',
    role: '진료원장',
    specialty: '보철 · 심미치료',
    image: img('drimg2.png'),
    credentials: [
      '연세대학교 치과대학 졸업',
      '연세대학교 치과병원 보철과 인턴 · 레지던트 수련',
      '보건복지부 지정 치과보철과 전문의',
      '대한치과보철학회 정회원',
      '대한심미치과학회 정회원',
      '前 연세대학교 치과병원 보철과 임상강사',
    ],
  },
  {
    id: 'dr3',
    name: '박준호',
    role: '진료원장',
    specialty: '치주 · 임플란트',
    image: img('drimg3.png'),
    credentials: [
      '고려대학교 의과대학 치과 졸업',
      '고려대학교 안암병원 치주과 수련',
      '보건복지부 지정 치주과 전문의',
      '대한치주과학회 인정의',
      '대한구강악안면임플란트학회 우수회원',
      'Osstem AIC 임플란트 임상 연수 수료',
    ],
  },
  {
    id: 'dr4',
    name: '정하늘',
    role: '진료원장',
    specialty: '치아교정',
    image: img('drimg4.png'),
    credentials: [
      '경희대학교 치과대학 졸업',
      '경희대학교 치과병원 교정과 수련',
      '보건복지부 지정 치과교정과 전문의',
      '대한치과교정학회 인정의',
      '세계치과교정학회(WFO) 정회원',
      'Invisalign Certified Doctor (인비절라인 공인의)',
    ],
  },
  {
    id: 'dr5',
    name: '최다은',
    role: '진료원장',
    specialty: '구강악안면외과',
    image: img('drimg5.png'),
    credentials: [
      '전남대학교 치의학전문대학원 졸업',
      '전남대학교 치과병원 구강악안면외과 수련',
      '보건복지부 지정 구강악안면외과 전문의',
      '대한구강악안면외과학회 정회원',
      '사랑니 발치 · 턱관절 장애 임상 다수',
      'BLS(기본소생술) Provider 인증',
    ],
  },
  {
    id: 'dr6',
    name: '한지우',
    role: '진료원장',
    specialty: '소아치과 · 예방치료',
    image: img('drimg6.png'),
    credentials: [
      '이화여자대학교 임상치의학대학원 소아치과 수료',
      '前 서울대학교 어린이병원 소아치과 페어',
      '대한소아치과학회 정회원',
      '대한장애인치과학회 정회원',
      '어린이 행동조절 · 예방치료 임상 10년',
      '소아 구강건강 강의 · 학부모 상담 다수',
    ],
  },
]
