import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'
import Pagination from './components/Pagination'
import Search from './components/Search'
import axios from 'axios'

function App() {
  const [activePage, setActivePage]= useState(1)
  const [loading, setLoading] = useState(false)
  const [records, setrecords] = useState([])
  const [recordPerPage, setRecordPerPage] = useState(20)
  const [size, setsize] = useState(0)
  const [query, setquery] = useState("")

  
  useEffect(()=>{
    const getAllProfiles = async ()=>{
      setLoading(true)
      await axios.get('https://api.enye.tech/v1/challenge/records')
     .then(response=>{
         console.log(response.data)
         const {profiles} = response.data.records
         setrecords(profiles)
         setsize(response.data.size)
     })
     .catch(error=>{
         console.log(error)
     })
      setLoading(false)
    }

    getAllProfiles()
  },[])

  //Get current Records
  const indexOfLastRecord = activePage * recordPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage
  const currentRecord = records.slice(indexOfFirstRecord,indexOfLastRecord)
  const paginate =(pageNumber)=>{
    setActivePage(pageNumber)
  }
  const search=(rows=>{
    return rows.filter(row=>
      row.FirstName.toLowerCase().indexOf(query) > -1 ||
      row.LastName.toLowerCase().indexOf(query) > -1
      )
  })
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center mb-3">Patients Records</h1>
      <Search class="mb-3" query={query} changeQuery={setquery}/>
     <Profile records={search(currentRecord)}  loading={loading} />
     <Pagination recordPerPage={recordPerPage} size={size} paginate={paginate} />
    </div>
  );
}

export default App;
