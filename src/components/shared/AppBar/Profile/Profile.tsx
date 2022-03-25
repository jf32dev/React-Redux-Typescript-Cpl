import * as React from 'react';
import { User } from '../../../../services/bridge/type/entities';
import { createInitials } from '../utils';
import style from './Profile.module.scss';

type TProps = {
  user: User;
  withDetail?: boolean;
};

const Profile = ({ user, withDetail = true }: TProps) => {
  const [isPlaceHolder, setIsPlaceholder] = React.useState<boolean>(false);
  let initials: string | null = '';

  initials = createInitials(`${user.firstName} ${user.lastName}`);

  const handleProfileImageError = () => setIsPlaceholder(true);

  return (
    <div className={style.profile} data-testid="profile-test">
      <div className={style.thumbnail}>
        {isPlaceHolder && <div className={style.initials}>{initials}</div>}
        {!isPlaceHolder && (
          <img
            alt={`${user.firstName}`}
            src={user.thumbnail}
            onError={handleProfileImageError}
          />
        )}
      </div>
      {withDetail && (
        <div className={style.detail}>
          {user.firstName} {user.lastName}
        </div>
      )}
    </div>
  );
};

export default Profile;
