import Layout from "@/components/Layout";
import styles from "../styles/pages/home.module.scss";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <Layout background="home">
      <div className={`${styles.hero}`}>
        <div className={`${styles.container}`}>
          <div className={styles.half}>
            <h5 className={styles.heading5}>SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className={styles.heading1}>SPACE</h1>
            <p className={styles.paragraph}>
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div className={styles.half}>
            <Link href="/destination" className={styles.exploreBtn}></Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
