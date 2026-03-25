import { useState } from 'react';

import PlaceCard from '@/src/components/PlaceCard';
import type { Offer } from '@/src/mocks/offers';

type OffersListProps = {
  offers: Offer[];
};

const OffersList = ({ offers }: OffersListProps) => {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div
      className="cities__places-list places__list tabs__content"
      data-active-offer-id={activeOfferId ?? ''}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          variant="cities"
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
};

export default OffersList;
