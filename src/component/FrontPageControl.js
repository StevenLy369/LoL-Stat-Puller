import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall,makeApiSummonerCall, makeMatchHistoryCall} from '../actions/index'
import SummonerInfo from './SummonerInfo';
import SummonerSearchBar from './SummonerSearchBar';
import MatchHistory from './MatchHistory';
import Header from './Header';

class FrontPage extends React.Component {
    constructor(props){
        super(props);
    }


    handleSummonerSearch = (summonerName) => {
      const {dispatch,SummonerDTO} = this.props;
      dispatch(makeApiCall(summonerName));
      dispatch(makeApiSummonerCall(SummonerDTO.id))
      
     
    }

    handleAccountSearch = () => {
      
     const {dispatch,SummonerDTO} = this.props;
       dispatch(makeApiSummonerCall(SummonerDTO.id))
       
      
    }

    handleMatchListSearch = () => {
      const {dispatch,SummonerDTO} = this.props
      dispatch(makeMatchHistoryCall(SummonerDTO.accountId))
     

    }
    render() {
        
        const { error, isLoading, SummonerDTO, AccountInfo, MatchListDTO} = this.props;
        if (error) {
          return <React.Fragment>Error: {error.message}</React.Fragment>;
        } else if (isLoading) {
          return <React.Fragment>Loading...</React.Fragment>;
        } else {
          return (
            <React.Fragment>
              <Header />
              <button onClick={this.handleAccountSearch}>Check Rank</button>
              <button onClick={this.handleMatchListSearch}>Check Match history</button>

              <SummonerSearchBar onNewSummonerSearch = {this.handleSummonerSearch}/>
              <SummonerInfo  SummonerDTO = {SummonerDTO} AccountInfo = {AccountInfo}/>
              <MatchHistory  MatchListDTO = {MatchListDTO}/>
            </React.Fragment>
          )
        }
      }

}

const mapStateToProps = state => {
    return {
        SummonerDTO: state.SummonerDTO,
        AccountInfo: state.AccountInfo,
        isLoading: state.isLoading,
        MatchListDTO: state.MatchListDTO,
        error: state.error
    }
}


export default connect(mapStateToProps)(FrontPage);