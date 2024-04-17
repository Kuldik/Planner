'use client'
import Link from 'next/link'
import styles from './Sidebar.module.css'
import { GanttChartSquare } from 'lucide-react'
import { COLORS } from '@/constants/color.constants'
import { LogoutButton } from './LogoutButton/LogoutButton'
import { MENU } from './Menu/menu.data'
import { MenuItem } from './Menu/MenuItem/MenuItem'
export function Sidebar() {
  return (
    <aside className={styles.wrapper}>
      <div>
        <Link
          href='/'
          className={styles.link}
        >
          <GanttChartSquare 
          size={38}
          color={COLORS.primary}
          />
          <span className={styles.span}>
            Planner
            <span className={styles.spanPrescrypt}>
              beta
            </span>
          </span>
        </Link>
        <div className={styles.btn}>
          <LogoutButton/>
          <div>
            {MENU.map(item => (
              <MenuItem
                key={item.link} 
                item={item} 
              />
            ))}
          </div>
          
        </div>
      </div>
      <footer className={styles.footer}>
        2024
        <a 
          href="https://github.com/Kuldik"
          target='_blank'
          rel="noreferrer"
          className={styles.git}
          >
            <br />
            My GitHub Page
        </a>
      </footer>
    </aside>
  )
}
