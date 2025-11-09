type PlaceCardProps = {
    image: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    url?: string;
    isFavorite?: boolean;
    isPremium?: boolean;
}

const PlaceCard: React.FC<PlaceCardProps> = ({
  image,
  price,
  isFavorite = false,
  isPremium = false,
  rating,
  title,
  type,
  url = '#',
}: PlaceCardProps) => (
  <article className="cities__card place-card">
    <div className="place-card__mark">
      <span>{isPremium}</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href={url}>
        <img className="place-card__image" src={image} width="260" height="200" alt={title} />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button button ${
            isFavorite ? 'place-card__bookmark-button--active' : ''
          }`}
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${rating}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href={url}>{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);

export default PlaceCard;
