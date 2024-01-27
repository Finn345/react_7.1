import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom_hooks/Fetch'


const columns: GridColDef[] =[
    {field: 'id', headerName: 'ID', width: 70, hide: true},
    {field: 'name', headerName: 'Name', flex: 2},
    {field: 'make', headerName: 'Make of Car', flex: 2},
    {field: 'model', headerName: 'Car Model', flex: 2},
    {field: 'color', headerName: 'Color of Car', flex: 1},
    {field: 'year', headerName: 'Year', flex: 2},
    {field: 'price', headerName: 'Car Price', flex: 1},
    {field: 'serial_num', headerName: 'Serial Number', flex: 1}

]

function DataTable() {
    let [ open, setOpen ] = useState(false)
    const { carData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([])

    const handOpen = () => {
        setOpen(true)
    }

    const handClose = () => {
        setOpen(false)
    }

    const deleteData = () =>{
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 2000)
    }

    return(
        <>
        <Modal
            open={open}
            onClose={handClose}
        />
        <div className='flex flex-row'>
            <div>
                <button className="p-5 bg-slate-400 rounded 
                m-3 hover:bg-slate-700"
                onClick={() => handOpen()}>
                    Add in New Car
                </button>
            </div>
            <Button onClick={handOpen} className='p-5 bg-slate-400 rounded m-3 hover:bg-slate-700'>Update Car</Button>
            <Button onClick={deleteData} className='p-5 bg-slate-400 rounded m-3 hover:bg-slate-700'>Delete Car</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-8 my-5 flex flex-col bg-blue-500 bg-opacity-25"}
            style={{ height: 400, width: '100%'}}>
                <h2 className="p-5 bg-slate-400 my-2 rounded place-items-center">My Car Collection:</h2>
                <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[8]}
                checkboxSelection={true}
                onSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
        </>
    )
}

export default DataTable
