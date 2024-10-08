import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onUsernameChange = useCallback((v: string) => {
    dispatch(loginActions.setUsername(v));
  }, [dispatch]);

  const onPasswordChange = useCallback((v: string) => {
    dispatch(loginActions.setPassword(v));
  }, [dispatch]);

  const onLoginFormSubmit = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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

        {/* TODO сделать сообщение ою успехе и закрытие модалки */}
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
