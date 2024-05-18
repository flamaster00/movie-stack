import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
// can't save without formatting
// eslint-disable-next-line max-len
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('render button', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar'));
  });
  test('toggle collapsed', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle-test');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
