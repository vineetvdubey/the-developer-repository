import './ListPage.css';
import React from 'react';
import ListPageHeader from './ListPageHeader';
import DevelopersList from './DevelopersList';
import Footer from './Footer';

function ListPage() {
  return (
    <>
      <ListPageHeader />
      <DevelopersList />
      <Footer />
    </>
  );
}

export default ListPage;
