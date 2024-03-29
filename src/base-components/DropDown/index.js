import React from 'react'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const DropDown = ({ listItem, className, setStateCallback }) => {
    const navigate = useNavigate();
  const handleNavigationToSearchItem = (item) => {
        if (item.id === null) return;
        navigate(`/blog/${item.id}`)
        setStateCallback(false)
    }
    return (
      <>
      <div className='relative z-40'>
           <ul className={twMerge([
          'border border-slate-300 font-sans font-light text-sm sm:font-normal bg-primary shadow-xl shadow-slate-900/30 sm:p-4 sm:py-5 absolute w-52 h-52 sm:w-80 sm:h-80 overflow-auto right-0 top-2 rounded-lg',
          className
    ])}>
        {listItem.map(item => (
            <li
                value={item}
                onClick={()=>handleNavigationToSearchItem(item)}
                key={item.id} className='cursor-pointer rounded-lg h-auto px-4 py-2 hover:bg-slate-300/30 transition border-b border-slate-200/50 flex items-center'>{item.title}
            </li>
      ))}
      </ul>
      </div>
    </>
  )
}

export default DropDown
