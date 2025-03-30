import React, { createContext } from "react";

export const QuroTarkContext = createContext({ testValue: "" });

const QuroTarkContextProvider = ({ children }) => {
  const readDate = (date) =>
    new Date(date).toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

  const contextValue = {
    readDate
  };

  return (
    <QuroTarkContext.Provider value={contextValue}>
      {children}
    </QuroTarkContext.Provider>
  );
};

export default QuroTarkContextProvider;
