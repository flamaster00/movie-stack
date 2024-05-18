import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames(
        cls.Navbar,
        {},
        [className],
      )}
    >
      <div
        className={cls.links}
      >
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={cls.mainLink}
        >
          {t('link-main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('link-about')}
        </AppLink>
      </div>
    </div>
  );
};
