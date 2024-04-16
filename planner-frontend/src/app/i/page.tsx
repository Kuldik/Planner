import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Dashboard',
    ...NO_INDEX_PAGE
}

export default function Dashboard() {
    return <div>Dashboard</div>
}
