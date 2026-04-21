import { u } from './imageBase'

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
    before: u('1606811971618-4486d14f3f99', 'card'),
    after: u('1609840112990-4265448268d1', 'card'),
  },
  {
    title: '어금니 임플란트 케이스',
    date: '2024.05',
    before: u('1588776814546-1ffcf47267a5', 'card'),
    after: u('1629909613654-28e377c37b09', 'card'),
  },
  {
    title: '라미네이트 심미 케이스',
    date: '2024.07',
    before: u('1584362917165-526a968579e8', 'card'),
    after: u('1588776813677-77aaf5595b83', 'card'),
  },
  {
    title: '투명교정 케이스',
    date: '2024.09',
    before: u('1579684385127-1ef15d508118', 'card'),
    after: u('1581595220892-b0739db3ba8c', 'card'),
  },
]
