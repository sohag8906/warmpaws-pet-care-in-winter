import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <span className="loading loading-spinner loading-xl text-blue-500"></span>
        </div>
      )}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
