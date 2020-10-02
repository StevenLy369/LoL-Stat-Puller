import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";




function SummonerInfo(props){
    
     


    return (
        <React.Fragment>
             <h1>THIS IS SUMMONER INFO</h1>
             <p>Summoner Name: {props.SummonerDTO.name}</p>
                     <img src= {`http://ddragon.bangingheads.net/cdn/10.19.1/img/profileicon/${props.SummonerDTO.profileIconId}.png`} alt="profile-icon"></img>
                    
                    
         </React.Fragment>
    )
}


SummonerInfo.propTypes = {
    SummonerDTO: PropTypes.array
}


export default SummonerInfo