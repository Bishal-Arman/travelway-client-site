import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import'./AddService.css'

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
           console.log(data);
           axios.post('https://warm-shelf-43613.herokuapp.com/services',data)
           .then(res=>{
             if(res.data.insertedId){
                 alert('Your data added succesfully!!!')
                 reset()
                }
           })
        }
    return (
        <div className='add-service'>
        <h2 className='text-white'>Please Add a service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name",{required:true,maxLength:20})} placeholder='Enter the palce name' />
  <input type='number' {...register("price")}  placeholder='Enter the total cost' />
  <textarea {...register("discription")}placeholder='Enter the discription' />
  <input  {...register("img")} placeholder='Enter the image url' />
  <button className='btn-submit text-white' Enter="submit">Submit</button>
</form>
    </div>
    );
};

export default AddService;