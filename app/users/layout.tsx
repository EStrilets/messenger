import Sidebar from '@/app/components/sidebar/Sidebar'
import getUsers from '../actions/getUsers';
import Userlist from './components/Userlist';

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers()
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <Userlist users={users} />
        {children}
        </div>
    </Sidebar>
  );
}
