import React from 'react';
import StatBox from "./StatBox";

class StatNSkillBox extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
     <StatBox stats={this.props.stats} profs={this.props.profs}/>
    )
  }
}

export default StatNSkillBox;
