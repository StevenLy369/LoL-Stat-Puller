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

export const matchHistorySuccess = (matchHistory) => ({
  type: c.GET_MATCHHISTORY_SUCCESS,
  matchHistory
})

export const requestAccountInfo = () => ({
  type: c.REQUEST_ACCOUNT_INFO
})



export const makeApiCall = (SummonerDTO) => {
  

    return dispatch => {
      dispatch(requestSummonerInfo);
      return fetch( `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SummonerDTO.summonerName}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(
          (jsonifiedResponse) => {
            dispatch(summonerSuccess(jsonifiedResponse))})
        .catch((error) => {
          dispatch(summonerFailure(error));
        });
    }

    
}


export const makeApiSummonerCall = (SummonerDTO) => {
  return dispatch => {
    dispatch(requestAccountInfo);
    return fetch( `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${SummonerDTO.id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(matchHistorySuccess(jsonifiedResponse));
          console.log(jsonifiedResponse)
          
      
        })
      .catch((error) => {
        dispatch(summonerFailure(error));
      });
  }
}