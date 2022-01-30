import * as mui from "@mui/material"; 

const Button = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#000000",
    margin: "3%",
    fontFamily: "hussor-bold",
  
    "&:hover": {
      backgroundColor: "rgba(56, 56, 56, 0.938)",
      color: "white",
      boxShadow: "0px 0px 20px 1px #0f0f0f",
    },
    "&:focus": {
      border: "none",
      boxShadow: "none",
      outline: "none",
    },
  }));

  export default Button