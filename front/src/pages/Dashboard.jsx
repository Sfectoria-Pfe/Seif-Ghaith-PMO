import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import bondImg from '../images/bondImg.png';
import valide from '../images/valide.png';
import enCours from '../images/enCours.png'
import rejete from '../images/rejete.png'
function Dashboard() {
  return (
    <div  style={{marginLeft:300,width:50}}>
      
      <p style={{fontSize:28 }}>Dashboard</p>
      <div className='d-flex gap-4' >
    <div>
      
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className='d-flex gap-4 '>
        <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
          Total Bonde d'entée
        </Typography>
        
        <div>
        <img src={bondImg}  style={{width:40,height:40}} />
        </div>
        </div>
        <div className='text-center'>
        <p style={{fontSize:30}}>50</p>
        </div>
      </CardContent>
      
    </Card>
    </div>
    
    <div>

  
  <Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée valider
    </Typography>
    
    <div>
    <img src={valide}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>10</p>
    </div>
  </CardContent>
  
</Card>
</div>
<div>
<Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée en cours
    </Typography>
    
    <div>
    <img src={enCours}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>20</p>
    </div>
  </CardContent>
  
</Card>
</div>
<div>
<Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée a rejeter
    </Typography>
    
    <div>
    <img src={rejete}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>4</p>
    </div>
  </CardContent>
  
</Card>
</div>
</div>  
</div>
    
    
  )
}

export default Dashboard
