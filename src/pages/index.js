import React from "react";
import Metadata from '../components/Metadata';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <>
      <Metadata
        title="Gatsby.js Blog"
        description="A blog created with Gatsby, GraphQL and TW"
      />

      <Header />
      <div className="xl:max-w-screen-xl mx-auto text-gray-700">
        <main className="mx-6">
          <Posts />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
