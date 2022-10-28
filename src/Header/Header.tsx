import styles from "./Header.module.css";

export interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header>
    <div className={styles.wrapper}>
      <div>
        <img
          className={styles.logo}
          src="https://new.bitovi.com/logos/bitovi-logo-red-1.svg"
        />
      </div>
      <h1 className={styles.logo}>{title}</h1>
    </div>
  </header>
);
