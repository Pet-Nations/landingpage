import React from "react";
import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import SocialIcon from "../icons/SocialIcon";
import TiktokIcon from "../icons/TiktokIcon";
import TelegramIcon from "../icons/TelegramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import TwitterIcon from "../icons/TwitterIcon";
import MainLogo from "../icons/MainLogo";
import DiscordIcon from "../icons/DiscordIcon";
import HeaderFoil from "../icons/HeaderFoil";
import NavItem from "../nav-item";
import Scaleup from "../icons/Scaleup";
import MediaIcon from "../icons/MediaIcon";
import PartnersIcon from "../icons/PartnersIcon";
import ComunityIcon from "../icons/ComunityIcon";

interface Props {
  page?: "models";
}

const MainHeader = ({ page }: Props) => {
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

  const NAV_CONFIGS = [
    {
      name: "FAQ",
      url: "/",
      icon: <Scaleup />,
    },
    {
      name: "MEDIA",
      url: "/stories",
      icon: <ComunityIcon />,
    },
    {
      name: "Partners",
      url: "/about",
      icon: <PartnersIcon />,
    },
    {
      name: "COMMUNITY",
      url: "/faq",
      icon: <MediaIcon />,
    },
  ];

  // backdrop-blur-[94px]
  return (
    <div className="h-10 bg-dark-main pl-[60px] pr-[68px] relative">
      <div className="absolute top-[50%] z-10">
        <Link href={"/"}>
          <MainLogo />
        </Link>
      </div>

      <div className="absolute left-[185px] backdrop-blur-[100px]  top-[40px] z-10 flex flex-row  bg-foil-5 clippy bg-cover ">
        <div className="h-[62px] flex items-center relative z-[2] ">
          {NAV_CONFIGS.map((nav: any) => (
            <NavItem key={nav.url} {...nav} />
          ))}
        </div>
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
