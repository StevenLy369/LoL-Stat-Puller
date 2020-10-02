import React from 'react';


function SummonerSearchBar()  {
    <React.Fragment>
        <form onSubmit = {handleNewSummonerSearch}>
            <input
            type="text"
            summonerName='summonerName' />
            <button type="submit">SEARCH!</button>
        </form>
    </React.Fragment>
}


export default SummonerSearchBar