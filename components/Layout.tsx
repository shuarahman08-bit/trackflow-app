import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Track Flow</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2025 Track Flow. All rights reserved.</p>
      </footer>
    </div>
  );
};
