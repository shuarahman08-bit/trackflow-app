import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectHandler: React.FC = () => {
  const { slug } = useParams();

  useEffect(() => {
    // This would handle redirect logic
    console.log('Redirecting from slug:', slug);
  }, [slug]);

  return (
    <div className="redirect-handler">
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectHandler;
