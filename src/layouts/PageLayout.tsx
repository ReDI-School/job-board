import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';


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
