import PropTypes from 'prop-types';

import {
  StatisticsWrapper,
  StatList,
  StatWrapper,
  CardTitle,
  Percentage,
} from './statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsWrapper>
      <CardTitle>{{ title } && 'Uplod Stats'}</CardTitle>
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatWrapper key={id}>
              <span>{label}</span>
              <Percentage>{percentage}%</Percentage>
            </StatWrapper>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
