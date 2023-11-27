"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthInfo';

interface GuestRouteProps {
  children: React.ReactNode;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    if (state.userId || state.token) {
     
      router.push('/submission');
    }
  }, [state]);

  // Render the protected content if the user is authenticated
  return state.userId && state.token ? <>{children}</> : null;
};

export default GuestRoute;
