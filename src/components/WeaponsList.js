import React from 'react';

class WeaponsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {equipment: props.equipment, stats: props.stats};

    this.listItemStyle = {
      fontSize:12,
      backgroundColor: '#eeeeee',
      alignSelf: 'space-around',
      paddingRight:'3vw'
    };

    this.listStyle = {
      display: "flex",
      'flexDirection': "row",
      'justifyContent':'space-between',
      'alignSelf':'center'
    };
  }

  max(val1, val2) {
    if(val1>val2)
      return val1;
    else return val2;
  }

  listItem(value){
    if(value.type!=="weapon")
      return null;
    console.log();
    let bonus = 0;
    if(value.isFinesse) {
      bonus = this.max(this.state.stats.strMod, this.state.stats.dexMod);
    }
    else
      bonus=this.state.stats.strMod;
    let atkBonus = bonus + this.props.stats.profMod;
    if(value.isVersatile){
      console.log("Need to fill in function change for if weapon is versatile")
    }
    //atkBonus = props.modifiers.strMod;

    return(
      <li key={value.name} style={this.listStyle}>
        <p style={this.listItemStyle}>{value.name}</p>
        <p style={this.listItemStyle}>{this.props.modStr(atkBonus)}</p>
        <p style={this.listItemStyle}>{value.damageDieNum}{value.damageDie}{this.props.modStr(bonus)} {value.damageType}</p>
      </li>
    )
  }

  render(){
    return(
      <ul>
        {this.state.equipment.map((weapon) => this.listItem(weapon)/*"<ListItem key={weapon.toString()} value={weapon} stats={this.state.stats}/>"*/)}
      </ul>
    );
  }
}

export default WeaponsList;
