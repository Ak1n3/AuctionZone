import React from 'react'
import { Tabs} from 'antd';
import Products from './Products';
import { useSelector } from 'react-redux';
import ShowCurBids from './Products/ShowCurBids';

function Profile() {
    const { user } = useSelector((state) => state.users);
  return (
    <div>
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Products" key="1">
                <Products />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Bids" key="2">
               <ShowCurBids/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="General" key="3">
                <div className='text-center mb-3 p-5'>
                <h1 className='p-5'>Name =   {user.name}</h1>
                <h2 className='p-5'>Email =   {user.email}</h2>
                <h3 className='p-5'>Role =   {user.role}</h3>
                </div>
                
                
                
            </Tabs.TabPane>
        </Tabs>
    </div>
  )
}

export default Profile