import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";




function SummonerInfo(){
    const {SummonerDTO} = this.props;
     


    return (
        <React.Fragment>
             <p>Summoner Name: {SummonerDTO.name}</p>
                    <img src= {`http://ddragon.bangingheads.net/cdn/10.19.1/img/profileicon/${SummonerDTO.profileIconId}.png`} alt="profile-icon"></img>
                    
                     <h1>THIS IS SUMMONER INFO</h1>
        </React.Fragment>
    )
}


SummonerInfo.propTypes = {
    SummonerDTO: PropTypes.object
}


export default SummonerInfo