import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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

      <main>
        <h1 className="text-5xl font-bold text-yellow-500 text-center my-8">
          ROCKET Doge
        </h1>
        <p className="text-xl text-center my-4">The fastest way to the moon!</p>
        <div className="flex justify-center my-8">
          <img src="/rocketdoge.png" alt="ROCKET Doge logo" className="w-1/2" />
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-2">Features</h2>
          <ul className="list-disc list-inside">
            <li>2% of each transaction redistributed to holders</li>
            <li>Decentralized network</li>
          </ul>
        </div>
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
            <p className="text-xl text-center my-4">
              Token supply : 700,000,000
            </p>
            <li>explaining the potential </li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold mb-2">Roadmap</h2>
          <ul className="list-disc list-inside">
            <li> </li>
          </ul>
        </div>
      </main>

      <footer>
        <div className="flex justify-center my-8">
          <a
            href="https://twitter.com/rocketdoge"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <img
              src="/twitterlogo.svg"
              alt="Twitter logo"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://t.me/rocketdoge"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <img src="/telegram.png" alt="Telegram logo" className="w-8 h-8" />
          </a>
        </div>
        <p className="text-center">© 2023 ROCKET Doge. All rights reserved.</p>
      </footer>
    </div>
  );
}
