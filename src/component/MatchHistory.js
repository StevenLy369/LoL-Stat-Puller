import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";




function MatchHistory(props) {
    const { MatchListDTO } = props;
  


    return (
        <React.Fragment>
            
           
           <p>Champion:{ MatchListDTO.matches && MatchListDTO.matches[0] ? MatchListDTO.matches[0].champion : null}</p>
           <p>Champion1:{ MatchListDTO.matches && MatchListDTO.matches[1] ? MatchListDTO.matches[1].champion : null}</p>
           <p>Champion2:{ MatchListDTO.matches && MatchListDTO.matches[2] ? MatchListDTO.matches[2].champion : null}</p>
           <p>Champion3:{ MatchListDTO.matches && MatchListDTO.matches[3] ? MatchListDTO.matches[3].champion : null}</p>
           

        </React.Fragment>

    )


}

MatchHistory.propTypes = {
    MatchListDTO: PropTypes.array
}


export default MatchHistory