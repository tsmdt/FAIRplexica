'use client';
import useAppConfig from '@/hooks/useAppConfig';
import { ThemeProvider } from 'next-themes';

const ThemeProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useAppConfig()
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderComponent;
