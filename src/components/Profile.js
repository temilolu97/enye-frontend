import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import ReactPaginate from 'react-paginate'
import Search from './Search'


const Profile = ({records, loading,number}) => {
    const [activePage, setActivePage]= useState(1)
    const [size, setSize] = useState(0)
    const [filtered, setfiltered] = useState([])

    if(loading){
        return(
            <h2>Loading...</h2>
        )
    }
   
    
        const currentPageData = records.map((profile, index)=>{
            return(
            <tr>
                <td>{profile.FirstName}</td>
                <td>{profile.LastName}</td>
                <td>{profile.Gender}</td>
                <td>{profile.CreditCardNumber}</td>
                <td>{profile.CreditCardType}</td>
                <td>{profile.Email}</td>
                <td>{profile.PhoneNumber}</td>
                 <td>{profile.URL}</td> 
                <td>{profile.UserName}</td>
                <td>{profile.PaymentMethod}</td>
            </tr>
            )
        })
    

    

    return ( 
        <div>
       
        <Table style={{overflowX:"auto"}} striped="true" style={{width:"100%"}} bordered size="xs">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Credit Card Number</th>
                <th>Credit Card Type</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>URL</th>
                <th>UserName</th>
                <th>Payment Method</th>
            </thead>
            <tbody>
             {currentPageData}
            </tbody>
           
        </Table>
     
        </div>
     );
}
export default Profile;