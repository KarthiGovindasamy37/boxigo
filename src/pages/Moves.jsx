import { faArrowRight, faCalendarDays, faChevronCircleDown, faCircleChevronDown, faHouse, faLocationDot, faM, faPen, faSquareCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Inventory from '../components/Inventory'

function Moves() {
    useEffect(()=>{
      loadDetails()
    },[])

    let[loading,setLoading] = useState(false)
    let moveDetails = useRef({Customer_Estimate_Flow:[]})

    const loadDetails =async()=>{
        setLoading(true)
       let data = await axios.get("http://test.api.boxigo.in/sample-data/")
       moveDetails.current = data.data
       setLoading(false)
       console.log(moveDetails.current);
    }


    let [index,setIndex] = useState(true)
    let status = useRef({})

    const show = (i) =>{console.log(i);
        
        status.current[i] = ! status.current[i]
        setIndex(!index)
        
    }

    const getMonthName = (month) =>{
        switch (month) {
            case 0:
                return "Jan"
                case 1:
                   return "Feb"
                   case 2:
                    return "Mar"
                     case 3:
                       return "Apr"
                        case 4:
                          return "May"
                          case 5:
                             return "Jun"
                             case 6:
                               return "Jul" 
                               case 7:
                                 return "Aug"
                                 case 8:
                                   return "Sep"       
                                   case 9:
                                     return "Oct"
                                     case 10:
                                       return "Nov"
                                       case 11:
                                         return "Dec"
            default:
                return month
        }
    }

    const displayDate = (moveDate) =>{
        let actDate = new Date(moveDate)
        let month = actDate.getMonth() 
        let date = actDate.getDate()
        let year = actDate.getFullYear()
        let hour = actDate.getHours()
        let minute = actDate.getMinutes()
        
        let monthName = getMonthName(month)

        let modifiedDate = `${monthName} ${date}th ${year} at ${hour > 12 ? `${hour-12}` : hour === 0 ? `12` : `${hour}`}:${minute === 0 ? `00` : `${minute}`} ${hour > 11 ? `pm` :`am`}`

        return modifiedDate
    }
  return (
    <div>
        <h3 className='pb-3 fe-bold'>My Moves</h3>
        {
        
        loading ?
        <div className="d-flex spinner-div justify-content-center align-items-center">
            <div class="spinner-grow text-primary me-1" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success me-1" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning me-1" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div>Loading...</div>
        </div>
:
        moveDetails.current.Customer_Estimate_Flow.map((e,indx)=>{
            return (
            <div className="one-move mb-2">
            <div className="d-flex">
                <div className="col-4">
                    <h5 className='fw-bold'>From</h5>
                    <p className='add-height'>{e.moving_from}</p>
                </div>
                <div className="col-2 pt-4 text-center">
                    <div className="pt-2"><FontAwesomeIcon icon={faArrowRight} className='arrow shadow-sm' size='2xl'/></div>
                </div>
                <div className="col-4">
                    <h5 className='fw-bold'>To</h5>
                    <p>{e.moving_to}</p>
                </div>
                <div className="col-2">
                    <h5 className='fw-bold'>Request#</h5>
                    <h4 className='request-no'>{e.estimate_id}</h4>
                </div>
            </div>
            <div className="d-flex justify-content-evenly">
                <div className="col-1">
                    <FontAwesomeIcon icon={faHouse} className='tri' size='lg'/><span className='ps-2'>{e.property_size}</span>
                </div>
                <div className="col-1 d-flex">
                    <div className="text-center ">
                    <FontAwesomeIcon icon={faM} size='sm' className='tri'/>
                    <div className="d-flex">
                    <FontAwesomeIcon icon={faM} size='xs' className='tri'/>
                    <FontAwesomeIcon icon={faM} size='xs' className='ps-1 tri'/>
                    </div>
                    </div><span className='ps-2'>{e.total_items}</span>
                    
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faLocationDot} className='tri pe-2' size='lg'/><span>{e.distance}</span>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faCalendarDays} size='lg' className='tri'/><span className='ps-2 pe-3'>{displayDate(e.moving_on)}</span><span><FontAwesomeIcon icon={faPen} size='sm'/></span>
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={faSquareCheck} className='tri pe-1' size='lg'/><span >is flexible</span>
                    </div>

                <div className="col-2">
                    <button className='view-btn' onClick={()=>show(indx)}>View Move Details</button>
                </div>
                <div className="col-2">
                <button className='quote-btn'>{e.custom_status}</button> 
                </div>
            </div>
            <div className="pb-2 pt-2">
                <FontAwesomeIcon icon={faTriangleExclamation} className='tri' size='sm'/><span className='ps-2 fw-bold'>Disclaimer : </span><span>Please update your move date before two days of shifting</span>
            </div>
             <div className={status.current[indx] ? `mt-4` : `no-drop mt-4`}>
                <div className="d-flex justify-content-between pe-2">
                    <h5 className='fw-bold'>Additional Information</h5>
                    <button className='edit-btn'>Edit Additional Info</button>
                </div>
                <p>{e.old_house_additional_info}</p>
                <div className="d-flex justify-content-between pe-2">
                    <h5 className='fw-bold'>House Details</h5>
                    <button className='edit-btn'>Edit House Details</button>
                </div>
                <h6 className='fw-bold tri pt-2'>Existing House Details</h6>
                <div className="d-flex">
                    <div className="col-3">
                        <h6 className='fw-bold'>Floor No.</h6>
                        <p>{e.old_floor_no}</p>
                    </div>
                    <div className="col-3">
                        <h6 className='fw-bold'>Elevator Available.</h6>
                        <p>{e.old_elevator_availability}</p>
                    </div>
                    <div className="col-6">
                        <h6 className='fw-bold'>Distance from Elevator / Staircase to truck</h6>
                        <p>{e.old_parking_distance}</p>
                    </div>
                </div>
                <h6 className='fw-bold tri pt-2'>New House Details</h6>
                <div className="d-flex">
                    <div className="col-3">
                        <h6 className='fw-bold'>Floor No.</h6>
                        <p>{e.new_floor_no}</p>
                    </div>
                    <div className="col-3">
                        <h6 className='fw-bold'>Elevator Available.</h6>
                        <p>{e.new_elevator_availability}</p>
                    </div>
                    <div className="col-6">
                        <h6 className='fw-bold'>Distance from Elevator / Staircase to truck</h6>
                        <p>{e.new_parking_distance}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between pe-2">
                    <h5 className='fw-bold'>Inventory Details</h5>
                    <button className='inventory-btn'>Edit Inventory</button>
                </div>
                {
                  e.items.inventory.map((e,i)=>{
                    return <Inventory data={e} i={i}/>
                  })
                }

             </div>
             
            
        </div>
            )
        })
        
       }

       </div>
  )
}

export default Moves