import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import MenuIcon from '@material-ui/icons/Menu';
import {
    Navbar,
    Button,
    NavbarToggler
} from "reactstrap";
import { Link } from "react-router-dom";

const TopBar = ({ toggleSidebar }) => {
    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    return (
        <>
            <Button color="info" onClick={toggleSidebar}>
                <MenuIcon />
            </Button>
        </>    
    );
};

export default TopBar;