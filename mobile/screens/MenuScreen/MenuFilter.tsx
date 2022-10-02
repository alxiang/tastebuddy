import React, { FC, useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';


function MenuFilter() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
      {label: 'Spicy', value: 'spicy'},
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
        // paddingHorizontal: 15,
        // height: 10,
        // width: 20
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
          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
          containerStyle={{width: 200}}        
          zIndex={1000}
        />
      </View>
    );
  }

  export default MenuFilter;
