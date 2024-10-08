import { View, Text, Image, StyleSheet } from "react-native"
import images from "@/constants/images"
import icons from "@/constants/icons"
import { EachRestaurantType } from "@/types/restaurant";


const EachRestaurant = ({ id, name, address, rating, deliveryFee, cookTime }: EachRestaurantType) => {
  return (
    <View className='px-2 mt-4 bg-white pb-4 rounded-xl pt-2' style={styles.boxShadow}>
      <Image
        source={images.restaurant1}
        className='h-[170px] w-[98%] self-center mb-2 rounded-lg'
        resizeMode='stretch'
        resizeMethod='resize'
      // style={{ borderRadius: 10 }}
      />
      <View className='px-3 gap-1 mb-1'>
        <Text className='text-[20px] font-SenMedium '>{name}</Text>
        <Text className='text-[17px] font-SenRegular text-gray-100'>{address}</Text>
      </View>
      <View className='mt-2 px-3 flex-row'>
        <View className='flex-row items-center gap-[2px] mr-5
        '>
          <Image
            source={icons.star}
            className='w-6 h-6'
            resizeMode='contain'
            tintColor="#FF7622"
          />
          <Text className='text-[18px] font-SenSemibold'>{rating}</Text>
        </View>
        <View className='flex-row items-center gap-[5px] mr-5
        '>
          <Image
            source={icons.car}
            className='w-6 h-6'
            resizeMode='contain'
            tintColor="#FF7622"
          />
          <Text className='text-[18px] font-SenMedium'>{typeof deliveryFee === 'string' ? deliveryFee : `$${deliveryFee}`}</Text>
        </View>
        <View className='flex-row items-center gap-[2px]
        '>
          <Image
            source={icons.time}
            className='w-6 h-6'
            resizeMode='contain'
            tintColor="#FF7622"
          />
          <Text className='text-[18px] font-SenRegular'>{cookTime} min</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }
});

export default EachRestaurant;