import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContainer } from 'components/App/App.styled';

import Layout from 'components/Layout/Layout';
import Home from '../../pages/Home';
const Tweets = lazy(() => import('../../pages/Tweets'));

export default function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/tweets"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Tweets />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AppContainer>
  );
}
