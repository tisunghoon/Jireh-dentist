import { u } from '../data/imageBase'
import './PageHeader.css'

type Props = {
  eyebrow: string
  title: string
  description?: string
  bg?: string
}

export default function PageHeader({ eyebrow, title, description, bg }: Props) {
  const background = bg ?? u('1606811971618-4486d14f3f99', 'pageHeader')
  return (
    <header className="page-header" style={{ backgroundImage: `url(${background})` }}>
      <div className="page-header__veil" />
      <div className="container page-header__inner">
        <span className="page-header__eyebrow">{eyebrow}</span>
        <h1 className="page-header__title">{title}</h1>
        {description && <p className="page-header__desc">{description}</p>}
      </div>
    </header>
  )
}
