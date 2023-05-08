import styles from "/styles/Home.module.css";
import "@picocss/pico";
const Features = () => {
  return (
    <article style={{ backgroundColor: "blue" }}>
      <div className="my-8">
        <h2 className={styles.title}>Features</h2>
        <ul className="list-disc list-inside">
          <li>2% of each transaction redistributed to holders</li>
          <li>Decentralized network</li>
        </ul>
      </div>
    </article>
  );
};

export default Features;
