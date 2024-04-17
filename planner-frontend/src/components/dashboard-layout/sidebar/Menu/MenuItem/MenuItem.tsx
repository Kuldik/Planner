import Link from "next/link";
import { IMenuItem } from "../menu.interface";
import styles from './MenuItem.module.css'

export function MenuItem({item}: { item: IMenuItem}) {
  return (
    <div>
      <Link href={item.link} className={styles.link}>
        <item.icon/>
        <span>{item.name}</span>
      </Link>
    </div>
  );
}