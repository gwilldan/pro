"use client"
import { useEffect } from 'react';

import { useAuth } from '@/context/auth/AuthInfo';
import { useRouter } from 'next/navigation';

interface PrivateLayoutProps {
  children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      // Your authentication logic here, assuming userId is a key indicating authentication
      if (!state.userId) {
        // Redirect to the login page if not authenticated
        router.push('/login');
      }
    };

    checkAuthentication();
  }, [state, router]);

  // Render the protected content if the user is authenticated
  return state.userId ? <>{children}</> : null;
};

export default PrivateLayout;
