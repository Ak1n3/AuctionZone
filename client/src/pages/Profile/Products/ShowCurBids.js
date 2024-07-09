import React, { useEffect } from 'react'
import { SetLoader } from '../../../redux/loadersSlice';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBids } from '../../../apicalls/products';
import { message } from 'statuses';
import { Table } from 'antd';
import { useParams } from 'react-router-dom';

function ShowCurBids() {
    const { user } = useSelector((state) => state.users);
    const [bidsData, setBidsData] = React.useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getData = async () => {
    try {
      dispatch(SetLoader(true));
       const response = await GetAllBids({
        buyer : user._id 
      });
      dispatch(SetLoader(false));
   
      if (response.success) {
        setBidsData(response.data);
        
        console.log(user._id);
      }
      
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };
  console.log(bidsData.buyer);
  const columns = [
    {
      title: "Bid Placed On",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(text).format("DD-MM-YYYY hh:mm a");
      }
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        return record.buyer.name;
      },
    },
    {
      title: "Bid Amount",
      dataIndex: "bidAmount",
    },
    {
        title: "Product",
        dataIndex: "product",
        render: (text, record) => {
            return record.product.name;
          },
      },

 
  ];

  useEffect(() => {
      getData();

  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={bidsData} />
    </div>
  )
}

export default ShowCurBids
