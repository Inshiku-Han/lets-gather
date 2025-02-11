import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Providers } from './components/providers';
import './globals.css';

export const metadata: Metadata = {
	title: 'JStack App',
	description: 'Created using JStack',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
