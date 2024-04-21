  import React from "react";
  import { BiHomeCircle } from "react-icons/bi";
  import { BsSlashSquare, BsTwitterX } from "react-icons/bs";
  import { CiCircleMore } from "react-icons/ci";
  import { FaRegEnvelope, FaSearch } from "react-icons/fa";
  import { FaRegUser } from "react-icons/fa";
  import { GoBell } from "react-icons/go";
  import { MdOutlineListAlt } from "react-icons/md";

  interface TwitterSidebarButton {
    title: string;
    icon: React.ReactNode;
  }

  const sideBarMenuItems: TwitterSidebarButton[] = [
    {
      title: "Home",
      icon: <BiHomeCircle />,
    },
    {
      title: "Explore",
      icon: <FaSearch />,
    },
    {
      title: "Notifications",
      icon: <GoBell />,
    },
    {
      title: "Messages",
      icon: <FaRegEnvelope />,
    },
    {
      title: "Grok",
      icon: <BsSlashSquare />,
    },
    {
      title: "Lists",
      icon: <MdOutlineListAlt />,
    },
    {
      title: "Premium",
      icon: <BsTwitterX />,
    },
    {
      title: "Profile",
      icon: <FaRegUser />,
    },
    {
      title: "More",
      icon: <CiCircleMore />,
    },
  ];

  export default function Home() {
    return (
      <div>
        <div className="grid grid-cols-3 gap-4 h-screen w-screen px-32">
          <div>
            <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer">
              <BsTwitterX />
            </div>
            <div>
              <ul>
                {sideBarMenuItems.map((item) => (
                  <li
                    className="flex justify-start items-center gap-2 text-lg py-2 pl-4 cursor-pointer hover:bg-gray-800"
                    key={item.title}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-gray-500 border-2">main feed</div>
          <div>1</div>
        </div>
      </div>
    );
  }
