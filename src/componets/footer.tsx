import React from "react";

interface footerProps {}

export const Footer: React.FC<footerProps> = ({}) => {
  return (
    <>
      <div
        className="absolute inset-x-0 bottom-0 grid place-items-center py-8 bg-materialUI-LightPrimary dark:bg-materialUI-DarkOnPrimaryContainer rounded-lg shadow
       align-middle hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary"
      >
        © 2023 Contact: vaughnallen97@gmail.com
      </div>
    </>
  );
};

export default Footer;
