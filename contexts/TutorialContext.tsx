import React, { createContext, ReactNode, useState } from 'react';

interface TutorialContextType {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export const TutorialContext = createContext<TutorialContextType | undefined>(undefined);

export const TutorialProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TutorialContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </TutorialContext.Provider>
  );
};
