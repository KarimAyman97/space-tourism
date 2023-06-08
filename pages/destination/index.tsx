import Layout from "@/components/Layout";
import PrimaryTitle from "@/components/PrimaryTitle";
import styles from "../../styles/pages/destination.module.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Fragment, useState } from "react";
import Image from "next/image";

const DestinationPage: React.FC = () => {
  return (
    <Layout background="destination">
      <PrimaryTitle>
        <span className={styles.number}>{(1).toString().padStart(2, "0")}</span>
        PICK YOUR DESTINATION
      </PrimaryTitle>
      <Destination />
    </Layout>
  );
};

export default DestinationPage;

const Destination = () => {
  const [index, setIndex] = useState(0);
  const destination = destinations[index];
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.half}>
          <ImageAnim index={index}>
            <figure className={styles.image}>
              <Image
                src={destination.images.png}
                fill={true}
                alt={destination.name}
              />
            </figure>
          </ImageAnim>
        </div>
        <div className={`${styles.half}`}>
          <div className={styles.textHalf}>
            <ul className={styles.menu}>
              {destinations.map((item, i) => (
                <Fragment key={i}>
                  <li
                    className={`${styles.menuItem} ${
                      i === index ? styles.menuItemActive : ""
                    }`}
                    onClick={() => {
                      setIndex(i);
                    }}
                  >
                    {item.name}
                  </li>
                </Fragment>
              ))}
            </ul>
            <TextAnim index={index}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.heading2}>
                  {destination.name.toUpperCase()}
                </h1>
                <p className={styles.description}>{destination.description}</p>
              </div>
            </TextAnim>
            <hr className={styles.horizontalLine} />
            <TextAnim index={index}>
              <div className={styles.DisContainer}>
                <div className="col">
                  <h4 className={styles.title}>AVG. DISTANCE</h4>
                  <h3 className={styles.titleNumber}>{destination.distance}</h3>
                </div>
                <div className="col">
                  <h4 className={styles.title}>Est. travel time</h4>
                  <h3 className={styles.titleNumber}>{destination.travel}</h3>
                </div>
              </div>
            </TextAnim>
          </div>
        </div>
      </div>
    </div>
  );
};

// <Animations> //
const ImageAnim = ({
  children,
  index,
}: {
  children: React.ReactElement;
  index: number;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={600}
        key={index}
        classNames={{
          enter: styles.imageAnimEnter,
          enterActive: styles.imageAnimEnterActive,
          enterDone: styles.imageAnimEnterDone,
          exit: styles.onExit,
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

const TextAnim = ({
  children,
  index,
}: {
  children: React.ReactElement;
  index: number;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={600}
        key={index}
        classNames={{
          enter: styles.textAnimEnter,
          enterActive: styles.textAnimEnterActive,
          exit: styles.onExit,
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

const destinations = [
  {
    name: "Moon",
    images: {
      png: "/images/destination/image-moon.png",
      webp: "/images/destination/image-moon.webp",
    },
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away " +
      "to help regain perspective and come back refreshed. While you're there, take " +
      "in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/images/destination/image-mars.png",
      webp: "/images/destination/image-mars.webp",
    },
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, " +
      "the tallest planetary mountain in our solar system. It's two and a half times " +
      "the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/images/destination/image-europa.png",
      webp: "/images/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter " +
      "lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, " +
      "hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/images/destination/image-titan.png",
      webp: "/images/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away " +
      "from home (just a few hundred degrees colder!). As a bonus, you get striking views of " +
      "the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
