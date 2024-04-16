import { Heading } from '@/components/ui/heading/Heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';
import { Statistics } from './Statistics/Statistics';
import styles from './page.module.css'


export const metadata: Metadata = {
    title: 'Dashboard',
    ...NO_INDEX_PAGE
}

export default function Dashboard() {
    return <div className={styles.wrapper}>
        <Heading title="Statistics"/>
        <Statistics/>
    </div>
}
