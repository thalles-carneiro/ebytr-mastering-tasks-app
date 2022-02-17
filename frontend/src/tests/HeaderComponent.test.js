import { render, screen } from '@testing-library/react';

import App from '../App';

import { defaultUser } from './mocks';

describe('Header component tests', () => {
  it('the title is present on the screen', async () => {
    render(<App />);

    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Mastering Tasks');
  });

  it('the username is present on the screen', async () => {
    render(<App />);

    const username = screen.getByText(defaultUser.name);

    expect(username).toBeInTheDocument();
    expect(username).toHaveTextContent('User Test');
  });
});
