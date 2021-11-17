import React from "react";
import Metadata from '../components/Metadata';

const NotFoundPage = () => {
  return (
    <div className="xl:max-w-screen-xl xl:mx-auto mx-6 text-gray-700">
      <Metadata title="404 - Page Not Found" description="404 page not found" />
      <h1 className="py-3">404 - Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
