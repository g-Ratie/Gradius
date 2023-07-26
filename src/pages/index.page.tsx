import { useAtom } from 'jotai';
import { Loading } from 'src/components/Loading/Loading';
import { userAtom } from '../atoms/user';
import { BasicHeader } from './@components/BasicHeader/BasicHeader';

const Home = () => {
  const [user] = useAtom(userAtom);

  if (!user) return <Loading visible />;

  return <BasicHeader user={user} />;
};

export default Home;
