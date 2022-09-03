import {React, useState} from 'react'
import "../components/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPlane, faPlaceOfWorship, faTaxi, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns' // to get date to Printable string
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destination, setDestination ] = useState("");
    const [openDate, setOpenDate ] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
const [openOptions, setOpenOptions] = useState(false);
const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,
});



const handleOption = (name,operation)=>{
    setOptions(prev=>{return{
                ...prev, [name]: operation ==="i" ? options[name] + 1 : options[name] -1
    }})
}
const navigate = useNavigate();
const handleSearch = ()=>{
    navigate("/hotels",{state:{destination,date,options}})
}
  return (
    <div className="header">
        <div className={type === "list" ? "hederContainer listmode" : "hederContainer"}> {/* Main Layout to display hotel list in hotels page */}
        <div className="headerlist">

            <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>

            <div className="headerListItems">
            <FontAwesomeIcon icon={faPlaceOfWorship} />
            <span>Attractions</span>
            </div>

            <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
            </div>
        </div>
 

 {/* checking conditon for hotel list layout /hotels */}
        
       {  type !== "list" &&
        
        <> 

        <h1 className="headerTitle">A Lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
            Get rewarded for your Travels - unlock instant savings of 15% or more with a free Cab-booking account.
        </p>
        <button className="headerBtn">Sign in / Register</button>
          
        <div className="headerSearch">

            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headericon" />
                < input type="text" 
                placeholder='Whre are you going?' 
                className='headerSearchInput' 
                onChange={(e)=>setDestination(e.target.value)} 
                />
            </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
                {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  minDate = {new Date()}
  ranges={date}
  moveRangeOnFirstSelection={false}
  
  className="date"
/>}
             </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headericon" />
                <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                {  openOptions && 
                
                <div className="options">
                   
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                        <button disabled={options.adult <= 1} className='optionCounterButton' onClick={()=>handleOption("adult","d")}>-</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button className='optionCounterButton'  onClick={()=>handleOption("adult","i")}>+</button>
                        </div>
                    </div>

                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                        <button disabled={options.children <= 1} className='optionCounterButton'  onClick={()=>handleOption("children","d")}>-</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button className='optionCounterButton' onClick={()=>handleOption("children","i")}>+</button>
                        </div>
                    </div>

                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <button disabled={options.room <= 1} className='optionCounterButton' onClick={()=>handleOption("room","d")}>-</button>
                        <span className='optionCounterNumber'>{options.room}</span>
                        <button className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>
                </div> 
            }
            </div>
       
        
               <div className="headerSearchItem">
                    <button className='headerBtn' onClick={handleSearch}>Search</button>
               </div>
            </div>
       </> } 
       {/* puttting condition for List items in hotel list */}
    </div>
</div>
  )
}

export default Header