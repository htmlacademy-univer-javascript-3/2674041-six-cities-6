import { Link } from 'react-router-dom';

import type { Offer } from '@/src/mocks/offers';

type PlaceCardProps = {
  offer: Offer;
  variant: 'cities' | 'favorites' | 'near-places';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const PlaceCard = ({
  offer,
  variant,
  onMouseEnter,
  onMouseLeave,
}: PlaceCardProps) => {
  const offerPath = `/offer/${offer.id}`;

  const cardClassByVariant = {
    cities: 'cities__card place-card',
    favorites: 'favorites__card place-card',
    'near-places': 'near-places__card place-card',
  } as const;

  const imageWrapperClassByVariant = {
    cities: 'cities__image-wrapper place-card__image-wrapper',
    favorites: 'favorites__image-wrapper place-card__image-wrapper',
    'near-places': 'near-places__image-wrapper place-card__image-wrapper',
  } as const;

  const cardClass = cardClassByVariant[variant];
  const imageWrapperClass = imageWrapperClassByVariant[variant];

  const imageWidth = variant === 'favorites' ? 150 : 260;
  const imageHeight = variant === 'favorites' ? 110 : 200;

  return (
    <article className={cardClass} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={imageWrapperClass}>
        <Link to={offerPath}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageWidth}
            height={imageHeight}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={variant === 'favorites' ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              offer.isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.starsWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPath}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
