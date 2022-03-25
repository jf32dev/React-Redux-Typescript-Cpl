import * as React from 'react';
import styles from './Bookmarks.module.scss';
import { useGetDiverseList } from '../../../hooks/useGetDiverseList';
import bridge from '../../../services/bridge/bridge';
import { Story } from '../../../services/bridge/type/entities';
import Loader from '../../shared/Loader/Loader';
import StoryCard from '../../shared/StoryCard';
import NoContent from '../../shared/NoContent/NoContent';
import CardRow from '../../shared/CardRow/CardRow';

const Bookmarks = () => {
  const [bookmarks, status] = useGetDiverseList(() =>
    bridge.getBookmarkList<Story>({
      entityName: 'story',
      limit: 20,
    })
  );
  return (
    <CardRow className={styles.row}>
      {status === 'loading' && <Loader className={styles.loader} />}
      {status === 'succeeded' && (
        <>
          {bookmarks.length > 0 && (
            <div className={styles['bookmark-item']}>
              {bookmarks.map((story) => (
                <div key={story.id} className={styles['story-item']}>
                  <StoryCard
                    commentCount={story.commentCount}
                    fileCount={story.fileCount}
                    id={story.id}
                    likesCount={story.likesCount}
                    thumbnail={story.thumbnail}
                    title={story.title}
                  />
                </div>
              ))}
            </div>
          )}
          {bookmarks.length === 0 && <NoContent message="No Bookmarks" />}
        </>
      )}
    </CardRow>
  );
};
export default Bookmarks;
