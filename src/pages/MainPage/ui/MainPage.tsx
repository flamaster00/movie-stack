import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('mainpage');
  return (
    <div>
      {t('MainPage')}
      <Counter />
    </div>
  );
};

export default MainPage;
