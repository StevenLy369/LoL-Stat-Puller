import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";




function SummonerInfo(props){
    const {SummonerDTO, AccountInfo} = props;
     

    return (
        <React.Fragment>
          
             
             <p>Summoner Name: {SummonerDTO.name}</p>
             <p>Summoner Level: {SummonerDTO.summonerLevel}</p>
             <img src= {`http://ddragon.bangingheads.net/cdn/10.19.1/img/profileicon/${SummonerDTO.profileIconId}.png`} alt="profile-icon"></img>
             
             
                    
                    
         </React.Fragment>
    )
}


SummonerInfo.propTypes = {
    SummonerDTO: PropTypes.array
}


export default SummonerInfo