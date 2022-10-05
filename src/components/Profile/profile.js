import {
  StatsList,
  StatItem,
  ProfileWrapper,
  InfoWrapper,
  ImgWrapper,
  ProfileName,
  StatsAmount,
  ProfileInfo,
} from './profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
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
          <StatsAmount>{stats.followers}</StatsAmount>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <StatsAmount>{stats.views}</StatsAmount>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <StatsAmount>{stats.likes}</StatsAmount>
        </StatItem>
      </StatsList>
    </ProfileWrapper>
  );
};
