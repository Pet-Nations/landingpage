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
import CatAvatar from "../components/images/CatAvatar";
import DogAvatar from "../components/images/DogAvatar";
import Economy from "../components/images/Economy";
import OurModel from "../components/images/OurModel";
import RabbitAvatar from "../components/images/RabbitAvatar";
import VisionMap from "../components/images/VisionMap";
import MonkeyAvatar from "../components/images/monkeyAvatar";
import Story from "../stories/page";

export const COMMUNITY_FB_LINK =
  // "https://www.facebook.com/groups/242848220423686/";
  "/";

export const CAR_SIZE = {
  "19201080": {
    width: "767px",
    height: "801px",
  },
};

export const PET_CARDS: any[] = [
  {
    id: 1,
    background2: <Story />,
    avatar: <MonkeyAvatar />,
    name: "OUR STORY",
    imgUrl: "/stories",
    src: "/images/petcard1.png",
  },
  {
    id: 2,
    name: "VISION MAP",
    imgUrl: "/vision",
    background2: <VisionMap />,
    avatar: <DogAvatar />,
    src: "/images/petcard2.png",
  },
  {
    id: 3,
    name: "OUR MODELS",
    imgUrl: "/models",
    background2: <OurModel />,
    avatar: <RabbitAvatar />,
    src: "/images/petcard3.png",
  },
  {
    id: 4,
    name: "ECONOMY",
    imgUrl: "/token",
    background2: <Economy />,
    avatar: <CatAvatar />,
    src: "/images/petcard4.png",
  },
];

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
