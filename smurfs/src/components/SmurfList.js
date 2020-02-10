import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/action'




const SmurfList = props => {
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
    };

    return (

        <div>
            {props.character.map(i =>
                <div>
                    <h1>{i.name}</h1>
                    <p>{i.age}</p>
                    <p>{i.height}</p>
                </div>

            )}
            <button onClick={fetchSmurf}> Show Smurfs</button>

        </div>

    )
}

const mapStateToProps = state => {
    return {
        character: state.character,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(
    mapStateToProps,
    { getSmurf }

)(SmurfList);