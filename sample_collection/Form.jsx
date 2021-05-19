import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("Loại cá", { required: true })}>
        <option value="Cá ngừ">Cá ngừ</option>
        <option value="Cá thu">Cá thu</option>
        <option value="Cá nục">Cá nục</option>
      </select>
      <select {...register("Loài cá", { required: true })}>
        <option value="Cá ngừ bò">Cá ngừ bò</option>
        <option value="Cá ngừ vằn">Cá ngừ vằn</option>
      </select>
      <select {...register("Ngư trường", { required: true })}>
        <option value="Ngư trường 1">Ngư trường 1</option>
        <option value=" Ngư trường 2"> Ngư trường 2</option>
        <option value=" Ngư trường 3"> Ngư trường 3</option>
      </select>

      <input {...register("Khích cỡ", { required: true })} type="radio" value="Lớn" />
      <input {...register("Khích cỡ", { required: true })} type="radio" value=" Trung bình" />
      <input {...register("Khích cỡ", { required: true })} type="radio" value=" Nhỏ" />

      <input {...register} type="radio" value="Nhiệt độ thường" />
      <input {...register} type="radio" value=" Nhiệt độ lạnh" />
      <input {...register} type="radio" value=" Nhiệt độ lạnh đông" />
      <input {...register} type="radio" value=" Thu thập từ chợ hoặc siêu thị" />

      <input type="submit" />
    </form>
  );
}