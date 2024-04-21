import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

interface TwitterSidebarButton{
  title:string;
  icon:React.ReactNode
}

const sideBarMenuItems : TwitterSidebarButton[]=[
  {
    title:"Home",
    icon: <BiHomeCircle/>
  },
  {
    title:"Explore",
    icon: <BiHomeCircle/>
  },
  {
    title:"Notifications",
    icon: <BiHomeCircle/>
  },
  {
    title:"Messages",
    icon: <BiHomeCircle/>
  },
  {
    title:"Grok",
    icon: <BiHomeCircle/>
  },
  {
    title:"Lists",
    icon: <BiHomeCircle/>
  },
  {
    title:"Premium",
    icon: <BiHomeCircle/>
  },
  {
    title:"Profile",
    icon: <BiHomeCircle/>
  },
  {
    title:"More",
    icon: <BiHomeCircle/>
  },
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 h-screen w-screen px-32">
        <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer">
          <BsTwitterX />
        </div>
        <div>
          <ul>
            {sideBarMenuItems.map(item => <li key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
