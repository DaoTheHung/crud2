import React from "react";



const ListName = (props) => {

    const removeExpense = () => {
           props.onExpense(props.month);
    };
    const editExpense = () => {
        props.onEditExpense(props.name, props.price, props.month );
    }

    return (

       <>        <div className="menu-column1">

                        <div className="date-text">

                            <div className="date">
                                <p>{props.month}</p>
                                <p>{props.year}</p>
                                <h4>{props.day}</h4>
                            </div>
                            <div className='text'>
                                <h1>{props.name}</h1>
                            </div>
                        </div>
                            <div>
                                 <button onClick={removeExpense} type="button" className="btn-delete">Delete</button>
                                <div className='price'>
                                    <h3>${props.price}</h3>
                                </div>
                                <button onClick={editExpense} type="button" className="btn-edit">Edit</button>

                            </div>
                </div> 
       </>
                      
    )
}


export default ListName;











