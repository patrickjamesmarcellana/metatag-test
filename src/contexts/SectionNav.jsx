import { createContext, useContext, useRef } from "react";

const SectionNavContext = createContext(null);

export const SectionNavProvider = ({ children }) => {
  // Mutable ref to hold the scroll function
  const goToSection = useRef(null);

  return (
    <SectionNavContext.Provider value={goToSection}>
      {children}
    </SectionNavContext.Provider>
  );
};

export const useSectionNav = () => useContext(SectionNavContext);