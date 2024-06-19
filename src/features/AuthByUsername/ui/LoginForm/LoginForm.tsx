import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onUsernameChange = useCallback((v: string) => {
    dispatch(loginActions.setUsername(v));
  }, [dispatch]);

  const onPasswordChange = useCallback((v: string) => {
    dispatch(loginActions.setPassword(v));
  }, [dispatch]);

  const onLoginFormSubmit = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Auth form')} />
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
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        type="submit"
        onClick={onLoginFormSubmit}
        disabled={isLoading}
      >
        {t('Submit login form')}
      </Button>
    </div>
  );
});
