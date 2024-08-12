import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/rubric.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.MAIN,
    text: 'link-main',
    Icon: MainIcon,
  },
  {
    path: RoutePath.ABOUT,
    text: 'link-about',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.PROFILE,
    text: 'link-profile',
    Icon: ProfileIcon,
  },
];
