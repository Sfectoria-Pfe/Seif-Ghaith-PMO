import React from 'react'
import './inbox.css'
import SearchIcon from '@mui/icons-material/Search';

import Singelmail from '../components/Singelmail'
import { Input, TextField } from '@mui/material';
function Inbox() {
  return (
    <div className='d-flex justify-content-between'>

<div>
<div className='inbox pl-4'> 
<p className='pinbox'>
  Inbox
  </p>
</div>
<div style={{height:840,width:306,borderRadius:10, backgroundColor:"#F5F6FA"}} className='ml-4'>
    <div className='d-flex justify-content-center pt-3 pb-3'>
<button className='bg-primary botn'> sdds</button>
    </div>
    <div>
        <p className='pl-1'> My email</p>
      
        <div className='d-flex flex-column align-items-center justify-content-center'>
      
        <div className='obj'>lsls</div>
        <div className='obj' >dlllsl</div>
        <div className='obj' >lslsls</div>
        <div className='obj' >s,s</div>

        </div>
    </div>

</div>
</div>
<div>
    <div className='inbox '> 
  </div>
    <div className='main mr-4'>
<div className='d-flex align-items-center pt-3 pb-5 pl-2'>
<SearchIcon/>
<Input
label="Search"/>
</div>
<div>
  <Singelmail/>
  <Singelmail/>
  <Singelmail/>
  <Singelmail/>
</div>
    </div>

</div>

    </div>
  )
}

export default Inbox