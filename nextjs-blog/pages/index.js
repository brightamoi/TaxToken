import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "@picocss/pico";

import AOS from "aos";
import Features from "../components/Features/index";

export default function Home() {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Head>
        <title>ROCKET Doge - To the moon!</title>
        <meta
          name="description"
          content="Buy and sell ROCKET Doge, the next big thing in cryptocurrency!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul>
          <li>
            <strong>
              Rocket Doge{" "}
              <img
                src="/dogerocket.jpeg"
                alt="ROCKET Doge logo"
                className={styles.title}
                width="100"
              />
            </strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Benefits</a>
          </li>
          <li>
            <a href="#">How to buy</a>
          </li>
          <li>
            <a href="#">Tokenomics</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={styles.title}>ROCKET Doge</h1>
        <p className={styles.description}>The fastest way to the moon!</p>
        <div className="flex justify-center my-8">
          <img
            src="/dogerocket.jpeg"
            alt="ROCKET Doge logo"
            width="500"
            style={{ background: "transparent" }}
          />
        </div>
      </main>
      <Features></Features>
      <article style={{ backgroundColor: "blue" }}>
        <div>
          <h2 className={styles.title}>Benefits</h2>
          <ul className="list-disc list-inside">
            <li>Potential for high returns</li>
            <li>Diversify your investment portfolio</li>
            <li>Support a community-driven project</li>
          </ul>
        </div>
      </article>

      <article style={{ backgroundColor: "blue" }}>
        <div className="my-8">
          <h2 className={styles.title}>How to buy</h2>
          <ul className="list-disc list-inside">
            <li>Create a Wallet</li>
            <li>Get Some ETH</li>
            <li>Go to Uniswap </li>
            <li>Switch ETH for $ROCKETDOGE</li>
          </ul>
        </div>
      </article>

      <article style={{ backgroundColor: "blue" }}>
        <div className="my-8">
          <h2 className={styles.title}>Tokenomics</h2>
          <ul className="list-disc list-inside">
            <p className="text-xl text-center my-4">
              Token supply : 700,000,000
            </p>
            <li>xxxx number of token for liquidity pool</li>
          </ul>
        </div>
      </article>

      <article style={{ backgroundColor: "blue" }}>
        <div className="my-8">
          <h2 className={styles.title}>Roadmap</h2>
          <ul className="list-disc list-inside">
            <li> </li>
          </ul>
        </div>
      </article>

      <footer>
        <div className={styles.footer}>
          <a
            href="https://twitter.com/rocketdoge"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <img
              src="/twitterlogo.png"
              alt="Twitter logo"
              className="w-8 h-8"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://t.me/rocketdoge"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <img
              src="/telegramlogo.png"
              alt="Telegram logo"
              className="w-8 h-8"
              width={50}
              height={50}
            />
          </a>
          <p>
            {" "}
            <strong>© 2023 ROCKET Doge. All rights reserved.</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
