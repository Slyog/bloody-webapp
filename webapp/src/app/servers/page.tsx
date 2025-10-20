import ServerGuide from '@/components/ServerGuide';
import ServerList from '@/components/ServerList';

export const metadata = {
  title: 'Servers | BloodyARK',
};

const ServersPage = () => (
  <>
    <ServerGuide />
    <ServerList />
  </>
);

export default ServersPage;
