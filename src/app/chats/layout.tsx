import type { PropsWithChildren } from 'react';
import { AppLayout } from '../_components/AppLayout';

export default function ChatsLayout({ children }: PropsWithChildren) {
	return <AppLayout>{children}</AppLayout>;
}
