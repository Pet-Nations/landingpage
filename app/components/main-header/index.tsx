import React from "react";
import DiscordIcon from "../icons/discordIcon";
import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import SocialIcon from "../icons/SocialIcon";
import TiktokIcon from "../icons/TiktokIcon";
import TelegramIcon from "../icons/TelegramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import TwitterIcon from "../icons/TwitterIcon";
import MainLogo from "../icons/MainLogo";

const MainHeader = () => {
  const HEADER_ICON = [
    {
      icon: <DiscordIcon />,
      url: "/test",
    },
    {
      icon: <FacebookIcon />,
      url: "/test",
    },
    {
      icon: <SocialIcon />,
      url: "/test",
    },
    {
      icon: <TiktokIcon />,
      url: "/test",
    },
    {
      icon: <TelegramIcon />,
      url: "/test",
    },
    {
      icon: <YoutubeIcon />,
      url: "/test",
    },
    {
      icon: <TwitterIcon />,
      url: "/test",
    },
  ];

  return (
    <div className="h-10 bg-dark-main pl-[60px] pr-[68px] relative">
      <div className="absolute top-[50%] z-10">
        <Link href={"/"}>
          <MainLogo />
        </Link>
      </div>
      <div className="ml-auto w-fit h-full flex items-center justify-center gap-x-2 ">
        {HEADER_ICON.map((el: any) => (
          <Link
            className="h-10 w-10 flex items-center justify-center hover:bg-[#FF9F46]"
            key={el.url}
            href={el.url}
          >
            {el.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainHeader;
