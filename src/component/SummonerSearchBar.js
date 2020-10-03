import React from 'react';
import PropTypes from 'prop-types';


function SummonerSearchBar(props)  {

    function handleNewSummonerSearch(event){
        event.preventDefault();
        console.log(props.summonerName)
        props.onNewSummonerSearch({
            summonerName:event.target.summonerName.value
            
        })
        
        // console.log(event.target.summonerName.value)
    }

    return(
        <React.Fragment>
        <form onSubmit = {handleNewSummonerSearch}>
            <input
            type="text"
            name='summonerName' />
            <button type="submit">SEARCH!</button>
        </form>
    </React.Fragment>



    )
 
}

SummonerSearchBar.prototype = {
    onNewSummonerSearch: PropTypes.func
}

export default SummonerSearchBar;