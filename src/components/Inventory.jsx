import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'

function Inventory({i,data}) {

    let[drop,setDrop] = useState(false)
    let status = useRef({})

    const handleDrop = (i) =>{
        
        status.current[i] = ! status.current[i]
        setDrop(!drop)
       
    }

    let sofa = [{item:[1,2,3]}]
  return (
    <div>
    <div onClick={()=>handleDrop(i)} className="inventory px-2 pt-2 pb-1 mt-2 mb-1">
                    <div className="d-flex justify-content-between">
                      <div className='d-flex'>
                      <h5 className='tri fw-bold pe-2'>{data.displayName}</h5><div className={data.category.length > 9 ? `qty` : `less-qty`}>{data.category.length}</div>
                      </div>
                      <div className='chev-div'>
                        {
                            status.current[i] ?
                            <FontAwesomeIcon icon={faCircleChevronUp} size='2xl' className='chevron'/>
                            :
                            <FontAwesomeIcon icon={faCircleChevronDown} size='2xl' className='chevron'/>

                        }
                      </div>
                    </div>
                </div>
                <div className={status.current[i] ? `inventory-deta-div-hei` : `inventory-deta-div `}>
                 <div className="d-flex flex-wrap pt-3">
                 {
                    data.category.map((e)=>{
                        return (
                            <div className="col-4 fur-item pt-3">
                            <h5 className='fw-bold'>{e.displayName}</h5>
                            {
                                e.items.map((e)=>{
                                    return (
                                        <div className="">
                                        <div className="d-flex justify-content-between pe-5 me-4">
                                            <p className='pb-0 mb-0 item-name'>{e.displayName}</p>
                                            <p className="fw-bold pb-0 mb-0">{e.order}</p>
                                        </div>
                                        <h6 className="fw-bold">{e.type[0]?.option ? e.type[0].option : " "}</h6>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        )
                    })
                 }
                 </div>
                </div>
                </div>
  )
}

export default Inventory