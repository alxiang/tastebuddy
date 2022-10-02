import React, { FC, useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';


function MenuFilter() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
      {label: 'Not spicy', value: 'not spicy'},
      {label: 'Gluten-Free', value: 'gluten-free'},
      {label: 'Vegan', value: 'vegan'},
      {label: 'Dairy', value: 'dairy'}
    ]);
  
    return (
      <View style={{
        // backgroundColor: '#171717',
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 15,
        zIndex: 999
      }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
  
          theme="LIGHT"
          multiple={true}
          mode="BADGE"
          badgeDotColors={["#E02214", "#8cdefa", "#e0c170", "#50a343"]}
          containerStyle={{width: 200}}        
          zIndex={1000}
          textStyle={{fontSize: 12}}
        //   onChangeValue={(value) => {
        //         foodState.flatMap(())
        //     }
        //   }
        />
      </View>
    );
  }

  export default MenuFilter;
