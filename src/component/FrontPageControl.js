import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall} from '../actions/index'
import SummonerInfo from './SummonerInfo';
import SummonerSearchBar from './SummonerSearchBar';


class FrontPage extends React.Component {
    constructor(props){
        super(props);
    }


    // componentDidMount(){
    //     const {dispatch} = this.props;
    //     dispatch(makeApiCall());
    //     // dispatch(makeApiSummonerCall());
    // }

    handleSummonerSearch = (summonerName) => {
      const {dispatch} = this.props;
      dispatch(makeApiCall(summonerName));


       

      
    }




    render() {
        
        const { error, isLoading,SummonerDTO} = this.props;
        if (error) {
          return <React.Fragment>Error: {error.message}</React.Fragment>;
        } else if (isLoading) {
          return <React.Fragment>Loading...</React.Fragment>;
        } else {
          return (
            <React.Fragment>
              <SummonerSearchBar onNewSummonerSearch = {this.handleSummonerSearch}/>
                    <SummonerInfo  SummonerDTO = {SummonerDTO}/>
                 
                    
                    
               
            
            </React.Fragment>
          )
        }
      }

}

const mapStateToProps = state => {
    return {
        SummonerDTO: state.SummonerDTO,
        isLoading: state.isLoading,
        error: state.error
    }
}


export default connect(mapStateToProps)(FrontPage);