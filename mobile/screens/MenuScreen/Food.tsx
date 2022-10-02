import { useLinkProps } from '@react-navigation/native'
import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Text, Button } from '../../components/building-blocks'

type FoodProps = {
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    special_notes: string[]
}

const Food: FC<FoodProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.foodHeader}>
        <Text style={styles.foodName} value={props.name} />
        <View>
            {/* TODO: MAP ICONS TO GRAPHICS */}
        <Text style={styles.foodName} value={""} />
        </View>
      </View>
      <Text style={styles.description} value={props.description}/>
      <View style={styles.bottom}>
        <Text value={`$ ${(props.price).toFixed(2)}`} />
        <View>
        <Button title={"Add to cart"} containerStyle={styles.button}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  foodHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  foodName: {
    fontSize: 20,
  },
  description: {
      fontSize: 12,
  },
  bottom: {
    marginTop: 2,
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  }
})
export default Food
