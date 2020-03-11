import React from 'react';

class EquipmentInventory extends React.Component {
  eqItem(value){
    return <li key={value.name} className="eqListItem" >{value.name}</li>
  }

  render(){
    return(
      <ul className="EquipmentInventory">
        {this.props.eq.map((equipment) => this.eqItem(equipment))}
      </ul>
    )
  }
}
export default EquipmentInventory;
