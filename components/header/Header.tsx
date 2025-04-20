import styles from "./Header.module.css";
import Pass from "@/components/pass/Pass";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <Pass href="/">
          <h1 className={styles.headerTitle}>Carbon Manager</h1>
        </Pass>
        <div className={styles.options}>
          <Pass href="/">
            <span>Home</span>
          </Pass>
          <Pass href="/features">
            <span>Features</span>
          </Pass>
          <Pass href="/goals">
            <span>Goals</span>
          </Pass>
        </div>
      </div>
    </div>
  );
}
