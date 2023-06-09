import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { AppContainer } from 'App.styled';
import Layout from 'components/Layout/Layout';
import Home from './pages/Home';
const Tweets = lazy(() => import('./pages/Tweets'));

export default function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/tweets"
            element={
              <Suspense fallback={<Loader />}>
                <Tweets />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}
