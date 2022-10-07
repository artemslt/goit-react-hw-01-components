import PropTypes from 'prop-types';

import {
  StatsList,
  StatItem,
  ProfileWrapper,
  InfoWrapper,
  ImgWrapper,
  ProfileName,
  StatsAmount,
  ProfileInfo,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileWrapper>
      <InfoWrapper>
        <ImgWrapper>
          <img src={avatar} alt={tag} width="80" />
        </ImgWrapper>
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </InfoWrapper>
      <StatsList>
        <StatItem>
          <span>Followers</span>
          <StatsAmount>{followers}</StatsAmount>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <StatsAmount>{views}</StatsAmount>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <StatsAmount>{likes}</StatsAmount>
        </StatItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
