import Image from "next/image";
import ComunityIcon from "../components/icons/ComunityIcon";
import DiscordIcon from "../components/icons/DiscordIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import MediaIcon from "../components/icons/MediaIcon";
import PartnersIcon from "../components/icons/PartnersIcon";
import Scaleup from "../components/icons/Scaleup";
import TelegramIcon from "../components/icons/TelegramIcon";
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

import CharacterImgs1 from '../assests/team1.png';
import CharacterImgs2 from '../assests/team2.png';
import CharacterImgs3 from '../assests/team3.png';
import CharacterImgs4 from '../assests/team4.png';
import CharacterImgs5 from '../assests/team5.png';


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

export const IMAGE_COMUNITY_CONFIGS = [
  {
    id: 1,
    title: "CO-FOUNDER & CEO",
    name: 'Genjile',
    imgUrl: "/token",
    image: <Image className='absolute bottom-0 left-[50%] -translate-x-[50%]' width={236} height={262} src={CharacterImgs1} alt="img" />

  },
  {
    id: 2,
    title: "CO-FOUNDER",
    name: 'HOANG NGUYEN',
    imgUrl: "/token",
    image: <Image className='absolute bottom-0 left-[50%] -translate-x-[50%]' width={236} height={262} src={CharacterImgs2} alt="img" />

  },
  {
    id: 3,
    title: "CMO",
    name: 'lewandowski',
    imgUrl: "/token",
    image: <Image className='absolute bottom-0 left-[50%] -translate-x-[50%]' width={236} height={262} src={CharacterImgs3} alt="img" />

  },
  {
    id: 4,
    title: "CTO",
    name: 'LELE NGUYEN',
    imgUrl: "/token",
    image: <Image className='absolute bottom-0 left-[50%] -translate-x-[50%]' width={236} height={262} src={CharacterImgs4} alt="img" />

  },

]

export const NAV_CONFIGS = [
  {
    name: "FAQ",
    url: process.env.NEXT_PUBLIC_FAQ,
    icon: <Scaleup />,
  },
  {
    name: "TEAM",
    // url: "/team",
    url: "#",
    icon: <MediaIcon />,
  },
  {
    name: "Partners",
    // url: "/partners",
    url: "#",
    icon: <PartnersIcon />,
  },
  {
    name: "COMMUNITY",
    url: "/community",
    icon: <ComunityIcon />,
  },
];
export const HEADER_ICON = [
  {
    icon: <DiscordIcon />,
    url: "#",
  },
  {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/petnations24?mibextid=LQQJ4d",
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
    url: "#",
  },
  {
    tag: 'youtube',
    icon: <YoutubeIcon />,
    url: "https://www.youtube.com/channel/UCzYllb_kpUHdzuDKuz1Lylw",
  },
  {
    icon: <TwitterIcon />,
    url: "https://twitter.com/pet_nations",
  },
];
