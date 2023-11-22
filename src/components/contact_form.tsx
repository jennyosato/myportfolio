import {useRef, useEffect} from 'react'

const Contact_form = ({onOpen, onClick}:any) => {
    const ref = useRef<HTMLDialogElement>(null)
    useEffect(()=>{
    if(!onOpen){
        return;
    }else{
        ref.current?.showModal()
    }
    return () => ref.current?.close()
},[onOpen])
  return (
    <dialog ref={ref} className=' z-50 outline-none  rounded-xl backdrop:bg-black/50  bg-white'>
        <div className="w-full min-w-[400px]">
        <div className='flex justify-between items-center pl-6 py-4'>
         <h2 className='text-xl text-gray-900 font-bold leading-relaxed tracking-wide'>Contact Me</h2>
         <button className='text-gray-700 font-bold outline-none focus:outline-none' onClick={onClick}>X</button>
        </div>
       
        <form className='px-4 py-3 space-y-4'>

            <div className='flex flex-col'>
                <label htmlFor='name' className='text-sm text-gray-800 font-bold'>Name</label>
                <input id='name' type='text' className='border border-gray-200 py-2 px-3 rounded'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor='email' className='text-sm text-gray-800 font-bold'>Email</label>
                <input id='email' type='email' className='border border-gray-200 rounded py-2 px-3'/>
            </div>
            <div className='flex flex-col'>
            <label>Message</label>
            <textarea className='border border-gray-200 py-2 px-3 rounded' cols={20} rows={5}  />
            </div>
            <div>
                <button className='py-2 px-2 bg-gray-900 text-white'>Send</button>
            </div>
          

            
        </form>

        </div>
    
    </dialog>
  )
}

export default Contact_form