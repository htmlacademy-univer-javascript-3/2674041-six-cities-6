import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from '@/src/route';
import MainPage from '@/src/pages/MainPage';
import LoginPage from '@/src/pages/LoginPage';
import FavouritesPage from '@/src/pages/FavouritesPage';
import OfferPage from '@/src/pages/OfferPage';
import ErrNotFoundPage from '@/src/pages/ErrNotFoundPage';
import PrivateRoute from '@/src/PrivateRoute';
import type { Offer } from '@/src/mocks/offers';

type AppProps = {
  offers: Offer[];
};

const App: React.FC<AppProps> = ({ offers }: AppProps) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage offers={offers} />} />
        <Route path={AppRoutes.Login} element={<LoginPage />} />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute auth={false}>
              <FavouritesPage favoriteOffers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Offer} element={<OfferPage offers={offers} />} />
        <Route path="*" element={<ErrNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
