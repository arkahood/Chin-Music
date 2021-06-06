import { Component } from "react";
import './Header.css';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SportsCricketSharpIcon from '@material-ui/icons/SportsCricketSharp';
import Typography from '@material-ui/core/Typography';


class Header extends Component{
    render(){
        return(
            <div className='header'>
                <AppBar position="static">
                    <Toolbar>
                        <h1 className='ok'>Chin<SportsCricketSharpIcon fontSize="large"/>Music</h1>
                        {/* <Typography variant="h6" className='ok'>
                            News
                        </Typography> */}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;