import {UsersRound, UserRoundPlus, UserRoundCheck, UserX  } from 'lucide-react';
import Statescard from "../components/Statescard"
import Userstable from '../components/users/Userstable';
import Usersgrowth from '../components/users/Usersgrowth';
import Usersactivity from '../components/users/Usersactivity';

const Users = () => {
  return (
    <section>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title="Total Users" icon={<UsersRound className='text-[#6366f1]'/>} data="152,300"/>
        <Statescard title="New Users Today" icon={<UserRoundPlus className='text-[#10B981]'/>} data="243"/>
        <Statescard title="Active Users" icon={<UserRoundCheck className='text-yellow-500'/>} data="98,520"/>
        <Statescard title="Churn Rate" icon={<UserX className='text-red-400'/>} data="2.4%"/>
      </main>
      <div>
        <Userstable/>
      </div>
      <div>
        <Usersgrowth/>
        <Usersactivity/>
      </div>
    </section>
  )
}

export default Users