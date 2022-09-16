import { Button, Container, InputGroup, Row, Form, DropdownButton, Dropdown, Col } from 'react-bootstrap';
import './index.css';
import Render from './Render';
import ListName from './ListName';
import {useState} from 'react';

function App() {

  
    const json = JSON.parse(localStorage.getItem("key")) 
    const json1 = JSON.parse(localStorage.getItem("delete")) 
    
   


  // create ListBook
  const [add, setAdd] = useState(json);
 
  
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const onChange = (e) => {
          setValue(e.target.value)     
    }
    const onChange1 = (e) => {  
          setValue1(e.target.value)
    }
    const onChange2 = (e) => {
          setValue2(e.target.value)
    }
    const d = new Date(value2 );
    const checkDay = () => {
      let dayName ='';
      switch (d.getMonth()) {
        case 0:
          dayName ="Jan"
          
        break;
        case 1:
            dayName ="Feb"
            
        break;
        case 2:
          dayName ="Mar"
          
        break;
        case 3:
            dayName ="Apr"
            
        break; 
        case 4:
          dayName ="May"
          
        break;
        case 5:
            dayName ="Jun"
            
        break; 
        case 6:
          dayName ="Jul"
          
        break;
        case 7:
            dayName ="Aug"
            
        break; 
        case 8:
          dayName ="Sep"
          
        break;
        case 9:
            dayName ="Oct"
            
        break; 
        case 10:
          dayName ="Nov"
          
        break;
        case 11:
            dayName ="Dec"
            
        break;   
      
       
      }
     
     return dayName;
     
       
    }
    
    
    
     


    const handleAddBook = () => {
        const newList = {
          name: value,
          month : checkDay(),
          year: d.getFullYear(),
          day: d.getDate(),

          price: value1
        }

        const fakeList = [...add]

        fakeList.push(newList)
        
        localStorage.setItem('key', JSON.stringify(fakeList))


        setAdd(fakeList)


        setValue('')
        setValue1('')
        setValue2('')
       

            
    }

    // show 
    const [show, setShow] = useState(false)
    const [block, setBlock] = useState(true);
    const [btn, setBtn] = useState(false);

    const blockShow = () => {
      setShow(!show)
      setBlock(!block)
    }

    const btnCancel = () => {
      setShow(!show)
      setBlock(!block)
      
      //remove update
      setBtn(!btn)
      setValue('')
      setValue1('')
      setValue2('')
    }


    // remove
    const removeExpense = (month) => {
      
      const listExpense = [...add]
      
      const expenses = listExpense.filter(element => !(element.month === month));
      localStorage.setItem('key',JSON.stringify(expenses));

      
      setAdd(expenses)
    } 

    const editExpense = (name, price, month) => {
        //value
          setValue(name);
          setValue1(price);
          setValue2(month);
        // btnUpdate
          setBtn(!btn)
      
      // setShow(!show)

        
         


    }
    const handleUpdateBook = (e) => {
     
     
      

  
      


    }
      
      const tabs = [
        {
          month1: "Jan",
        },
        {
          month1: "Feb",
        },
        {
          month1: "Mar",
        },
        { 
          month1: "Apr",
        },
        { 
          month1: "May",
        },
        { 
          month1: "Jun",
        },
        { 
          month1: "Jul",
        },
        { 
          month1: "Aug",
        },
        { 
          month1: "Sep",
        },
        { 
          month1: "Oct",
        },
        { 
          month1: "Nov",
        },
        { 
          month1: "Dec",
        },
      ];
  return (
 
          <Container >
             
             <Row>

              <div className='conten1'>
              {block && <Button onClick={blockShow} 
              className='btn1' variant="success">Add new expense</Button>}
              {show && <Row>
                    <Form>
                       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                             Name
                            </Form.Label>
                            <Col sm={10}>
                              <Form.Control 
                              onChange={onChange}
                              value={value} type="text" 
                              placeholder="Enter here Name.." />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                              Amount
                            </Form.Label>
                            <Col sm={10}>
                              <Form.Control 
                              onChange={onChange1}

                              value={value1} type="text" 
                              placeholder="Enter here Amount.." />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                              Date
                            </Form.Label>
                            <Col sm={10}>
                              <Form.Control 
                              onChange={onChange2}

                              value={value2} 
                              style={{color: "rgb(122 120 120)"}} type="date" placeholder="dd/mm/yyy" />
                            </Col>
                        </Form.Group>
                        <Button onClick={btnCancel} className="btn-cancel" variant="secondary">CANCEl</Button>{' '}
                        <Button onClick={handleAddBook} className="btn-add" variant="primary">ADD</Button>{' '}
                        {btn && <Button onClick={handleUpdateBook} className="btn-update" variant="primary">Update</Button>}

                    </Form>
             </Row> }
              </div> 
                <div>
                        <Row className="row1">
                        <Form.Select className='select' aria-label="Default select example">
                            <option>2022</option>
                            <option value="1">2021</option>
                            <option value="2">2023</option>
                            <option value="3">2024</option>
                      </Form.Select>
                    </Row> 
                    <div className="menu-column">
                          
                        {tabs.map(tab => (
                          <Render month1 = {tab.month1} 
                          
                         
                           />
                        ))}
                  
                        
                    </div>
                 

                   
                       
                        {
                          add.map(item => (

                            <ListName 
                                month = {item.month}
                                year = {item.year}
                                day = {item.day}
                                name = {item.name}
                                price = {item.price}
                                onExpense = {removeExpense}
                                onEditExpense={editExpense}
                            />
                          ))
                         
                          
                        }
                        
                 
                </div>
            
             </Row>


             
            </Container>
        
    
  );
}

export default App;
