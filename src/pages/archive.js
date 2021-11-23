import React from 'react';
import Metadata from '../components/Metadata';
import Header from '../components/Header';
import Archive from '../components/Archive';
import Footer from '../components/Footer';

function archive() {
  return (
    <>
      <Metadata
        title="Archive"
        description="Blog archive"
      />

      <Header />
      <div className="xl:max-w-screen-xl mx-auto text-gray-700">
        <main className="mt-8 mx-6 h-screen">
          <Archive />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default archive;
