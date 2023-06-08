import Layout from "@/components/Layout";
import PrimaryTitle from "@/components/PrimaryTitle";
import styles from "../../styles/pages/crew.module.scss";
import { Fragment, ReactElement, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import range from "@/utils/range";
import Image from "next/image";

const CrewPage: React.FC = () => {
  return (
    <Layout background="crew">
      <PrimaryTitle>
        <span className={styles.number}>{(1).toString().padStart(2, "0")}</span>
        MEET YOUR CREW
      </PrimaryTitle>
      <CrewMember />
    </Layout>
  );
};

export default CrewPage;

const CrewMember = () => {
  const [index, setIndex] = useState(0);
  const member = crew[index];

  return (
    <div className={styles.container}>
      <div className="d-flex flex-md-column flex-sm-column-reverse">
        <div className={`${styles.textCon} row`}>
          <TextTransition id={index}>
            <div>
              <h2 className={styles.role}>{member.role}</h2>
              <h1 className={styles.heading}>{member.name}</h1>
              <p className={styles.paragraph}>{member.bio}</p>
            </div>
          </TextTransition>
        </div>
        <div className={`${styles.circles} `}>
          {range(crew.length).map((i) => (
            <button
              onClick={() => {
                setIndex(i);
              }}
              key={i}
              className={i === index ? styles.active : styles.circleBtn}
            ></button>
          ))}
        </div>
      </div>
      <div className={`${styles.imgCon} `}>
        <ImageTransition id={index}>
          <figure className={`${styles.image} `}>
            <Image src={member.images.webp} fill={true} alt={member.name} />
          </figure>
        </ImageTransition>
      </div>
    </div>
  );
};

// <Animation> //
const ImageTransition = ({
  id,
  children,
  className,
}: {
  id: number;
  children: ReactElement;
  className?: string;
}) => {
  return (
    <TransitionGroup className={className}>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.imageAnimEnter,
          enterActive: styles.imageAnimEnterActive,
          enterDone: styles.imageAnimEnterDone,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

const TextTransition = ({
  id,
  children,
}: {
  id: number;
  children: ReactElement;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.textAnimEnter,
          enterActive: styles.textAnimEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// </Animation> //

const crew = [
  {
    cls: "hurley",
    name: "Douglas Hurley",
    images: {
      png: "/images/crew/image-douglas-hurley.png",
      webp: "/images/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps " +
      "pilot and former NASA astronaut. He launched into space for the third " +
      "time as commander of Crew Dragon Demo-2.",
  },
  {
    cls: "shuttleworth",
    name: "Mark Shuttleworth",
    images: {
      png: "/images/crew/image-mark-shuttleworth.png",
      webp: "/images/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company " +
      "behind the Linux-based Ubuntu operating system. Shuttleworth became the first " +
      "South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    cls: "glover",
    images: {
      png: "/images/crew/image-victor-glover.png",
      webp: "/images/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the " +
      "International Space Station. Glover is a commander in the U.S. Navy where " +
      "he pilots an F/A-18.He was a crew member of Expedition 64, and served as a " +
      "station systems flight engineer.",
  },
  {
    cls: "ansari",
    name: "Anousheh Ansari",
    images: {
      png: "/images/crew/image-anousheh-ansari.png",
      webp: "/images/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea " +
      "Systems. Ansari was the fourth self-funded space tourist, the first self-funded " +
      "woman to fly to the ISS, and the first Iranian in space.",
  },
];
// </Data> //
