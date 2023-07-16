import { ReactNode } from 'react';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

export const Page = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
