import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

function User() {

    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: ""
    })

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
    };

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setFormData((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const handleSubmit = async () => {
        try {
            if(!formData.firstname){
                alert("First name is required!");
                return;
            }
            if(!formData.lastname){
                alert("Last name is required!");
                return;
            }
            if(!formData.email){
                alert("Email is required!");
                return;
            }
            const result = await axios.post('http://localhost:5000/api/users', { formData: formData });
            console.log("reuslt",result)
            if(result.data.status){
                localStorage.setItem("users",JSON.stringify(result.data.result))
                alert("regitser successfull")
            }else{
                alert(result.data.message || "Something went wrong")
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField
                id="standard-basic"
                label="firstName"
                variant="standard"
                onChange={handleChange}
                name='firstname'
            />
            <TextField
                id="standard-basic"
                label="lastName"
                variant="standard"
                onChange={handleChange}
                name='lastname'
            />
            <TextField
            type="email"
                id="standard-basic"
                label="Email"
                variant="standard"
                onChange={handleChange}
                name='email'
            />
            
            <br/>
            <Button variant="outlined" onClick={handleSubmit} style={{width:'100px'}}>Submit</Button>
            
        </Box>

        </>
    )
}

export default User