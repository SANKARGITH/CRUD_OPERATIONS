import React, { useState } from 'react';

function Showdata(props) {
    const [addedData,setAdded]=useState(props.formdata)
    const [validate, setvalidate]= useState(false)
    const [model,setmodal]=useState("")
    const [search,setsearch]= useState(props)
    const changeForm=(e)=>{
        const{name,value}=e.target
       setAdded({...addedData,[name]:value})
    //    console.log(addedData)
    }
    return (
        <>
        <div className='w-75 m-3 p-2 shadow mx-auto'>
         <h1 className='text-success text-center'>Curd Operation </h1>
         </div>
         <div className='w-50 mx-auto shadow-sm p-1'>
            <div className='input-group m-1'>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
             ADD DETAILS
            </button>
            <input className='form-control' type='search' placeholder='Search your details....'value={search.data.sname} onChange={(e)=>setsearch({...search,sname:e.target.value})}/>
            <button className='btn btn-m btn-outline-success'>Search</button>
            </div>
         </div>
         <div className='w-75 m-2 p-1 shadow mx-auto'>
            <table className='table table-hover table-responsive-m text-center the'>
                <thead className='text-primary shadow-sm bg-light'>
                    <th>S.No</th>
                    <th>NAME</th>
                    <th>SUBJECT</th>
                    <th>MARKS</th>
                    <th>RESULTS</th>
                    <th>Manipulations</th>
                </thead>
                <tbody>
                    {
                        props.data.map((e,i)=>{
                            return(
                        <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.sname}</td>
                        <td>{e.subject}</td>
                        <td>{e.mark}</td>
                        <td>{e.result}</td>
                        <td><button className='btn btn-outline-primary btn-m me-3'
                        onClick={()=>{
                            props.edit(e)
                            console.log(e)
                        }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                        <button className='btn btn-outline-danger'
                        onClick={()=>{
                            props.deleted(e.id)
                        }}
                        >Delete</button>
                        </td>
                       </tr>)
                        })
                    }
                </tbody>
            </table>
         </div>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Give Your Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter Name" name="sname"
                    value={addedData.sname}
                    onChange={changeForm}
                    />
                    {
                        validate && addedData.sname==="" &&<span className='text-danger'>Enter your Name</span>
                    }
                    <label for="floatingInput">Student Name</label>
                    </div>
                    <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="subject" name="subject"
                    value={addedData.subject}
                    onChange={changeForm}/>
                    {
                        validate && addedData.subject==="" &&<span className='text-danger'>Enter your Subject</span>
                    }
                    <label for="floatingPassword">Subject</label>
                    </div>
                    <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="floatingPassword1" placeholder="Marks" name="mark"
                    value={addedData.mark}
                    onChange={changeForm}/>
                    {
                        validate && addedData.mark==="" &&<span className='text-danger'>Enter your Marks</span>
                    }
                    <label for="floatingPassword1">Marks</label>
                    </div>
                    <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="floatingPassword2" placeholder="Result" name="result"
                    value={addedData.result}
                    onChange={changeForm}/>
                    {
                        validate && addedData.result==="" &&<span className='text-danger'>Enter your Results</span>
                    }
                    <label for="floatingPassword2">Result</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"
                    onClick={(ev)=>{
                        setvalidate(true)
                        ev.preventDefault()
                        if(!!addedData.sname&&addedData.subject&&addedData.mark&&addedData.result){
                            props.add(addedData) 
                            setAdded({...addedData,sname:"",subject:"",mark:"",result:""})
                            setmodal("modal")   
                        }
                    }}  data-bs-dismiss={model}>Submit Data</button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Showdata;