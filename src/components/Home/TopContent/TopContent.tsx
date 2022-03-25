import * as React from 'react';
import styles from './TopContent.module.scss';
import { useGetDiverseList } from '../../../hooks/useGetDiverseList';
import bridge from '../../../services/bridge/bridge';
import { Story } from '../../../services/bridge/type/entities';
import Loader from '../../shared/Loader/Loader';
import StoryCard from '../../shared/StoryCard';
import NoContent from '../../shared/NoContent/NoContent';
import CardRow from '../../shared/CardRow/CardRow';

const TopContent = () => {
  const [topContent, status] = useGetDiverseList(() =>
    bridge.getRecommendedList<Story>({
      entityName: 'story',
      limit: 20,
    })
  );
  return (
    <CardRow className={styles.row}>
      {status === 'loading' && <Loader className={styles.loader} />}
      {status === 'succeeded' && (
        <>
          {topContent.length > 0 && (
            <div className={styles['top-content-item']}>
              {topContent.map((story) => (
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
          {topContent.length === 0 && <NoContent message="No Top Contents" />}
        </>
      )}
    </CardRow>
  );
};
export default TopContent;
