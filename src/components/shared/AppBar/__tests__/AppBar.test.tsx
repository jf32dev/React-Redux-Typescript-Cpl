import * as React from 'react';
import { fireEvent, screen, within } from '@testing-library/react';
import { store } from '../../../../stores';
import AppBar from '../AppBar';
import { renderWithCompleteProvider } from '../../../../test/render/withCompleteProvider';
import { fakeUserBuilder } from '../../../../test/mock/fakeUser';
import { createInitials } from '../utils';
import UserStore from '../../../../stores/UserStore';

jest.mock('../../../../services/bridge/base');

const fakeUserStore = {
  ...store.user,
  state: {
    ...store.user.state,
    status: 'succeeded',
  },
  getLoginUser: () => Promise.resolve(),
};

const fakeUser = fakeUserBuilder({ traits: 'full' });

beforeEach(() => {
  jest
    .spyOn(fakeUserStore, 'getLoginUser')
    .mockImplementation(() => Promise.resolve());
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Navigation Bar render properly', () => {
  test('with user profile', () => {
    renderWithCompleteProvider(<AppBar />, {
      store: {
        user: { ...fakeUserStore, loginUser: fakeUser } as UserStore,
      },
    });

    expect(fakeUserStore.getLoginUser).toBeCalledTimes(1);

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
    expect(navigation.querySelector('svg')).toBeInTheDocument();

    const { getByText, getByRole } = within(screen.getByTestId('profile-test'));
    expect(
      getByText(`${fakeUser.firstName} ${fakeUser.lastName}`)
    ).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', fakeUser.thumbnail);
  });

  test('with user profile and invalid profile picture', () => {
    renderWithCompleteProvider(<AppBar />, {
      store: {
        user: { ...fakeUserStore, loginUser: fakeUser } as UserStore,
      },
    });

    // not testing the rest of appbar anymore just test the profile.
    const { getByText, getByRole, queryByRole } = within(
      screen.getByTestId('profile-test')
    );
    const initials = createInitials(
      `${fakeUser.firstName} ${fakeUser.lastName}`
    );
    fireEvent(getByRole('img'), new Event('error'));

    expect(queryByRole('img')).not.toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(getByText(initials!)).toBeInTheDocument();
  });

  test('with smaller screen, user detail should not be seen', () => {
    renderWithCompleteProvider(<AppBar />, {
      store: {
        user: { ...fakeUserStore, loginUser: fakeUser } as UserStore,
      },
      breakpoint: {
        breakpoint: 'sm',
      },
    });

    // not testing the rest of appbar anymore just test the profile.
    const { queryByText } = within(screen.getByTestId('profile-test'));
    expect(
      queryByText(`${fakeUser.firstName} ${fakeUser.lastName}`)
    ).not.toBeInTheDocument();
  });
});
