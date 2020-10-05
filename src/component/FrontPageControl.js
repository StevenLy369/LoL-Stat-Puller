import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall,makeApiSummonerCall} from '../actions/index'
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
      const {dispatch,SummonerDTO} = this.props;
      dispatch(makeApiCall(summonerName));
      // dispatch(makeApiSummonerCall())



    }

    runthis = (SummonerDTO) => {
      
     const {dispatch} = this.props;
      dispatch(makeApiSummonerCall(SummonerDTO))
      
      
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
              <button onClick={this.runthis}>onClick</button>
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