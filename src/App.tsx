import type { Component } from 'solid-js';
import { Route } from 'solid-app-router';

import Footer from './components/Footer';

export const App: Component = () => (
  <>
    <Route />
    <Footer />
  </>
);
