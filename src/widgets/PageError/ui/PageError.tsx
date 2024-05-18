import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

export interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  return (

    <div className={classNames(cls.PageError, {}, [className])}>
      {t('Something went wrong')}
    </div>
  );
};
