import useScreenSize from "@/hooks/useScreenSize";
import breakpoints from "@/utils/breakpoints";
import Image from "next/image";
import styles from "../styles/components/background.module.scss";

function getBackground(name: string, device: string): string {
  return `/images/${name}/background-${name}-${device}.jpg`;
}

const BackgroundImageLoader = (props: { background: string }) => {
  const windowSize = useScreenSize().width;
  const isMobile = windowSize < breakpoints.sm;
  const isTablet = !isMobile && windowSize < breakpoints.lg;
  return (
    <div className={styles.background}>
      <Image
        src={getBackground(
          props.background,
          isMobile ? "mobile" : isTablet ? "tablet" : "desktop"
        )}
        fill={true}
        alt="background"
      />
    </div>
  );
};

export default BackgroundImageLoader;
