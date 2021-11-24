import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./usersSlice";
import DataTable from "../../components/DataTable/DataTable";

const Users=()=>{
    const dispatch=useDispatch();
    const users = useSelector(state => state.users)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    const columns=[
        {
            name: `id`,
            label: "ID",
            options: {
                filter: true,
                sort: false,
                setCellHeaderProps: value => ({ style: {color:"#d90c48", backgroundColor:'rgba(194, 57, 90, 0.1)' } }),

            }
        },
        {
            name: `name`,
            label: "Name",
            options: {
                filter: true,
                sort: false,
                setCellHeaderProps: value => ({ style: {color:"#d90c48", backgroundColor:'rgba(194, 57, 90, 0.1)' } }),

            }
        },
        {
            name: `email`,
            label: "EMAIL",
            options: {
                filter: true,
                sort: false,
                setCellHeaderProps: value => ({ style: {color:"#d90c48", backgroundColor:'rgba(194, 57, 90, 0.1)' } }),

            }
        },
        {
            name: `username`,
            label: "USERNAME",
            options: {
                filter: true,
                sort: false,
                setCellHeaderProps: value => ({ style: {color:"#d90c48", backgroundColor:'rgba(194, 57, 90, 0.1)' } }),

            }
        },
        {
            name: `phone`,
            label: "PHONE",
            options: {
                filter: true,
                sort: false,
                setCellHeaderProps: value => ({ style: {color:"#d90c48", backgroundColor:'rgba(194, 57, 90, 0.1)' } }),

            }
        }
    ]
    return(
        <>
            <DataTable
                status={users.status}
                columns={columns}
                data={users.usersList.data}
            />
        </>
    )
}
export default Users;
