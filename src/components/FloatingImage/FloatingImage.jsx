import styles from "./FloatingImage.module.scss"; // Import the CSS module

import floatingImg from "../../img/goku-floating.png";

const FloatingImage = () => {
  return (
    <div className={styles.floatingContainer}>
      <img src={floatingImg} alt="Goku Animation" className={styles.floatingImage} />
    </div>
  );
};

export default FloatingImage;
