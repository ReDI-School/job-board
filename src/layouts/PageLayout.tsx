import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

interface Props {
  children: any;
}

const PageLayout = (props: Props) => {
  return (
    <>
      <Header />
      <Hero/>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
