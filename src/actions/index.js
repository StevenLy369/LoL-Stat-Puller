import * as c from './actionType';

export const requestSummonerInfo = () => ({
    type: c.REQUEST_SUMMONER_INFO
});

export const summonerSuccess = (SummonerDTO) => ({
    type: c.GET_SUMMONER_SUCCESS,
    SummonerDTO,
    
});

export const summonerFailure = (error) => ({
    type: c.GET_SUMMONER_FAILURE,
    error
})

export const requestMatchListHistory = () => ({
  type:c.REQUEST_MATCHLIST_INFO
})



export const requestAccountInfo = () => ({
  type: c.REQUEST_ACCOUNT_INFO
})

export const accountSuccess = (AccountInfo) => ({
  type: c.GET_ACCOUNT_SUCCESS,
  AccountInfo,
})

export const matchHistorySuccess = (MatchListDTO) => ({
  type: c.GET_MATCHLIST_SUCCESS,
  MatchListDTO,
})



export const makeApiCall = (SummonerDTO) => {
    return dispatch => {
      dispatch(requestSummonerInfo);
      return fetch( `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SummonerDTO.summonerName}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(
          (jsonifiedResponse) => {
            dispatch(summonerSuccess(jsonifiedResponse))  
            
          })
        .catch((error) => {
          dispatch(summonerFailure(error));
          
        });
        
    }
}
export const makeApiSummonerCall = (id) => {
  return dispatch => {
    dispatch(requestAccountInfo);
    return fetch( `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(accountSuccess(jsonifiedResponse)); 
          
        })
        
      .catch((error) => {
        dispatch(summonerFailure(error));
      });
  }
  
}


export const makeMatchHistoryCall = (accountId) => {
  return dispatch => {
    dispatch(requestMatchListHistory);
    return fetch ( `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(reponse => reponse.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(matchHistorySuccess(jsonifiedResponse)); 
        
      })
      
    .catch((error) => {
      dispatch(summonerFailure(error));
    });
}

}