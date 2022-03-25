import * as React from 'react';
import cx from 'classnames';
import styles from './StoryCard.module.scss';
import like from '../../../assets/images/like.png';
import comment from '../../../assets/images/Comment.png';
import file from '../../../assets/images/file.png';
import { Story } from '../../../services/bridge/type/entities';
import { decodeEntities } from '../../../utils/htmlEntities';
import { useOpenEntity } from '../../../hooks/useOpenEntity';

type Props = {
  className?: string;
} & Partial<
  Pick<
    Story,
    'title' | 'likesCount' | 'commentCount' | 'fileCount' | 'id' | 'thumbnail'
  >
>;
const StoryCard = ({
  className,
  title,
  thumbnail,
  id,
  likesCount,
  commentCount,
  fileCount,
}: Props) => {
  const [openStory] = useOpenEntity();
  const handleStoryClick = (storyId: number) => () => {
    openStory('story', storyId);
  };
  return (
    <div
      className={cx(styles.story, id, className)}
      onClick={handleStoryClick(id as number)}
    >
      <div className={styles.thumbnail}>
        <img alt="Content Thumbnail" src={thumbnail} />
        <div className={styles['icon-top']}>
          {!!likesCount && likesCount > 0 && (
            <div>
              <img alt="like" src={like} />
              <span>{likesCount}</span>
            </div>
          )}
          {!!commentCount && commentCount > 0 && (
            <div>
              <img alt="comment" src={comment} />
              <span>{commentCount}</span>
            </div>
          )}
        </div>
        {!!fileCount && fileCount > 0 && (
          <div className={styles['icon-bottom']}>
            <div>
              <img alt="file" className={styles.image} src={file} />
              <span>{fileCount}</span>
            </div>
          </div>
        )}
      </div>
      <figcaption className={styles.caption}>
        <p>{decodeEntities(title)}</p>
      </figcaption>
    </div>
  );
};

export default StoryCard;
