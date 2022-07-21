import React from 'react';
import { withQueryProvider } from './withQueryProvider';

export const withProviders = (component: React.ReactNode) =>
  withQueryProvider(component);
