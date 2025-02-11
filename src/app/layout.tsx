import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Providers } from './_components/providers';
import './globals.css';

export const metadata: Metadata = {
	title: "Let's Gather",
	description:
		"Looking for like-minded people? Join Let's Gather and connect through clubs and events you love!",
	manifest: '/site.webmanifest',
	icons: [
		{
			rel: 'icon',
			type: 'image/webp',
			url: '/favicon-96x96.webp',
			sizes: '96x96',
		},
		{
			rel: 'icon',
			type: 'image/svg+xml',
			url: '/favicon.svg',
		},
		{
			rel: 'shortcut icon',
			url: '/favicon.ico',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/apple-touch-icon.webp',
		},
	],
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
