import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Banner from '../shared/Banner';
import styles from './Home.module.scss';
import homeBanner from '../../assets/images/home_banner.png';
import { Tab } from '../../services/bridge/type/entities';
import logo from '../../assets/images/cpl_logo.png';
import useGetList from '../../hooks/useGetList';
import { ButtonEntity, TabContent } from '../../typedef';
import useStoreSelector from '../../stores';
import { HOME_BUTTONS, HARDCODED_CHANNEL } from '../../constants/buttonData';
import Button from '../shared/Button';
import { useOpenLink } from '../../hooks/useOpenLink';
import { TAB_DATA } from '../../constants/tabData';
import EntityContainer from '../shared/EntityContainer';
import TabCard from '../shared/TabCard';
import Loader from '../shared/Loader';
import Tabs from '../shared/Tabs';
import Bookmarks from './Bookmarks';
import TopContent from './TopContent';
import { STATIC_CONTENT } from '../../constants';

const Home = () => {
  const { setObject } = useStoreSelector((store) => store.entity);
  const [openLink] = useOpenLink();
  const [content, status] = useGetList<Tab>({
    entityName: 'tab',
    limit: 30,
  });

  const tabIdsShowOnHS = TAB_DATA.map((tab) => tab.entityId);
  const tabsShowOnHS = content.filter((tab) => tabIdsShowOnHS.includes(tab.id));
  const tabDataWithDynamicTitle =
    tabsShowOnHS.length > 0 &&
    TAB_DATA.map((hardCodedTab) => ({
      ...hardCodedTab,
      title: tabsShowOnHS.find((tab) => tab.id === hardCodedTab.entityId)?.name,
    }));

  const history = useHistory();
  const handleClick = (item: ButtonEntity) => () => {
    if (item.case === 'url') {
      openLink(item.url);
    }
    if (item.case === 'hardcoded_entity') {
      setObject(HARDCODED_CHANNEL, true);
      history.push(`/channel/${item.entityId}`);
    }
  };

  const onTabClick = (item: TabContent) => () => {
    setObject(item);
  };

  return (
    <div className={styles.home}>
      <Banner
        BannerImg={homeBanner}
        className={styles.banner}
        contentClassName={styles.items}
      >
        <img alt="" className={styles.logo} src={logo} />
        <div className={styles['button-list']}>
          {HOME_BUTTONS.map((button: ButtonEntity) => (
            <Button
              key={button.id}
              title={button.title}
              onClick={handleClick(button)}
            />
          ))}
        </div>
      </Banner>
      <EntityContainer className={styles.container}>
        <div className={styles.content}>
          {status === 'loading' && <Loader className={styles.loader} />}
          <Tabs disableSeeMore>
            <Tabs.Tab
              tabKey={STATIC_CONTENT.TOPICS.key}
              title={STATIC_CONTENT.TOPICS.title}
            >
              <div className={styles.topic}>
                {tabDataWithDynamicTitle &&
                  tabDataWithDynamicTitle.length > 0 &&
                  tabDataWithDynamicTitle.map((item: TabContent) => (
                    <Link
                      key={item.title}
                      style={{ textDecoration: 'none' }}
                      to={`/${item.entityType}/${item.entityId}`}
                      onClick={onTabClick(item)}
                    >
                      <TabCard
                        background={item.background}
                        img={item.img}
                        title={item.title}
                      />
                    </Link>
                  ))}
              </div>
            </Tabs.Tab>
            <Tabs.Tab
              tabKey={STATIC_CONTENT.BOOKMARKS.key}
              title={STATIC_CONTENT.BOOKMARKS.title}
            >
              <Bookmarks />
            </Tabs.Tab>
            <Tabs.Tab
              tabKey={STATIC_CONTENT.TOP_CONTENTS.key}
              title={STATIC_CONTENT.TOP_CONTENTS.title}
            >
              <TopContent />
            </Tabs.Tab>
          </Tabs>
        </div>
      </EntityContainer>
    </div>
  );
};

export default Home;
