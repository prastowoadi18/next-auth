'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const LoginButton = ({ children, mode = 'redirect' }: LoginButtonProps) => {
  const router = useRouter();

  const onCLick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <span>Implement Modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onCLick}>
      {children}
    </span>
  );
};

export default LoginButton;
