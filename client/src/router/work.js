import React, { useState } from 'react';



import axios from 'axios';


const Work =()=> {
  
    const [options, setOptions] = useState({
      tname: '',
      year: 0,
      vname: ''
    });
    const [responseData, setResponseData] = useState(null);
    const handleOptionChange = (event) => {
      const { name, value } = event.target;
      setOptions(prevOptions => ({
        ...prevOptions,
        [name]: value
      }));
    }
    
    const handleSubmit =  (event) => {
      event.preventDefault();
      axios.post(`/api/gramothan/works`,options).then(response => {
        setResponseData(response.data);
      })
     
      
    }
  
    return (<div>
    {responseData ? (
      
           <table class="table table-hover table-white">
           <thead>
             <tr>
               <th>Activity Code</th>
               <th>Activity Name</th>
               <th>Activity Cost</th>
               <th>Activity Output</th>
             </tr>
           </thead>
           <tbody>
             {responseData.map((item, index) => (
               <tr key={index}>
                 <td>{item.activity_code}</td>
                 <td>{item.activity_name}</td>
                 <td>{item.activity_cost}</td>
                 <td>{item.activity_output}</td>
               </tr>
             ))}
           </tbody>
         </table>
      ):(<div>
      <form className="auth_container" onSubmit={handleSubmit}>
        <table>

        <div className="level1">
          <tr>
          <td><label htmlFor="option1" className='h4'>Select State : </label></td>
          <td class='state'><select id="option1" name="option1"  className='d3'>
            <option value="" >--Select--</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select></td>
          </tr>
        </div>
        <div class="level1">
          <tr>
          <td> <label htmlFor="option2" className='h4'>Select District : </label></td>
           
          <td><select id="option2" name="option2" >
            <option value="">--Select--</option>
            <option value="Muzaffarnagar">Muzaffarnagar</option>
            <option value="Meerut">Meerut</option>
            <option value="Kanpur">Kanpur</option>
          </select></td>
          </tr>
        </div>
        <div class="level1">
          <tr>
          <td><label htmlFor="option3" className='h4'>Select Block : </label></td>
          <td class='state1'><select id="option3" name="option3" class="d" >
            <option value="" >--Select--</option>
            <option value="Morna">Morna</option>
            <option value="Jansat">Jansat</option>
            <option value="Khatauli">Khatauli</option>
          </select></td>
          </tr>
        </div>
        <div class="level1">
          <tr>
          <td><label htmlFor="vname" className='h4'>Select Village : </label></td>
          <td><select id="vname" name="vname" value={options.vname} onChange={handleOptionChange} className='d1'>
            <option value="">--Select--</option>
            <option value="sikanderpur">Sikanderpur</option>
            <option value="khannupur">Khannupur</option>
            <option value="Rahamatpur">Rahamatpur</option>
          </select></td>
          </tr>
        </div>
        <div class="level1">
          <tr>
          <td><label htmlFor="year" className='h4'>Select Year : </label></td>
          <td className='state1'><select id="year" name="year" value={options.year} onChange={handleOptionChange} className='y'>
            <option value="">--Select--</option>
            <option value={2022}>2022-2023</option>
            <option value={2021}>2021-2022</option>
            <option value={2020}>2020-2021</option>
            <option value={2019}>2019-2020</option>
            <option value={2018}>2018-2019</option>
          </select></td>
          </tr>
        </div>
        <div class="level1">
          <tr>
          <td><label htmlFor="tname" className='h4'>Select Work Name : </label></td>
          <td><select id="tname" name="tname" value={options.tname} onChange={handleOptionChange}>
            <option value="">--Select--</option>
            <option value="interlocking">Interlocking</option>
            <option value="handpump">HandPump</option>
            <option value="clean">Cleaning</option>
            <option value="sworks">School Work</option>
            <option value="lworks">Light Works</option>
            <option value="sudden">Sudden Works</option>
            <option value="other">other Works</option>
          </select></td>
          </tr>
        </div>
        <tr>
        <td><button type='submit' className='text-black btn1'>Get Details</button></td>
        </tr>
        </table>
    </form>
    </div>
    )}
   </div>
  )
}

export default Work;