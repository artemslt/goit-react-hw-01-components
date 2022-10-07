import PropTypes from 'prop-types';

import {
  FriendCard,
  OflineIndicator,
  OnlineIndicator,
  FriendCardWrapper,
} from './friendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendCardWrapper>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendCard key={id}>
            {isOnline ? <OnlineIndicator /> : <OflineIndicator />}
            <img src={avatar} alt={'User avatar'} width="48" />
            <p>{name}</p>
          </FriendCard>
        );
      })}
    </FriendCardWrapper>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
