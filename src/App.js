import './App.css';
import ProfilePicture from "./Component/Profile/ProfilePhoto.js";
import {FullName} from "./Component/Profile/FullName.js";
import {Adress} from "./Component/Profile/Address.js";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// import hi from "./Component/Profile/hi.svg"


// function App() {
//   return (
//     <div className="App">
//       <br></br>



// {/* <img src={hi}/> */}
//       </div>
//   );
// }

// export default App;



export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <ProfilePicture/>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              <FullName/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
              <Adress/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

