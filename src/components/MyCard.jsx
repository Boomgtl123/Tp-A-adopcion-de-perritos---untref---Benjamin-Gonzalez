import Tags from './Tags.jsx'

export default function MyCard({ image, name, description, tagText, tagColor, centered }) {
  return (
    <article className={`dog-card ${centered ? 'dog-card--center' : ''}`.trim()}>
      <div className="dog-card__imageWrap">
        <img className="dog-card__image" src={image} alt={name} />
      </div>

      <div className="dog-card__body">
        <h2 className="dog-card__name">{name}</h2>
        <p className="dog-card__desc">{description}</p>
        <Tags text={tagText} color={tagColor} />
      </div>
    </article>
  )
}
