import React from "react";
import Image from "next/image";
import LNCTLogo from "@/components/assets/LNCT-Logo.png";

const LogoContainer: React.FC<{ altText?: string; className?: string }> = ({
  altText = "LNCT Logo",
  className = "",
}) => {
  return (
    <div
      className={` rounded-2xl flex items-center justify-center  ${className}`}
    >
      <Image src={LNCTLogo} alt={altText} className="w-full h-20 object-contain " />
    </div>
  );
};

export default LogoContainer;