import React from 'react';
import { Row, Col, Card, CardBody, Input, UncontrolledDropdown, Button, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import { BsToggleOn } from "react-icons/BsToggleOn";
// import * as FeatherIcon from 'react-feather';
import { EditOutlined, DeleteOutlined, PlusOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import { MDBCol } from "mdbreact";
import "./company.css";


// import PageTitle from '../../components/PageTitle';

const records = [
    {
        id: 1,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches'
                readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches'>
            </label>
        </div>,
        action: <><EditOutlined className='text-info' />&nbsp;/ &nbsp;<DeleteOutlined /></>,
    },
    {
        id: 2,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitchesChecked'
                defaultChecked
            />
            <label className='custom-control-label' htmlFor='customSwitchesChecked'>
            </label>
        </div>,
        action: <><EditOutlined className='text-info' />&nbsp;/ &nbsp;<DeleteOutlined /></>,
    },
    {
        id: 3,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitchesChecked1'
                defaultChecked
            />
            <label className='custom-control-label' htmlFor='customSwitchesChecked1'>
            </label>
        </div>,
        action: <><EditOutlined className='text-info' />&nbsp;/ &nbsp;<DeleteOutlined /></>,
    },
    {
        id: 4,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches3'
                readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches3'>
            </label>
        </div>,
        action: <><EditOutlined className='text-info' />&nbsp;/ &nbsp;<DeleteOutlined /></>,
    },
    {
        id: 5,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches5'
                readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches5'>
            </label>
        </div>,
        action: <><EditOutlined className='text-info' />&nbsp;/ &nbsp;<DeleteOutlined /></>,
    },
    {
        id: 6,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches5'
                readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches5'>
            </label>
        </div>,
        action: <><EditOutlined className='text-info' />&nbsp;/ &nbsp;<DeleteOutlined /></>,
    },
];

const columns = [
    {
        dataField: 'name',
        text: <>
            <p className="text-center">Name</p>
            <input className="form-control py-2 border-right-0 border" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'email',
        text: <>
            <p className="text-center">Email</p>
            <input className="form-control py-2 border-right-0 border" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'phone',
        text: <>
            <p className="text-center">Phone</p>
            <input className="form-control py-2 border-right-0 border" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'role',
        text: <>
            <p className="text-center">Role</p>
            <input className="form-control py-2 border-right-0 border" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'permission',
        text: <>
            <p className="text-center">Permission</p>
            <input className="form-control py-2 border-right-0 border" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'status',
        text: <>
            <p className="text-center">Status</p>
            <input className="form-control py-2 border-right-0 border" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'action',
        text: <>
            <p className="text-center">Action</p>
            <input className="form-control py-2 border-right-0 border" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
];


const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-1"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">entries</label>
    </React.Fragment>
);



const CustomToggleList = ({
    columns,
    onColumnToggle,
    toggles
}) => (
    <>

        <UncontrolledDropdown>
            <DropdownToggle tag="button" className="btn bg-white btn-white">Filters<FilterOutlined className='p-2' /></DropdownToggle>
            <DropdownMenu>
                {columns.map(column => ({
                    ...column,
                    toggle: toggles[column.dataField]
                }))
                    .map(column => (
                        <DropdownItem key={column.dataField} onClick={() => onColumnToggle(column.dataField)}>
                            {column.toggle && <i className='uil uil-check'></i>}
                            <span className="ml-2">{column.text}</span>
                        </DropdownItem>
                    ))
                }
            </DropdownMenu>
        </UncontrolledDropdown>
    </>
);

const TableWithColumnToggle = () => {

    return (
        <Card>
            <CardBody>
                <ToolkitProvider
                    keyField="id"
                    data={records}
                    columns={columns}
                    search
                    columnToggle

                >
                    {props => (
                        <div>
                            <Row>
                                <Col md={12}>
                                    <div className='d-flex float-right'>
                                        <Button className='btn btn-conpany bg-white text-dark pt-2'>Add Company<PlusOutlined className='p-2' /></Button>
                                        <Button className='btn btn-company mx-3 bg-white text-dark'>Export CSV<DownloadOutlined className='p-2' /></Button>
                                        <CustomToggleList {...props.columnToggleProps} />
                                    </div>
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
                                wrapperClasses="table-responsive"
                                classes='text-center'
                            />
                        </div>
                    )}
                </ToolkitProvider>
            </CardBody>
        </Card>
    );
};

const ListOfCompany = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={4}>
                    <h3>Company Management</h3>
                </Col>
                <Col md={8}>
                    {/* <ToolkitProvider
                    keyField="id"
                    data={records}
                    columns={columns}
                    search
                    columnToggle
                    
                >
                    {props => (
                        <div>
                            <Row>
                                <Col>
                                    <CustomToggleList {...props.columnToggleProps} />
                                </Col>
                            </Row>
                        </div>
                    )}
                </ToolkitProvider> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableWithColumnToggle />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ListOfCompany;
