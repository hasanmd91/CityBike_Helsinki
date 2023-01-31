import { AppBar, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        background: "black",
      }}
    >
      <Box sx={{ marginLeft: "20px" }}>
        <DirectionsBikeIcon sx={{ color: "yellow" }} />
        <DirectionsBikeIcon sx={{ color: "yellow", marginLeft: "10px" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginRight: "30px",
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h5" align="center" color="#f5f5f5">
            Home
          </Typography>
        </NavLink>

        <NavLink to="/stations" style={{ textDecoration: "none" }}>
          <Typography variant="h5" align="center" color="#f5f5f5">
            Stations
          </Typography>
        </NavLink>
      </Box>
    </AppBar>
  );
};

export default Navbar;
