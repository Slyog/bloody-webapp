'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    disableTransitionOnChange
    enableSystem={false}
  >
    {children}
  </ThemeProvider>
);

export default Providers;
