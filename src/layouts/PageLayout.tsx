import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: any;
  footerMaxWidth?:  false | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const PageLayout = (props: Props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer containerMaxWidth={props.footerMaxWidth}/>
    </>
  );
};

export default PageLayout;
