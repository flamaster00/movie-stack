import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageNotFound.module.scss';

export interface PageNotFoundProps {
  className?: string
}

export const PageNotFound = ({ className }: PageNotFoundProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.PageNotFound, {}, [className])}>
      {t('Page not found')}
    </div>
  );
};
