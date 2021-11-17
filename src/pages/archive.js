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

      <div className="xl:max-w-screen-xl xl:mx-auto mx-6 text-gray-700">
        <Header />
        <main className="mt-8 h-screen">
          <Archive />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default archive;
