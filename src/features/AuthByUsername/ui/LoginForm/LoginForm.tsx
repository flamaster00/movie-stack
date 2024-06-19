import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = (v: string) => {
    setUsername(v);
  };
  const onPasswordChange = (v: string) => {
    setPassword(v);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <label className={cls.loginLabel}>
        {t('enter username')}
        <Input
          type="text"
          value={username}
          onChange={onUsernameChange}
        />
      </label>
      <label className={cls.loginLabel}>
        {t('enter password')}
        <Input
          type="password"
          value={password}
          onChange={onPasswordChange}
        />
      </label>
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} type="submit">
        {t('Submit login form')}
      </Button>
    </div>
  );
};
