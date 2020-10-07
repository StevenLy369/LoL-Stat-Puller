import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// import Match from './Match'



function MatchHistory(props) {
    const { MatchListDTO } = props;
  


    return (
        <React.Fragment>
           
            <p>Champion:{ MatchListDTO.matches && MatchListDTO.matches[0] ? MatchListDTO.matches[0].champion : null}</p>
           {/* <p>Role:{ MatchListDTO.matches[0] ? MatchListDTO.matches[0].role : null}</p>
           <p>Lane: {MatchListDTO.matches[0] ? MatchListDTO.matches[0].lane : null}</p>  */}
         

        </React.Fragment>


    )


}

MatchHistory.propTypes = {
    MatchListDTO: PropTypes.array
}


export default MatchHistory