import Button from './Button'
import Input from './Input'

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseMake, chooseModel, chooseColor, chooseYear, choosePrice, chooseSerial } from "../redux/slices/RootSlice"

interface CarFormProps{
  id?: string[];
  onClose: () => void;
}

const CarForm = ( props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

const onSubmit = (data: any, event: any) => {
  console.log(`ID ${typeof props.id}`);
  console.log(props.id)
  console.log(data)
  if (props.id && props.id.length > 0){
    server_calls.update(props.id[0], data)
    console.log(`Updated: ${ data.name } ${ props.id }`)
  } else {
    dispatch(chooseName(data.name));
    dispatch(chooseMake(data.make));
    dispatch(chooseModel(data.model));
    dispatch(chooseColor(data.color));
    dispatch(chooseYear(data.year));
    dispatch(choosePrice(data.price));
    dispatch(chooseSerial(data.serial_num));

    server_calls.create(store.getState())
    setTimeout(() => {window.location.reload()}, 2000)
    event.target.reset()

    props.onClose();
  }
}

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name of Car</label>
          <Input {...register('name')} name='name' placeholder="Name of Car" />
        </div>
        <div>
          <label htmlFor="make">Make of Car</label>
          <Input {...register('make')} name='name' placeholder="Make of Car" />
        </div>
        <div>
          <label htmlFor="model">Car Model</label>
          <Input {...register('model')} name='model' placeholder="Car Model" />
        </div>
        <div>
          <label htmlFor="color">Make of Car</label>
          <Input {...register('color')} name='color' placeholder="Car Color" />
        </div>
        <div>
          <label htmlFor="year">Year of Car</label>
          <Input {...register('year')} name='year' placeholder="Year of Car" />
        </div>
        <div>
          <label htmlFor="price">Price of Car</label>
          <Input {...register('price')} name='price' placeholder="Price of Car" />
        </div>
        <div>
          <label htmlFor="serial_num">Serial Number</label>
          <Input {...register('serial_num')} name='serial_num' placeholder="Serial Number" />
        </div>
        <div className="flex p-2">
          <Button className="flex justify-center m-4 bg-slate-400p-3 rounded hover:bg-slate-700 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
