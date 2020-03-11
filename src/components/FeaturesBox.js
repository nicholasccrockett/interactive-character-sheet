import React from 'react';

class FeaturesBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {features : this.props.Features}
    this.listStyle = {
      display:"flex",
      flexDirection:"column",
      alignContents:"start",
      borderStyle:"solid"
    };

    this.listItemStyle = {
      display:"flex"
    }
  }

  featureItem(value){
    return <li key={value} style={this.listItemStyle}>{value}</li>
  }

  render(){
    return(
      <ul style={this.listStyle}>
        {this.state.features.map((feature) => this.featureItem(feature))}
      </ul>
    )
  }
}
export default FeaturesBox;
