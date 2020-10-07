import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


function MatchHistory (props){
    const { MatchListDTO } = props;
    




    return(
        <React.Fragment>
            {MatchListDTO.map((match) =>
                <Match
                    champion ={match.champion}
                    role = {match.role}

                />

            
            
            
            
            )}
        </React.Fragment>


    )

    












}



export default MatchHistory