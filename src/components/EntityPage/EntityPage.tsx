/* eslint-disable no-nested-ternary */
import * as React from 'react';
import cx from 'classnames';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import styles from './EntityPage.module.scss';
import useStoreSelector from '../../stores';
import Banner from '../shared/Banner';
import { ReactComponent as Back } from '../../assets/images/ Back.svg';
import defaultImage from '../../assets/images/default.png';
import storyBackground from '../../assets/images/storyBackground.png';
import EntityContainer from '../shared/EntityContainer';
import Loader from '../shared/Loader';
import ChannelCard from '../shared/ChannelCard';
import StoryCard from '../shared/StoryCard';
import { TCurrentEntity, TypeEntity } from '../../typedef';
import { CHANNEL_ID } from '../../constants/buttonData';
import { Nullable } from '../../type';
import { decodeEntities } from '../../utils/htmlEntities';

const EntityPage = () => {
  const {
    getEntities,
    entities,
    isLoading,
    object,
    setObject,
    resetObject,
  } = useStoreSelector((store) => store.entity);
  const [tabid, setTabid] = React.useState<number>(0);
  const { type, id } = useParams<TypeEntity>();
  const history = useHistory();

  const handleBackClick = () => {
    if (type === 'tab') {
      resetObject(type);
      history.push(`/`);
    }
    if (type === 'channel') {
      if (object[0].id === CHANNEL_ID) {
        resetObject('tab');
        history.push('/');
      } else {
        history.push(`/tab/${tabid}`);
        resetObject(type);
      }
    }
  };

  const handleChannelClick = (item: Nullable<TCurrentEntity>) => () => {
    if (item) {
      setObject(item);
      history.push(`/${item.type}/${item.id}`);
    }
  };

  React.useEffect(() => {
    if (type === 'tab') {
      getEntities('channel', Number(id));
      setTabid(Number(id));
    }
    if (type === 'channel') {
      getEntities('story', Number(id));
    }
  }, [type, getEntities, id]);

  return (
    <div className={styles.entity}>
      <Banner
        BannerImg={type === 'tab' ? object[0].img : storyBackground}
        className={styles.banner}
        contentClassName={styles['header-item']}
      >
        <Back className={styles.back} onClick={handleBackClick} />

        <div className={styles.heading}>
          {type === 'tab'
            ? decodeEntities(object[0].title)
            : decodeEntities(object[1].name)}
        </div>
      </Banner>
      <EntityContainer className={styles.container}>
        {isLoading && <Loader className={styles.loader} />}
        {!isLoading &&
          type === 'tab' &&
          entities &&
          (entities.length > 0 ? (
            <div
              className={cx(
                styles['channel-items'],
                entities.length < 5 && styles.less
              )}
            >
              {entities.map((item) => (
                <ChannelCard
                  key={item.id}
                  description={item.name}
                  figure={item.img || defaultImage}
                  id={item.id}
                  type={item.type}
                  onClick={handleChannelClick(item)}
                />
              ))}
            </div>
          ) : (
            <div>No Channel Content</div>
          ))}
        {!isLoading &&
          type === 'channel' &&
          entities &&
          (entities.length > 0 ? (
            <div className={styles['story-items']}>
              {entities.map((item) => (
                <StoryCard
                  key={item.id}
                  commentCount={item.commentCount}
                  fileCount={item.fileCount}
                  id={item.id}
                  likesCount={item.likesCount}
                  thumbnail={defaultImage}
                  title={item.name}
                />
              ))}
            </div>
          ) : (
            <div>No Story Content</div>
          ))}
      </EntityContainer>
    </div>
  );
};

export default observer(EntityPage);
