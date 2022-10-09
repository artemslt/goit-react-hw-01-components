import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './ProfileCard/Profile';
import { Statistics } from './StatisticsCard/Statistics';
import { FriendsList } from './FriendsListCard/FriendsList';
import { TransactionHistory } from './TransactionCard/Transaction';

export const App = () => {
    return (
        <>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics stats={data} />
            <Statistics title="Upload Stats" stats={data} />
            <FriendsList friends={friends} />;
            <TransactionHistory items={transactions} />;
        </>
    );
};
