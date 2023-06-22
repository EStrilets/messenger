"use client";

import Link from "next/link";
import clsx from "clsx";

interface DesktopItemProps {
  key: string;
  href: string;
  label: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  key,
  href,
  label,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleOnClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <li onClick={handleOnClick}
    className={clsx(`
        group
        flex
        gap-x-3
        rounded-md
        p-3
        text-sm
        font-semibold
        text-gray-500
        hover:text-black
        hover:bg-gray-100
    `, active && 'bg-gray-100 text-black')}
    >
      <Link href={href}>
        <Icon className='h-6 w-6 shrink-0'/>
        <span className="sr-only">{label}</span>
      </Link>
    </li> 
  );
};

export default DesktopItem;
