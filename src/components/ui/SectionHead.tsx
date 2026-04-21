type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export default function SectionHead({ eyebrow, title, description, align = 'center' }: Props) {
  return (
    <div className="sect-head" style={align === 'left' ? { alignItems: 'flex-start', textAlign: 'left' } : undefined}>
      {eyebrow && <span className="sect-head__eyebrow">{eyebrow}</span>}
      <h2 className="sect-head__title">{title}</h2>
      {description && <p className="sect-head__desc">{description}</p>}
    </div>
  )
}
