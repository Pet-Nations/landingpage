"use client";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "../icons/MainLogo";
import NavItem from "../nav-item";

import { HEADER_ICON, NAV_CONFIGS } from "@/app/configs";
import MobileHambugerButton from "./components/MobileHambugerButton";
import headerBg from "/public/images/headerbg.png";
import { useEffect, useRef } from "react";

interface Props {
  page?: "models";
}

const MainHeader = ({ page }: Props) => {
  const refmain = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
    };

    const mainElement = refmain.current;
    if (mainElement) {
      mainElement.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);
  return (
    <div
      ref={refmain}
      className="h-10 bg-dark-main 
      max-[1600px]:pl-[16px]
      max-[1366px]:px-[16px] 
      pl-[60px] pr-[68px] fixed w-full z-[1000] max-[1366px]:h-[50.6px]   "
    >
      <div className="absolute top-[50%] z-50  max-[1366px]:static max-[1366px]:flex items-center justify-between  ">
        <Link className="inline-block max-[1366px]:hidden  " href={"/"}>
          <MainLogo />
        </Link>
        <Link className="hidden max-[1366px]:block " href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="47"
            viewBox="0 0 62 47"
            fill="none"
          >
            <path d="M62 0H0V46.6422H62V0Z" fill="#1A1A1A" />
            <path
              d="M35.8041 28.1436C34.1216 28.1436 33.209 29.1067 33.209 30.7916V37.3276C33.209 39.0125 34.1216 39.9756 35.8041 39.9756H38.0285C39.7111 39.9756 40.6237 39.0125 40.6237 37.3276V30.7916C40.6237 29.1083 39.7126 28.1436 38.0285 28.1436H35.8041ZM36.6608 30.6961H37.1727V37.4049H36.6608V30.6961Z"
              fill="#FFF4E9"
            />
            <path
              d="M16.6867 28.1436C15.0223 28.1436 14.1191 29.1201 14.1191 30.8286V39.9756H17.5339V36.4079H18.0403V39.9756H21.455V30.8286C21.455 29.1217 20.5518 28.1436 18.8874 28.1436H16.6867ZM17.5339 30.7324H18.0403V33.6037H17.5339V30.7324Z"
              fill="#FFF4E9"
            />
            <path
              d="M15.7972 5.89941H6.15332V26.645H13.0223V19.2168H13.0238C12.866 17.5201 12.616 15.6617 12.2642 15.0448C12.2642 15.0448 12.0678 14.6591 11.9061 14.4911C11.3886 13.9492 10.6858 13.0878 11.0037 12.0071C11.1354 11.5607 11.4218 11.1852 11.8217 10.9651C12.1356 10.7939 12.3565 10.5589 12.5126 10.2386C12.5584 10.1408 12.6128 10.0485 12.6728 9.96097C13.0151 9.45613 13.5602 9.12878 14.1763 9.12878C14.338 9.12878 14.4957 9.14929 14.6448 9.19267C14.9524 9.28181 15.2388 9.28181 15.5495 9.19267C15.6978 9.14929 15.8556 9.12878 16.0165 9.12878C16.6318 9.12878 17.1784 9.45613 17.5208 9.96097C17.5799 10.0485 17.6328 10.1408 17.6793 10.2386C17.8363 10.5589 18.0564 10.7939 18.3703 10.9651C18.7702 11.1852 19.0566 11.5607 19.1883 12.0071C19.3106 12.4236 19.2885 12.8772 19.1473 13.2874C19.0227 13.6423 18.5951 14.1298 18.2536 14.5068C17.6604 14.9399 17.2912 17.3063 17.0917 19.1229C19.6766 18.7254 21.0617 17.0728 21.0617 14.4461V10.6733C21.0617 7.63557 19.212 5.89941 15.7972 5.89941ZM18.3293 12.3455C18.263 12.1239 18.1242 11.9637 17.9373 11.8935C17.7866 11.8375 17.6154 11.8454 17.4569 11.9204C17.4403 11.9282 17.4237 11.9369 17.408 11.9464C17.393 11.9543 17.3764 11.9637 17.3614 11.9748C17.3457 11.9842 17.3307 11.9961 17.3141 12.0087C17.3031 12.0142 17.2952 12.0221 17.2857 12.03C17.2723 12.0395 17.2573 12.0537 17.2447 12.0671C17.2005 12.1065 17.1611 12.1523 17.1225 12.2012C17.1106 12.2177 17.0996 12.2343 17.0901 12.2517C17.0846 12.2572 17.0791 12.2635 17.0767 12.2706C17.0649 12.2911 17.0538 12.31 17.0412 12.3313C17.0128 12.3842 16.9868 12.4402 16.967 12.5001C16.8905 12.717 16.8826 12.9466 16.9394 13.1469C17.0033 13.367 17.1445 13.5271 17.3315 13.5981C17.3575 13.6084 17.3851 13.6171 17.4135 13.621C17.4238 13.625 17.438 13.6265 17.4482 13.6273C17.4537 13.6289 17.4569 13.6289 17.4624 13.6289C17.4726 13.6321 17.4853 13.6328 17.4963 13.6328C17.5082 13.6344 17.5216 13.6344 17.5342 13.6344C17.6265 13.6344 17.7212 13.6131 17.8111 13.5705C18.0312 13.4672 18.2086 13.2574 18.3025 12.9923C18.3782 12.7754 18.3877 12.5459 18.3293 12.3455ZM16.9331 11.2065C16.9331 11.1876 16.9315 11.167 16.9284 11.1497C16.9284 11.1426 16.9284 11.1347 16.926 11.1276C16.9244 11.1047 16.9221 11.0834 16.9181 11.0598C16.915 11.0345 16.9095 11.0069 16.9055 10.9825C16.9032 10.9675 16.9 10.9525 16.8945 10.9375C16.8826 10.8744 16.8621 10.8113 16.8408 10.7521C16.8314 10.7285 16.8227 10.7088 16.8132 10.6867C16.7864 10.6267 16.7564 10.5715 16.7241 10.5194C16.7186 10.51 16.713 10.5021 16.7075 10.4942C16.691 10.4713 16.6752 10.4477 16.6547 10.4264C16.6492 10.4177 16.6436 10.4098 16.6357 10.4019C16.6247 10.3869 16.6129 10.3735 16.5979 10.3609C16.5868 10.3491 16.5774 10.3396 16.5679 10.3309C16.5513 10.3151 16.534 10.3002 16.5158 10.2867C16.5079 10.2781 16.4985 10.2718 16.4874 10.2631C16.4867 10.2623 16.4851 10.2591 16.4835 10.2591C16.463 10.2457 16.4441 10.2323 16.4228 10.2197C16.3612 10.1818 16.295 10.1558 16.2295 10.14C16.2082 10.1329 16.1861 10.1306 16.1633 10.1266C16.1633 10.1266 16.1617 10.1266 16.1609 10.1266C16.1325 10.1219 16.1049 10.1195 16.0749 10.1195C15.8335 10.1195 15.604 10.2568 15.4431 10.4942C15.2932 10.7127 15.2135 10.9975 15.2135 11.3004C15.2135 11.6025 15.2932 11.8888 15.4431 12.1065C15.604 12.3439 15.8335 12.4796 16.0749 12.4796C16.3155 12.4796 16.5458 12.3439 16.7075 12.1065C16.8558 11.8888 16.9371 11.6025 16.9371 11.3004C16.9371 11.2688 16.9339 11.238 16.9331 11.2065Z"
              fill="#FF9F46"
            />
            <path
              d="M32.6567 28.1436H29.3438V39.9756H32.6567V28.1436Z"
              fill="#FFF4E9"
            />
            <path
              d="M22.0078 28.1436V31.1694H23.755V39.9756H27.1232V31.1694H28.8704V28.1436H22.0078Z"
              fill="#FFF4E9"
            />
            <path
              d="M42.1221 5.89941V11.2041H45.6559V26.645H52.4696V11.2041H56.005V5.89941H42.1221Z"
              fill="#FF9F46"
            />
            <path
              d="M25.3994 5.89941V26.645H37.6259V21.427H32.3235V18.7206H37.2827V13.677H32.3235V11.0574H37.6259V5.89941H25.3994Z"
              fill="#FF9F46"
            />
            <path
              d="M51.4778 28.1443C49.8102 28.1443 48.9062 29.1067 48.9062 30.7916V32.8843C48.9062 34.5692 49.811 35.5299 51.4778 35.5299H52.7004V37.2258H52.1932V35.7342H48.9062V37.3276C48.9062 39.0125 49.811 39.9748 51.4778 39.9748H53.4332C55.1007 39.9748 56.0047 39.0125 56.0047 37.3276V35.0732C56.0047 33.4057 55.1039 32.4528 53.4411 32.426H52.1972V30.9249H52.7043V32.0757H55.8927V30.7908C55.8927 29.1075 54.9879 28.1436 53.3212 28.1436H51.4778V28.1443Z"
              fill="#FFF4E9"
            />
            <path
              d="M41.0967 28.1436V39.9756H44.4775V30.8515H44.9728V39.9756H48.3537V30.8665C48.3537 29.1351 47.4434 28.1436 45.7616 28.1436H43.6879C43.6161 28.1436 43.5483 28.1483 43.4788 28.1522V28.1436H41.0967Z"
              fill="#FFF4E9"
            />
            <path
              d="M6.31055 28.1436V39.9756H9.69137V30.8515H10.1867V39.9756H13.5676V30.8665C13.5676 29.1351 12.6573 28.1436 10.9755 28.1436H8.90335C8.83157 28.1436 8.76372 28.1483 8.69431 28.1522V28.1436H6.31055Z"
              fill="#FFF4E9"
            />
            <path
              d="M13.2884 12.9445C13.2845 12.991 13.2774 13.0352 13.2679 13.0802C13.2624 13.1022 13.2585 13.1251 13.2521 13.1464C13.245 13.1685 13.2379 13.1874 13.23 13.2079C13.2277 13.2174 13.223 13.2269 13.219 13.2379C13.2111 13.2576 13.2001 13.2797 13.189 13.3002C13.1796 13.3192 13.1677 13.3381 13.1567 13.3554C13.1512 13.3641 13.1456 13.3704 13.1417 13.3791C13.1298 13.3949 13.1164 13.4114 13.1022 13.4264C13.1022 13.4264 13.1022 13.4264 13.1022 13.428C13.0873 13.4438 13.0723 13.4619 13.0565 13.4753C13.0455 13.4856 13.0337 13.4959 13.0218 13.5053C12.9737 13.544 12.9201 13.5755 12.8609 13.5976C12.7962 13.6221 12.7276 13.6339 12.6574 13.6339C12.5651 13.6339 12.4712 13.6126 12.3805 13.57C12.1604 13.4667 11.9829 13.2568 11.8906 12.9918C11.8149 12.7749 11.8055 12.5453 11.8646 12.345C11.9285 12.1233 12.0681 11.9632 12.2559 11.893C12.4065 11.837 12.5761 11.8449 12.7363 11.9198C12.8428 11.9695 12.9398 12.046 13.0218 12.1415C13.1086 12.2417 13.1788 12.3631 13.2261 12.4996C13.2277 12.5051 13.2285 12.5098 13.23 12.5154C13.2774 12.6566 13.2979 12.8033 13.2884 12.9445Z"
              fill="#FF9F46"
            />
            <path
              d="M14.9778 11.3C14.9778 11.6021 14.8981 11.8884 14.7498 12.1061C14.5881 12.3436 14.3594 12.4792 14.1172 12.4792C14.0983 12.4792 14.0794 12.4785 14.0605 12.4761C13.8396 12.4572 13.6329 12.3246 13.4838 12.1061C13.3371 11.8884 13.2559 11.6021 13.2559 11.3C13.2559 11.0136 13.3284 10.7439 13.4601 10.5309C13.468 10.5183 13.4759 10.5057 13.4838 10.4938C13.6455 10.2564 13.8759 10.1191 14.1172 10.1191C14.3594 10.1191 14.5881 10.2564 14.7498 10.4938C14.8981 10.7123 14.9778 10.9971 14.9778 11.3Z"
              fill="#FF9F46"
            />
            <path
              d="M16.9364 11.3C16.9364 11.6021 16.8552 11.8884 16.7069 12.1061C16.5452 12.3436 16.3148 12.4792 16.0743 12.4792C15.8329 12.4792 15.6034 12.3436 15.4424 12.1061C15.2926 11.8884 15.2129 11.6021 15.2129 11.3C15.2129 10.9971 15.2926 10.7123 15.4424 10.4938C15.6034 10.2564 15.8329 10.1191 16.0743 10.1191C16.1042 10.1191 16.1318 10.1215 16.1602 10.1262C16.161 10.1262 16.1626 10.1262 16.1626 10.1262C16.1855 10.1302 16.2076 10.1325 16.2289 10.1396C16.2943 10.1554 16.3606 10.1815 16.4221 10.2193C16.4434 10.2319 16.4624 10.2453 16.4829 10.2588C16.4845 10.2588 16.486 10.2619 16.4868 10.2627C16.4978 10.2714 16.5073 10.2777 16.5152 10.2864C16.5333 10.2998 16.5507 10.3148 16.5673 10.3305C16.5767 10.3392 16.5862 10.3487 16.5972 10.3605C16.6122 10.3731 16.624 10.3865 16.6351 10.4015C16.643 10.4094 16.6485 10.4173 16.654 10.426C16.6745 10.4473 16.6903 10.4709 16.7069 10.4938C16.7124 10.5017 16.7179 10.5096 16.7234 10.5191C16.7558 10.5711 16.7857 10.6263 16.8126 10.6863C16.822 10.7084 16.8307 10.7281 16.8402 10.7518C16.8615 10.8109 16.882 10.874 16.8938 10.9371C16.8994 10.9521 16.9025 10.9671 16.9049 10.9821C16.9088 11.0065 16.9143 11.0342 16.9175 11.0594C16.9214 11.0831 16.9238 11.1044 16.9254 11.1272C16.9277 11.1343 16.9277 11.1422 16.9277 11.1493C16.9309 11.1667 16.9325 11.1872 16.9325 11.2061C16.9333 11.2377 16.9364 11.2684 16.9364 11.3Z"
              fill="#FF9F46"
            />
            <path
              d="M17.2937 15.0516C17.2937 15.3056 17.2148 15.4997 17.0578 15.6298C17.0089 15.6708 16.9529 15.7032 16.8937 15.7292C16.8732 15.7371 16.8543 15.745 16.8322 15.7505C16.8014 15.7631 16.7683 15.771 16.7336 15.7781C16.7147 15.7836 16.6926 15.786 16.6713 15.7892C16.6626 15.7915 16.6547 15.7931 16.6453 15.7931C16.6153 15.7955 16.5853 15.7994 16.5546 15.801C16.5214 15.8026 16.4875 15.8034 16.4536 15.8034C16.3913 15.8034 16.325 15.801 16.2595 15.7955C16.2098 15.7915 16.1578 15.786 16.1089 15.7789C16.0576 15.7726 16.0071 15.7647 15.9574 15.756C15.8565 15.741 15.7563 15.7221 15.6569 15.7032C15.4439 15.6637 15.2404 15.6259 15.0953 15.6259C14.9296 15.6259 14.7143 15.6653 14.4847 15.7087C14.2213 15.756 13.9554 15.8065 13.7149 15.8065C13.6731 15.8065 13.6312 15.8034 13.5918 15.801C13.5902 15.801 13.5886 15.801 13.5886 15.801C13.5484 15.797 13.509 15.7915 13.4711 15.7844C13.4057 15.7726 13.3417 15.7537 13.2834 15.7261C13.266 15.7182 13.2471 15.7103 13.2305 15.7008C13.1966 15.6827 13.1627 15.6598 13.1343 15.6338C12.9765 15.5036 12.8984 15.308 12.8984 15.0516C12.8984 14.938 12.9087 14.8229 12.9292 14.7046C12.9363 14.6762 12.9418 14.6462 12.9465 14.6162C12.9576 14.5673 12.9702 14.516 12.9852 14.4671C12.9915 14.4466 12.997 14.4277 13.0041 14.4072C13.0096 14.3867 13.016 14.3669 13.0223 14.3464C13.0294 14.3267 13.0365 14.3062 13.0444 14.2849C13.0586 14.2486 13.0728 14.2108 13.0893 14.1721C13.1114 14.1224 13.1311 14.0735 13.1548 14.0262C13.1777 13.9781 13.2037 13.9292 13.2305 13.8818C13.2526 13.844 13.2739 13.8061 13.2968 13.7682C13.3149 13.7398 13.3355 13.7099 13.3544 13.6799C13.3836 13.6349 13.4151 13.59 13.4474 13.5482C13.4751 13.5119 13.5019 13.4772 13.5303 13.4425C13.6936 13.2453 13.8718 13.0812 14.0612 12.9518C14.383 12.7341 14.7364 12.6182 15.0953 12.6182C15.6664 12.6182 16.2233 12.91 16.6626 13.4425C16.7549 13.5521 16.8393 13.672 16.9111 13.7935C16.93 13.8219 16.9482 13.8534 16.9639 13.8858C16.986 13.9213 17.0066 13.9583 17.0239 13.9962C17.0507 14.053 17.0783 14.1114 17.1028 14.1682C17.1312 14.2336 17.154 14.2983 17.1761 14.3622C17.1864 14.3961 17.1958 14.4277 17.2045 14.46C17.2148 14.4916 17.2235 14.5239 17.2314 14.5578C17.2629 14.6856 17.2818 14.8126 17.2881 14.9365C17.2913 14.938 17.2881 14.9388 17.2881 14.9388C17.2929 14.9775 17.2937 15.0153 17.2937 15.0516Z"
              fill="#FF9F46"
            />
            <path
              d="M18.3015 12.9918C18.2076 13.2568 18.0302 13.4667 17.8101 13.57C17.7202 13.6126 17.6255 13.6339 17.5332 13.6339C17.5206 13.6339 17.5072 13.6339 17.4953 13.6323C17.4843 13.6323 17.4717 13.6315 17.4614 13.6284C17.4559 13.6284 17.4528 13.6284 17.4472 13.6268C17.437 13.626 17.4228 13.6244 17.4125 13.6205C17.3841 13.6165 17.3565 13.6079 17.3305 13.5976C17.1435 13.5266 17.0023 13.3665 16.9384 13.1464C16.8816 12.9461 16.8895 12.7165 16.9661 12.4996C16.9858 12.4396 17.0118 12.3836 17.0402 12.3308C17.0528 12.3095 17.0639 12.2906 17.0757 12.2701C17.0781 12.263 17.0836 12.2566 17.0891 12.2511C17.0986 12.2338 17.1096 12.2172 17.1215 12.2006C17.1601 12.1517 17.1995 12.106 17.2437 12.0665C17.2563 12.0531 17.2713 12.0389 17.2847 12.0295C17.2942 12.0216 17.3021 12.0137 17.3131 12.0082C17.3297 11.9955 17.3447 11.9837 17.3605 11.9742C17.3754 11.9632 17.392 11.9537 17.407 11.9459C17.4228 11.9364 17.4393 11.9277 17.4559 11.9198C17.6144 11.8449 17.7856 11.837 17.9363 11.893C18.1232 11.9632 18.2621 12.1233 18.3283 12.345C18.3867 12.5453 18.3772 12.7749 18.3015 12.9918Z"
              fill="#FF9F46"
            />
          </svg>
        </Link>
        {/* //mobile hambuer menu */}
        <div className="hidden max-[1366px]:block">
          <MobileHambugerButton />
        </div>
      </div>

      <div
        className="absolute 
        top-10
      left-[139px] 
      max-[1600px]:left-[105px]
      
      clippy backdrop-blur-[100px] max-[1366px]:hidden"
      >
        <Image src={headerBg} height={62} alt="img" />
      </div>

      <div
        className=" absolute top-10 
       left-[183px] max-[1600px]:left-[105px]

        h-[62px] flex items-center  z-[50] last:pr-0 max-[1366px]:hidden "
      >
        {NAV_CONFIGS.map((nav: any) => (
          <NavItem key={nav.url} {...nav} />
        ))}
      </div>

      <div className="ml-auto w-fit h-full flex items-center justify-center gap-x-2  max-[1366px]:hidden  ">
        {HEADER_ICON.map((el: any, index: any) => (
          <Link
            className="h-10 w-10 flex items-center justify-center"
            key={index}
            href={el.url}
            target="_blank"
          >
            {el.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainHeader;
