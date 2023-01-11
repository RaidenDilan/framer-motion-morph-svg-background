import React from 'react';
import './Layout.scss';
import { LayoutProps } from './Layout';
import Footer from '../../components/Footer';

const Layout = ({ children }: LayoutProps) => (
  <div className="Layout">
    <div className="Layout__body">{children}</div>
    <Footer />
  </div>
);

export default Layout;
