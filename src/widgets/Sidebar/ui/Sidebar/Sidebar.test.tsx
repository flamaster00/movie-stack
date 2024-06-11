import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// can't save without formatting
// eslint-disable-next-line max-len

describe('Sidebar', () => {
  test('render button', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar'));
  });
  test('toggle collapsed', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle-test');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
