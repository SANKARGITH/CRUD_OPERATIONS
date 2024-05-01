import axios from "axios";
const url = "http://localhost:3200/Students"
export const getData=async ()=>{
  return await axios.get(url)
 }

 export const postData=async (data)=>{
  return await axios.post(url,data,{
      headers:{
          'Content-Type':'application/json'
      }
  })
}

export const deleteData = async(id)=>{
  return await axios.delete(`${url}/${id}`)
}
// export const editData = async(data)=>{
//   return await axios.put(data);
// }