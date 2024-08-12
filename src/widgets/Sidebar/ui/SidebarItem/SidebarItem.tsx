import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { SidebarItemType } from '../Sidebar/model/item';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { t } = useTranslation();
  const { item, collapsed } = props;

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [])}
    >
      <item.Icon className={cls.SidebarItemIcon} />
      <span className={cls.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});