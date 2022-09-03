import { FC } from 'react';
import {FaTrashAlt} from 'react-icons/fa'

interface propstype {

  item:{id:number, checked:boolean, item:string }[],
  setItem:{},
  handleCheck:(id:number)=> void;
  handleDelete:(id:number)=> void;

}

const Content:FC<propstype> = ({item,setItem,handleCheck,handleDelete}) => {
    return (
            <main>
              {/* To Display List and Emplty list Msg . Show list if item exist if not them msg display */}
              { item.length ? (
              <ul> 
                {/* imp7: pass map items inside the ul tag  */}
                    {
                    item.map((item: { id:number ; checked: boolean; item: string})=>(                  
                        <li className='item' key={item.id}>
                        <input type='checkbox' 
                        onChange={()=> handleCheck(item.id)}
                        checked={item.checked} />
                        <label 
                        /* to linecross style on checked items */
                        style={(item.checked) ? {textDecoration:'line-through'}: {}}
                        /* to perform same function on double click when we click checkbox */
                        onDoubleClick={()=> handleCheck(item.id)}>
                          {item.item}
                          </label>
                        <FaTrashAlt 
                        onClick={()=> handleDelete(item.id)}
                        role="button"
                        tabIndex={0}
                        />
                      </li>
                    
                    ))}
              </ul>
              /* if item.length = 0 display below msg */
              ) : (
                <p style={{marginTop:'2rem'}}>Your List is Empty.</p>
              )}
            </main>
  )
}

export default Content

