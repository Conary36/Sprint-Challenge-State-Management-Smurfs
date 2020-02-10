import React, { useState } from 'react';
import { postSmurf } from '../actions/action'
import { connect } from 'react-redux'
import styled from 'styled-components';

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 50%;
//   margin: 2% auto;
//   background: black;
// `;



const SmurfForm = props => {
    const [char, setChar] = useState({//[{"name":"Brainey","age":200,"height":"5cm","id":0}]
        name: '',
        age: '',
        height: ''

    });

    const onChange = e => {
        setChar({ ...char, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurf(char);
        setChar({
            name: '',
            age: '',
            height: '',
            id: Date.now()
        })
    }
    return (
        <form onSubmit={handleSubmit} className='inputFields'>

            <input
                type='text'
                name='name'
                placeholder='Name of Smurf'
                onChange={onChange}
            />
            <input
                type='text'
                name='age'
                placeholder='Age of Smurf'
                onChange={onChange}
            />
            <input
                type='text'
                name='height'
                placeholder='Height of Smurf'
                onChange={onChange}
            />
            

            <button>Submit</button>
        </form>
    )
}

export default connect(
    null,
    { postSmurf }
)(SmurfForm);