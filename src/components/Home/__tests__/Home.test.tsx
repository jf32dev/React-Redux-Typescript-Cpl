import * as React from 'react';
import { screen, within } from '@testing-library/react';
import Home from '../Home';
import { renderWithCompleteProvider } from '../../../test/render/withCompleteProvider';
import { fakeStoryList } from '../../../test/mock/fakeStory';
import { useRecommendedContent } from '../../../hooks/useRecommendedContent';
import { fakeFileList } from '../../../test/mock/fakeFile';
import { store as appStore } from '../../../stores';

jest.mock('../../../services/bridge/base');
jest.mock('../../../hooks/useRecommendedContent');

const entityNumber = 15;
const file = fakeFileList(entityNumber);
const story = fakeStoryList(entityNumber);

beforeEach(() => {
  jest.spyOn(appStore.user, 'getLoginUser').mockResolvedValue();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('it renders properly', () => {
  test('with data that is greater than 0', () => {
    const returnEntities = { file, story };
    (useRecommendedContent as jest.Mock).mockReturnValueOnce([{}, 'idle']);

    const { rerender } = renderWithCompleteProvider(<Home />);
    expect(screen.queryByTestId('file-gallery')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('list').length).toEqual(0);

    (useRecommendedContent as jest.Mock).mockReturnValueOnce([
      returnEntities,
      'succeeded',
    ]);
    rerender(<Home />);
    const { getAllByRole } = within(screen.getByTestId('file-gallery'));
    const fileCardList = getAllByRole('list');
    expect(fileCardList.length).toEqual(entityNumber);

    fileCardList.forEach((filecard, index) => {
      const { getByText, getByRole } = within(filecard);
      // check that filecard is actually in display
      expect(filecard.querySelector('.card')).toBeInTheDocument();
      expect(filecard.querySelector('.card > .thumbnail')).toBeInTheDocument();
      expect(filecard.querySelector('.card > .body')).toBeInTheDocument();

      expect(getByRole('img')).toHaveAttribute('src', file[index].thumbnail);
      expect(getByRole('heading')).toHaveTextContent(file[index].description);
      expect(getByText(/category/i)).toHaveTextContent(file[index].category);
      expect(getByText(/created/i)).toHaveTextContent(
        new Date(file[index].createDate * 1000).toDateString()
      );
    });
  });

  test('with no data', () => {
    const returnEntities = {
      file: [],
      story: [],
    };
    (useRecommendedContent as jest.Mock).mockReturnValueOnce([{}, 'idle']);

    const { rerender } = renderWithCompleteProvider(<Home />);
    expect(screen.queryByTestId('file-gallery')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('list').length).toEqual(0);

    (useRecommendedContent as jest.Mock).mockReturnValueOnce([
      returnEntities,
      'succeeded',
    ]);
    rerender(<Home />);
    expect(screen.queryByTestId('file-gallery')).not.toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        if (element) {
          return (
            element.tagName.toLocaleLowerCase() === 'div' &&
            /no recommended/i.test(content)
          );
        }
        return false;
      })
    ).toBeInTheDocument();
  });
});
