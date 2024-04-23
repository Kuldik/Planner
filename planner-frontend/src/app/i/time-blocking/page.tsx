import { Metadata } from 'next';
import { Heading } from '../../../components/ui/heading/Heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { TimeBlocking } from './time-blocking-view/TimeBlocking';

export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE
}

export default function TimeBlockingPage() {
	return (
		<div>
			<Heading title='Time blocking' />
			<TimeBlocking />
		</div>
	)
}
