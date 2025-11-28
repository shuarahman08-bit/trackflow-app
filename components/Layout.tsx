import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  onLogout?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  return (
    <div className="layout">
      <header>
        <h1>Track Flow</h1>
        {onLogout && <button onClick={onLogout}>Logout</button>}
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

export default Layout;
