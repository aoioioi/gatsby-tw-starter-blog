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

      <Header />
      <div className="xl:max-w-screen-xl mx-auto text-gray-700">
        <main className="mx-6 mt-8 h-screen">
          For enquiries, contact: youremail@domain.com
        </main>
        <Footer />
      </div>
    </>
  );
}

export default contact;
