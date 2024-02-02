import ComunityIcon from "../components/icons/ComunityIcon";
import DiscordIcon from "../components/icons/DiscordIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import MediaIcon from "../components/icons/MediaIcon";
import PartnersIcon from "../components/icons/PartnersIcon";
import Scaleup from "../components/icons/Scaleup";
import SocialIcon from "../components/icons/SocialIcon";
import TelegramIcon from "../components/icons/TelegramIcon";
import TiktokIcon from "../components/icons/TiktokIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import YoutubeIcon from "../components/icons/YoutubeIcon";

export const COMMUNITY_FB_LINK =
  // "https://www.facebook.com/groups/242848220423686/";
  "/";

export const NAV_CONFIGS = [
  {
    name: "FAQ",
    url: "/",
    icon: <Scaleup />,
  },
  {
    name: "TEAM",
    url: "/",
    icon: <MediaIcon />,
  },
  {
    name: "Partners",
    url: "/",
    icon: <PartnersIcon />,
  },
  {
    name: "COMMUNITY",
    url: COMMUNITY_FB_LINK,
    icon: <ComunityIcon />,
  },
];
export const HEADER_ICON = [
  {
    icon: <DiscordIcon />,
    url: "/",
  },
  {
    icon: <FacebookIcon />,
    url: "/",
  },
  // {
  //   icon: <SocialIcon />,
  //   url: "/",
  // },
  // {
  //   icon: <TiktokIcon />,
  //   url: "/",
  // },
  {
    icon: <TelegramIcon />,
    url: "/",
  },
  {
    icon: <YoutubeIcon />,
    url: "/",
  },
  {
    icon: <TwitterIcon />,
    url: "https://twitter.com/pet_nations",
  },
];
