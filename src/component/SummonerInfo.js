import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";




function SummonerInfo(props) {
    const { SummonerDTO, AccountInfo } = props;

    return (
        <React.Fragment>
            <p>Summoner Name: {SummonerDTO.name}</p>
            <p>Summoner Level: {SummonerDTO.summonerLevel}</p>
            <p>{AccountInfo[0] ? AccountInfo[0].tier : null} {AccountInfo[0] ? AccountInfo[0].rank : null}</p>
            <p>Wins:{AccountInfo[0] ? AccountInfo[0].wins : null}</p>
            <p>Losses:{AccountInfo[0] ? AccountInfo[0].losses : null}</p>
            <p>Lp: {AccountInfo[0] ? AccountInfo[0].leaguePoints : null}</p>

           
            <img src={`http://ddragon.bangingheads.net/cdn/10.19.1/img/profileicon/${SummonerDTO.profileIconId}.png`} alt="profile-icon"></img>
        </React.Fragment>
    )
}

SummonerInfo.propTypes = {
    SummonerDTO: PropTypes.array,
    AccountInfo: PropTypes.object
}


export default SummonerInfo