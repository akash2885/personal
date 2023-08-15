import React, { useState, useEffect } from "react";
import {AppBar, styled, Tab, Toolbar, Tabs, Typography, Grid} from "@mui/material";
import {grey} from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import {Info} from "@mui/icons-material";

const Header = () => {
    const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
    const HeaderTabs = styled(Tab)({
        color: "white",
        textTransform: "none",
        fontFamily: "Arial",
        fontSize: '15px'
    });

    const location = useLocation();
    const [value, setValue] = useState(1);

    useEffect(() => {
        if (location.pathname === "/experience") {
            setValue(2);
        } else {
            setValue(1);
        }
    }, [location]);
    //Allows for indicator color to transition between the current pages

    const handleTabs = (e, value) => {
        setValue(value);
    };

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
                    <Tabs
                        value={value}
                        onChange={handleTabs}
                        textColor="secondary"
                        indicatorColor="secondary"
                        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <HeaderTabs
                            component={Link}
                            to="/"
                            label="About"
                            value={1} />

                        <HeaderTabs
                            component={Link}
                            to="/experience"
                            label="Projects / Skills"
                            value={2}
                        />
                        <HeaderTabs label="Resume" value={3} />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Offset />
        </React.Fragment>
    );
};

export default Header;
