import type { PropsWithChildren } from 'react';
import { Navbar } from './Navbar';

export function AppLayout({ children }: PropsWithChildren) {
	return (
		<div className="min-h-svh flex flex-col">
			<header className="sticky top-0">
				<div className="container">
					<Navbar />
				</div>
			</header>
			<main className="flex-1">
				<div className="container px-2">{children}</div>
			</main>
		</div>
	);
}
