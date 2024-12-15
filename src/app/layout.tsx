// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import './styles.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Suspense } from 'react';
import { AppLayout } from './components/AppLayout';
import theme from '../const/theme';

export const metadata = {
  title: 'Fuse\'s Garage\'s Site',
  description: '3Dモデルを作成する個人サークル「Fuse’sGarage」のサイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Suspense>
          <ColorSchemeScript />
        </Suspense>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Fuse's Site" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fuses-garage.github.io/fuses-portforio/" />
        <meta property="og:image" content="https://fuses-garage.github.io/fuses-portforio/OGP.png" />
        <meta property="og:description" content="個人クリエイターFuseのポートフォリオです。" />
        <meta property="og:site_name" content="Fuse's Site" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=open_in_new" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppLayout>
            {children}
          </AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
