import { classNames } from 'shared/lib';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightThemeIcon from 'shared/assets/icons/light_mode.svg';
import DarkThemeIcon from 'shared/assets/icons/dark_mode.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
      // eslint-disable-next-line i18next/no-literal-string
        <DarkThemeIcon fill="black" />
      ) : (
        <LightThemeIcon />
      )}
    </Button>
  );
};
