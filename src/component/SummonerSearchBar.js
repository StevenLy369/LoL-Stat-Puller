import React from 'react';
import PropTypes from 'prop-types';


function SummonerSearchBar(props)  {

    function handleNewSummonerSearch(event){
        event.preventDefault();
        props.onNewSummonerSearch({
            summonerName:event.target.name.value
        })
        console.log(event.target.name.value);
    }

    return(
        <React.Fragment>
        <form onSubmit = {handleNewSummonerSearch}>
            <input
            type="text"
            name='name' />
            <button type="submit">SEARCH!</button>
        </form>
    </React.Fragment>



    )
 
}

SummonerSearchBar.prototype = {
    onNewSummonerSearch: PropTypes.func
}

export default SummonerSearchBar;