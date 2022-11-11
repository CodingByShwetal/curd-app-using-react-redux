import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';

const useStyles = makeStyles((theme) => ({
    root: {
       marginTop:10, 
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
}));


const AddUser = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name : "",
        email : "",
        contact : "",
        address : ""
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) =>{
        let {name, value} = e.target;
        setState({...state, [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !address || !contact || !email) {
            setError("Please enter all fields");
        }
        else{
            dispatch(addUser(state));
            navigate("/");
            setError("");
        }
    }

    const {name, address, contact, email} = state;
    return (
    <div>
        <Button 
            style={{width:"100px", marginTop:"10px", marginLeft: "10px"}} 
            variant="contained" 
            color="primary" 
            onClick={() => navigate("/")}
        >
            Go Back
        </Button>
        <h2>Add New User</h2>
        {error && <h3 style={{color: "red"}}>{error}</h3>}
        <form className={classes.root} onSubmit={ handleSubmit} noValidate autoComplete="off">
            <TextField id="standard-basic"
                label="Full Name" 
                value={name} 
                name="name" 
                type="text"
                onChange={handleInputChange}
            /><br/>
            <TextField 
                id="standard-basic" 
                label="Email Id" 
                value={email} 
                name="email" 
                type="email"
                onChange={handleInputChange}
            /><br/>
            <TextField 
                id="standard-basic" 
                label="Contact No" 
                value={contact} 
                name="contact"
                type="number"
                onChange={handleInputChange}
            /><br/>
            <TextField 
                id="standard-basic" 
                label="Address" 
                value={address} 
                name="address"
                type="text"
                onChange={handleInputChange}
            /><br/>
            <Button 
                style={{width:"100px"}} 
                variant="contained" 
                color="primary" 
                type="submit"
            >
                Submit
            </Button>
        </form>
    </div>
  )
}

export default AddUser
