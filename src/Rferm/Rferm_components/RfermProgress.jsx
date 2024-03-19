import React from 'react'
import { Grid, Progress } from '@mantine/core';

function RfermProgress() {
  return (
    
    <div>
        <center>
         <Progress radius="lg" size="30px" value={60}  style={{width:"500px", height:"20px"}} striped animated />
         </center>
    </div>
   
  )
}

export default RfermProgress;