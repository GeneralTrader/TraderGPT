import React, { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";
import clsx from "clsx";
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const DefaultLayout = (props: LayoutProps) => {
  const [ t ] = useTranslation();
  const [brand, setBrand] = React.useState<string>("TRUSTHELIX");
  const description =
    t('Assemble, configure, and deploy autonomous AI Agents in your browser.');
  return (
    <div
      className={clsx(
        "flex flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]",
        props.centered && "items-center justify-center"
      )}
    >
      <Head>
        <title>DayTrade Ai</title>
        <meta name="description" content={description} />
        <meta name="twitter:site" content="@TraderGPT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TraderGPT 📈" />
        <meta name="twitter:description" content={description} />
        {brand === 'GREENCHART' && <meta
          name="twitter:image"
          content="https://tradergpt.greenchart.com/banner.png"
        />}
        {brand === 'TRUSTHELIX' && <meta
          name="twitter:image"
          content="https://daytradeai.trusthelix.com/banner.png"
        />}
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="640" />
        <meta
          property="og:title"
          content="DayTrade Ai: Autonomous AI for Day Traders"
        />
        <meta
          property="og:description"
          content="Design, refine, and leverage your AI-based Day Trading Coach."
        />
        {brand === 'GREENCHART' && <meta property="og:url" content="https://tradergpt.greenchart.com/" />}
        {brand === 'TRUSTHELIX' && <meta property="og:url" content="https://daytradeai.trusthelix.com/" />}
        {brand === 'GREENCHART' && <meta
          property="og:image"
          content="https://tradergpt.greenchart.com/banner.png"
        />}
        {brand === 'TRUSTHELIX' && <meta
          property="og:image"
          content="https://daytradeai.trusthelix.com/banner.png"
        />}
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DottedGridBackground
        className={clsx("min-w-screen min-h-screen", props.className)}
      >
        {props.children}
      </DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
