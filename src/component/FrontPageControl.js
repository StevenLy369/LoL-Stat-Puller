import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall,makeApiSummonerCall, makeMatchHistoryCall} from '../actions/index'
import SummonerInfo from './SummonerInfo';
import SummonerSearchBar from './SummonerSearchBar';


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
        
        const { error, isLoading,SummonerDTO,AccountInfo} = this.props;
        if (error) {
          return <React.Fragment>Error: {error.message}</React.Fragment>;
        } else if (isLoading) {
          return <React.Fragment>Loading...</React.Fragment>;
        } else {
          return (
            <React.Fragment>
              <button onClick={this.handleAccountSearch}>Check Rank</button>
              <button onClick={this.handleMatchListSearch}>Check Match history</button>
              
              <SummonerSearchBar onNewSummonerSearch = {this.handleSummonerSearch}/>
              <SummonerInfo  SummonerDTO = {SummonerDTO} AccountInfo = {AccountInfo}/>
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
        error: state.error
    }
}


export default connect(mapStateToProps)(FrontPage);