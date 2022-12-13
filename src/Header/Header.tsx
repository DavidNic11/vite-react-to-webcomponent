import styles from "./Header.module.css";

export interface HeaderProps {
  text?: string;
}

export const Header = ({ text }: HeaderProps) => (
  <header>
    <div className={styles.wrapper}>
      <div>
        <img
          className={styles.logo}
          src="https://new.bitovi.com/logos/bitovi-logo-red-1.svg"
        />
      </div>
      <h1 className={styles.logo}>{text}</h1>
    </div>
  </header>
);
