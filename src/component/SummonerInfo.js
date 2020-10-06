import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";




function SummonerInfo(props) {
    const { SummonerDTO, AccountInfo } = props;

    // function showRank (props) {
    //     if(AccountInfo[0].tier == "bronze"){
    //         return <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/regalia/banners/trims/trim_bronze.png"></img>
    //     }
    //     else{
    //         return null;
    //     }

    // }
   
    return (
        <React.Fragment>
            <p>Summoner Name: {SummonerDTO.name}</p>  {SummonerDTO.profileIconId ? <img className="profile-img" src={`http://ddragon.bangingheads.net/cdn/10.19.1/img/profileicon/${SummonerDTO.profileIconId}.png`} alt="profile-icon"></img> : null}
            <p>Summoner Level: {SummonerDTO.summonerLevel}</p>
            <p>{AccountInfo[0] ? AccountInfo[0].tier : null} {AccountInfo[0] ? AccountInfo[0].rank : null}</p>
            <p>{AccountInfo[0] && AccountInfo[0].tier ==="PLATINUM" ? <img src= {`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/05_platinum/images/platinum_baseface_matte.png`} alt="rank metal"/> : null}</p>
            <p>{AccountInfo[0] && AccountInfo[0].tier ==="MASTER" ? <img src= {`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/07_master/images/master_baseface_matte.png`} alt="rank metal"/> : null}</p>
            <p>{AccountInfo[0] && AccountInfo[0].tier ==="SILVER" ? <img src= {`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/03_silver/images/silver_baseface_matte.png`} alt="rank metal"/> : null}</p>
            <p>{AccountInfo[0] && AccountInfo[0].tier ==="GOLD" ? <img src= {`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/04_gold/images/gold_baseface_matte.png`} alt="rank metal"/> : null}</p>
            <p>{AccountInfo[0] && AccountInfo[0].tier ==="DIAMOND" ? <img src= {`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/06_diamond/images/diamond_baseface_matte.png`} alt="rank metal"/> : null}</p>
            <p>{AccountInfo[0] && AccountInfo[0].tier ==="GRANDMASTER" ? <img src= {`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/08_grandmaster/images/grandmaster_baseface_matte.png`} alt="rank metal"/> : null}</p>
            <p>Wins:{AccountInfo[0] ? AccountInfo[0].wins : null}</p>
            <p>Losses:{AccountInfo[0] ? AccountInfo[0].losses : null}</p>
            <p>Lp: {AccountInfo[0] ? AccountInfo[0].leaguePoints : null}</p>

           
           
        </React.Fragment>
    )
}

SummonerInfo.propTypes = {
    SummonerDTO: PropTypes.array,
    AccountInfo: PropTypes.object
}


export default SummonerInfo