import CarForm from './CarForm'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div
        onClick={ props.onClose }
        className='fixed w-full h-full flex overflow-hidden z-1 
        justify-center align-middle bg-green-900 text-white bg-opacity-30'>
            <div className='max-w-800px w-3/5 fixed flex 
            z-1 mt-15 bg-gray-400 shadow-xl rounded-xl'
            onClick={(e) =>{
                e.stopPropagation()
            }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-evenly">
                        <p className="flex justify-start m-4 bg-slate-400 p-3 hover:bg-slate-700 text-white"
                        onClick={props.onClose}>
                            <i className="fa-solid fa-lg fa-circle-xmark"></i>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-5">
                        <CarForm id={ props.id } onClose={props.onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal