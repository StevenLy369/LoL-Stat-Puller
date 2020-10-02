import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions'
import SummonerInfo from './SummonerInfo';


class FrontPage extends React.Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(makeApiCall());
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
                    <SummonerInfo SummonerDTO = {SummonerDTO} />
                   <p>{SummonerDTO.name}</p>
                    
                    
               
            
            </React.Fragment>
          );
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