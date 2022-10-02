import React, { FC, useContext, useState } from 'react'
import { Button, Text, TextInput } from '../../components/building-blocks'
import { StackScreenProps } from '@react-navigation/stack'
import { LoggedInStackParamList } from '../../navigation/NavigationTypes'
import SafeAreaView from '../../components/SafeAreaView'
import CartContext from '../../context/CartContext'
import { ScrollView, StyleSheet, View, TextInput as RNTextInput } from 'react-native'
import Colors from '../../constants/Colors'
import tasteBuddy from '../../api/tasteBuddyApi'
import UserContext from '../../context/UserContext'
import OrderContext from '../../context/OrderContext'
import { UUID } from '../../types'

const ReviewScreen: FC<StackScreenProps<LoggedInStackParamList>> = () => {
  const { user } = useContext(UserContext)
  const { cart } = useContext(CartContext)
  const { orderId } = useContext(OrderContext)
  const [ratings, setRatings] = useState(
    cart.items.reduce((acc, curr) => {
      const { foodId: key } = curr
      acc[key] = 0

      return acc
    }, {} as { [key: UUID]: number }),
  )
  const [review, setReview] = useState('')

  const updateRating = (foodId: string, rating: string) => {
    rating = rating.slice(-1)
    if (!rating || !Number(rating) || !(Number(rating) >= 0 && Number(rating) <= 5)) rating = '0'

    const newRatings = { ...ratings, [foodId]: Number(rating) }
    setRatings(newRatings)
  }

  const onSubmit = async () => {
    // const ratingPromise = tasteBuddy
    //   .patch('rating/', {
    //     user_id: user.id,
    //     order_id: orderId,
    //     ratings,
    //   })
    //   .then((res) => console.log('@@res', res.data))
    // // .catch((err) => console.log('@@err', err.response))
    // const reviewPromise = tasteBuddy.patch('review/', {
    //   user_id: user.id,
    //   order_id: orderId,
    //   reviews: review,
    // })
    // await Promise.all([ratingPromise, reviewPromise])
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text value={`Your total is $${cart.subtotal}`} style={styles.summaryText} />
          <Text value="Review and rate your experience to improve your suggestions!" style={styles.supportingText} />
        </View>
        <ScrollView>
          {cart.items.map((item, i) => {
            return (
              <View key={i} style={styles.ratingContainer}>
                <Text value={item.name} style={styles.title} />
                <RNTextInput
                  keyboardType="numeric"
                  value={`${ratings[item.foodId]}`}
                  onChangeText={(text) => updateRating(item.foodId, text)}
                  style={styles.rating}
                />
              </View>
            )
          })}
          <View style={styles.review}>
            <TextInput label="Review and Comments" value={review} onChangeText={(text) => setReview(text)} />
          </View>
          <Button title="Submit" onPress={onSubmit} containerStyle={styles.submit} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summary: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.brown,
    marginVertical: 10,
  },
  summaryText: {
    fontSize: 20,
    marginBottom: 5,
  },
  supportingText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 5,
  },
  rating: {
    width: 20,
    borderWidth: 1,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  review: {
    marginTop: 20,
    alignItems: 'center',
  },
  submit: {
    alignSelf: 'center',
    width: 100,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    borderTopWidth: 2,
    borderTopColor: Colors.brown,
  },
})

export default ReviewScreen
