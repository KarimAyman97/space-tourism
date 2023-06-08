import Layout from "@/components/Layout";
import PrimaryTitle from "@/components/PrimaryTitle";
import styles from "../../styles/pages/technology.module.scss";
import { ReactElement, useState } from "react";
import range from "@/utils/range";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";
import breakpoints from "@/utils/breakpoints";

const TechnologyPage: React.FC = () => {
  return (
    <Layout background="destination">
      <PrimaryTitle>
        <span className={styles.number}>{(1).toString().padStart(2, "0")}</span>
        SPACE LAUNCH 101
      </PrimaryTitle>
      <Technology />
    </Layout>
  );
};
export default TechnologyPage;

const Technology = () => {
  const [index, setIndex] = useState(0);
  const tech = techs[index];
  return (
    <div className={styles.tecContainer}>
      <div className={styles.textContainer}>
        <div className={styles.numberContainer}>
          {range(techs.length).map((i) => (
            <div
              className={` ${index == i ? styles.circleActive : styles.circle}`}
              onClick={() => {
                setIndex(i);
              }}
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className={styles.textDiv}>
          <Animation index={index}>
            <div>
              <h3 className={styles.heading1}>the terminology...</h3>
              <h1 className={styles.heading2}>{tech.name}</h1>
              <p className={styles.paragraph}>{tech.description}</p>
            </div>
          </Animation>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Animation index={index}>
          <Image
            className={styles.image}
            src={
              useScreenSize().width >= breakpoints.lg
                ? tech.images.portrait
                : tech.images.landscape
            }
            fill={true}
            alt={tech.name}
          />
        </Animation>
      </div>
    </div>
  );
};

// <Data> //
const techs = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "/images/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/images/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used " +
      "to carry a payload from Earth's surface to space, usually to Earth orbit " +
      "or beyond. Our WEB-X carrier rocket is the most powerful in operation. " +
      "Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "/images/technology/image-spaceport-portrait.jpg",
      landscape: "/images/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by " +
      "analogy to the seaport for ships or airport for aircraft. Based in the famous " +
      "Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's " +
      "rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "/images/technology/image-space-capsule-portrait.jpg",
      landscape: "/images/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry " +
      "capsule to reenter the Earth's atmosphere without wings. Our capsule is where " +
      "you'll spend your time during the flight. It includes a space gym, cinema, and " +
      "plenty of other activities to keep you entertained.",
  },
];
// </Data> //

// <Animations> //
const Animation = ({
  index,
  children,
  className,
}: {
  index: number;
  children: ReactElement;
  className?: string;
}) => {
  return (
    <TransitionGroup className={className || ""}>
      <CSSTransition
        key={index}
        timeout={600}
        classNames={{
          enter: styles.animEnter,
          enterActive: styles.animEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// <Animations> //
