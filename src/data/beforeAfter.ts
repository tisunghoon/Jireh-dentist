import { img } from './imageBase'

export type BeforeAfter = {
  title: string
  date: string
  before: string
  after: string
}

export const BEFORE_AFTER: BeforeAfter[] = [
  {
    title: '상·하악 전체 임플란트 케이스',
    date: '2024.03',
    before: img('main5img1_1.jpg'),
    after: img('main5img1_2.jpg'),
  },
  {
    title: '어금니 임플란트 케이스',
    date: '2024.05',
    before: img('main5img1_3.jpg'),
    after: img('main5img1_4.jpg'),
  },
  {
    title: '라미네이트 심미 케이스',
    date: '2024.07',
    before: img('main5img1_5.jpg'),
    after: img('main5img1_6.jpg'),
  },
  {
    title: '투명교정 케이스',
    date: '2024.09',
    before: img('main5img1_7.jpg'),
    after: img('main5img1_8.jpg'),
  },
]
