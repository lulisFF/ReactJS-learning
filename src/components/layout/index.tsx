import React, { useState } from "react";
import TopBarComponent from "../top-bar";
import { Outlet, useLocation } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import SidebarComponent from "../sidebar";
import { useStyles } from "./styles";

const LayoutComponent: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const classes = useStyles();

    return location.pathname === "/login" ||
        location.pathname === "/register" ? (
        <>
            <Outlet />
        </>
    ) : (
        <Box
            display={isNonMobile ? "flex" : "block"}
            justifyContent="space-between"
            width="100%"
            height="100%"
        >
            <SidebarComponent
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {/*корректно отоброжение сайдбара */}
            <Box className={classes.mainSection}>
                <TopBarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                {/*переделываем навигацую компонентов через реакт роутер дом*/}

                <Outlet />
            </Box>
        </Box>
    );
};

export default LayoutComponent;
