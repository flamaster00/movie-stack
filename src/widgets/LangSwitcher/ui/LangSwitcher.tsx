import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t('change language')}
    </Button>
  );
};
