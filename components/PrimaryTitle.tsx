import { ReactNode } from "react";
import styles from "../styles/components/primaryTitle.module.scss";

const PrimaryTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={styles.primaryTitle}>
      <h1>{children}</h1>
    </div>
  );
};

export default PrimaryTitle;
