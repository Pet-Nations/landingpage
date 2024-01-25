"use client";

import LoadingLogo from "../../icons/loadingLogo";

interface Props {
  showLoading: boolean;
}

const Loading = ({ showLoading }: Props) => {
  return (
    <div className={`animate-pulse flex flex-col items-center gap-y-6 }`}>
      <LoadingLogo />
      <p className="text-2xl font-light leading-6">LOADING IN PET NATIONS</p>
    </div>
  );
};

export default Loading;
