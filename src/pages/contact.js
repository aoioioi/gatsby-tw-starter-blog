import React from 'react';
import Metadata from '../components/Metadata';
import Header from '../components/Header';
import Footer from '../components/Footer';

function contact() {
  return (
    <>
      <Metadata
        title="Contact"
        description="Contact information"
      />

      <div className="xl:max-w-screen-xl xl:mx-auto mx-6 text-gray-700">
        <Header />
        <main className="mt-8 h-screen">
          For enquiries, contact: youremail@domain.com
        </main>
        <Footer />
      </div>
    </>
  );
}

export default contact;
