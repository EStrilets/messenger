"use client";
import clsx from "clsx";
import { on } from "events";
import Link from "next/link";

interface MobileItemProps {
  href: string;
  label: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  label,
  icon: Icon,
  active,
  onClick,
}) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={clsx(`
        group
        flex
        gap-x-3
        text-sm
        leading-6
        font-semibold
        w-full
        justify-content
        p-4
        text-gray-600
        hover:text-black
        hover:bg-gray-100
        items-center
        justify-center
        
      `, active && 'bg-gray-100 text-black')}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
