import { Profile } from './Profile/profile';
import user from '../user.json';

export const App = () => {
  return <Profile user={user} />;
};
