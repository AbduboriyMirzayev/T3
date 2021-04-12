import React, { useEffect, useState } from 'react';
import { Select, Table, Pagination } from 'antd';

import axios from '../../utils/axios';
import moment from 'moment';
import S from '../../styles/Homes';

export default function Homes() {
  const [companies, setCompanies] = useState([]);
  const [houses, setHouses] = useState([]);
  const [companyId, setCompanyId] = useState(0);
  const [loading,setLoading] = useState(true);

  const companiesList = () => {
    axios
      .get('/reestrdoma/companies/', {})
      .then((res) => setCompanies(res.data.data))
      .catch((err) => console.log(err));
  };

  const tableData = (id, page) => {
    axios
      .get(`/reestrdoma/company/houses/${id}?page=${page ?? 1}&perPage=10`)
      .then((res) => {setHouses(res.data)})
      .then(() => {setLoading(false)})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    companiesList();
  }, []);

  const { Option } = Select;
  const SelectHandler = (id) => {
    tableData(id);
    setCompanyId(id);
  };

  const paginateHandler = (page) => {
    tableData(companyId, page);
    console.log(page);
  };

  const column = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '40%',
    },
    {
      title: 'Houses',
      dataIndex: 'houseNum',
      key: 'houseNum',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => {
        return <div> {moment(text).format("DD.MM.YYYY")} </div>;
      },
    },
  ];

  return (
    <S.Homes>
      <div className="inner">

        <Select
          placeholder="Select a company"
          onChange={SelectHandler}
          optionFilterProp="children"
          showSearch
          className="select"
        >
          {companies.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>

        <Table className="table" columns={column} dataSource={houses.data} pagination={false} loading={loading} scroll={{x:true}} />

        <Pagination
          total={houses.links?.objectsCount}
          showTotal={false}
          onChange={(page) => paginateHandler(page)}
          defaultPageSize={10}
          defaultCurrent={1}
          showSizeChanger={false}
          className="pagination"
        />
      </div>
    </S.Homes>
  );
}
