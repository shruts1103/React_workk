import {
  Camera,
  HolidayVillage,
  Logout,
  Person,
  Settings,
  VideoCall,
} from "@mui/icons-material";
import "./App.css";
import { Button } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function App() {
  return (
    <>
      <div className="container">
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ width: "120px", height: "40px" }}
          startIcon={<Person></Person>}
        >
          Friends
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ width: "120px", height: "40px" }}
          startIcon={<HolidayVillage></HolidayVillage>}
        >
          Homepage
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ width: "120px", height: "40px" }}
          startIcon={<FormatListBulletedIcon></FormatListBulletedIcon>}
        >
          Lists
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ width: "120px", height: "40px" }}
          startIcon={<Camera></Camera>}
        >
          Camera
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ width: "120px", height: "40px" }}
          startIcon={<VideoCall></VideoCall>}
        >
          Videos
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ width: "120px", height: "40px" }}
          startIcon={<Settings></Settings>}
        >
          Settings
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ width: "120px", height: "40px" }}
          startIcon={<Logout></Logout>}
        >
          Logout
        </Button>
      </div>
    </>
  );
}

export default App;
