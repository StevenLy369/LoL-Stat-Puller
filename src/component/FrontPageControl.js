import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall, makeApiSummonerCall } from '../actions'
import SummonerInfo from './SummonerInfo';
import SummonerSearchBar from './SummonerSearchBar';


class FrontPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          formVisibleOnPage:false
        }
    }


    // componentDidMount(){
    //     const {dispatch} = this.props;
    //     dispatch(makeApiCall());
    //     // dispatch(makeApiSummonerCall());
    // }

    onNewSummonerSearch(summonerName){
       const {dispatch} = this.props;
      dispatch(makeApiCall(summonerName));
    }




  //   export const makeApiCall = (summonerName) => {
  //     return dispatch => {
  //       dispatch(requestSummonerInfo);
  //       return fetch( `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`)
  //         .then(response => response.json())
  //         .then(
  //           (jsonifiedResponse) => {
  //             dispatch(summonerSuccess(jsonifiedResponse));
          
  //           })
  //         .catch((error) => {
  //           dispatch(summonerFailure(error));
  //         });
  //     }
  // }
  
  
  // export const makeApiSummonerCall = (accountId) => {
  //   return dispatch => {
  //     dispatch(requestSummonerInfo);
  //     return fetch( `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/1SMzcsij_3ou0nrbwsJN7RyIZYT4dW0YuBit9NWFiXaTUxQ?api_key=${process.env.REACT_APP_API_KEY}`)
  //       .then(response => response.json())
  //       .then(
  //         (jsonifiedResponse) => {
  //           dispatch(summonerSuccess(jsonifiedResponse));
        
  //         })
  //       .catch((error) => {
  //         dispatch(summonerFailure(error));
  //       });
  //   }
  // }




    render() {
        
        const { error, isLoading,SummonerDTO} = this.props;
        if (error) {
          return <React.Fragment>Error: {error.message}</React.Fragment>;
        } else if (isLoading) {
          return <React.Fragment>Loading...</React.Fragment>;
        } else {
          return (
            <React.Fragment>
              <SummonerSearchBar onNewSummonerSearch = {this.onNewSummonerSearch}/>
                    <SummonerInfo  SummonerDTO = {SummonerDTO}/>
                 
                    
                    

            
            </React.Fragment>
          );
        }
      }

}




export default FrontPage;