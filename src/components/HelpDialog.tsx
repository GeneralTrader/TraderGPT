import React from "react";
import { useTranslation } from "next-i18next";
import { FaDiscord, FaFirefoxBrowser, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import Dialog from "./Dialog";
import GreenChartIcon from "../../public/GreenChartIcon.png";

export default function HelpDialog({
  show,
  close,
  brand
}: {
  show: boolean;
  brand: string;
  close: () => void;
}) {
  console.log(globalThis.location);
  const [t] = useTranslation();
  return (
    <Dialog
      header={`${t("Welcome to DayTrade Ai 🤖📈")} `}
      isShown={show}
      close={close}
    >
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p>
          <strong>DayTrade Ai</strong>{" "}
          {t(
            "allows you to configure and deploy Autonomous AI agents. Name your custom AI and have it embark on any goal imaginable. It will attempt to reach the goal by thinking of tasks to do, executing them, and learning from the results 🚀"
          )}
        </p>
        <div>
          <br />
          Currently in beta, we are actively enhancing our platform with:
          <ul className="ml-5 list-inside list-disc">
            <li>A directory of popular AI Coach Goals 📁</li>
            <li>Community Support 🪢</li>
            <li>{`${t("LONG_TERM_MEMORY")} 🧠`}</li>
            <li>{`${t("WEB_BROWSING")} 🌐`}</li>
            <li>{`${t("INTERACTION_WITH_WEBSITES_AND_PEOPLE")} 👨‍👩‍👦`}</li>
          </ul>
          <br />
          <p className="mt-2">🚀 Join us on our journey by following the links below! 🚀</p>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-5">
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://www.youtube.com/@traderspulse101", "_blank")
            }
          >
            <FaYoutube size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open(
                "https://twitter.com/traderspulse101",
                "_blank"
              )
            }
          >
            <FaTwitter size={30} />
          </div>
          {brand === 'GREENCHART' && <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://greenchart.com", "_blank")
            }
          >
            <img height={30} width={30} alt={'greenchart'} src={GreenChartIcon.src}/>
          </div>}
          {brand === 'TRUSTHELIX' && <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://trusthelix.com", "_blank")
            }
          >
            <FaFirefoxBrowser size={30} />
          </div>}
        </div>
      </div>
    </Dialog>
  );
}
