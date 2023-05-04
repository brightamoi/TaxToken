import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import AOS from "aos";
import Features from "../components/Features/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ROCKET Doge - To the moon!</title>
        <meta
          name="description"
          content="Buy and sell ROCKET Doge, the next big thing in cryptocurrency!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul>Features</ul>
        <a>Benefits How to buy Tokenomics</a>
      </nav>

      <main>
        <h1 className={styles.title}>ROCKET Doge</h1>
        <p className={styles.container}>The fastest way to the moon!</p>
        <div className="flex justify-center my-8">
          <img
            src="/dogerocket.jpeg"
            alt="ROCKET Doge logo"
            className="w-1/2"
          />
        </div>
      </main>
      <Features></Features>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-2">Benefits</h2>
        <ul className="list-disc list-inside">
          <li>Potential for high returns</li>
          <li>Diversify your investment portfolio</li>
          <li>Support a community-driven project</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-2">How to buy</h2>
        <ul className="list-disc list-inside">
          <li>Create a Wallet</li>
          <li>Get Some ETH</li>
          <li>Go to Uniswap </li>
          <li>Switch ETH for $ROCKETDOGE</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-2">Tokenomics</h2>
        <ul className="list-disc list-inside">
          <p className="text-xl text-center my-4">Token supply : 700,000,000</p>
          <li>xxxx number of token for liquidity pool</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-2">Roadmap</h2>
        <ul className="list-disc list-inside">
          <li> </li>
        </ul>
      </div>

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
          <p className>© 2023 ROCKET Doge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
