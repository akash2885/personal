import React from "react";
import {createTheme} from "@mui/material";
import {blue, grey} from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            main: grey[800]
        },
        secondary: {
            main: grey[300]
        }
    }
})

export default theme