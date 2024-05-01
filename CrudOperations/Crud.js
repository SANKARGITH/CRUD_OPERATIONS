import React, { useEffect, useState } from 'react';
import { deleteData,getData, postData } from './apiCalls';
import Showdata from './Showdata';

function Crud() {
    const[details,setdata]=useState([]);
    const[datadetails,setdetails]=useState({
        sname:"",subject:"",mark:"",result:""
    })
    useEffect(
        ()=>{
            response()
        },[]
    )
    const response=async()=>{
        let res = await getData()
        setdata(res.data);
    }

    const deleteResponse=async(id)=>{
        await deleteData(id)
        response()
    }
    const addData =async(data2)=>{
        // let data1={
        //     sname:data2.sname,
        //     subject:data2.subject,
        //     mark:data2.mark,
        //     result:data2.result
        // }
        await postData(data2)
        response()

    }
    const editResponse=(data)=>{
        setdetails(data)
    }
    return (
        <>
          <Showdata data={details} deleted={deleteResponse} formdata={datadetails}  add={addData} edit={editResponse}></Showdata>
        </>
    );
}

export default Crud;