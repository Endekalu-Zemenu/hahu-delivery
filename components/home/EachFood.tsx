import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import images from "@/constants/images";

type EachFoodProps = {
  name: string;
  restaurant: string;
  price: number;
  handlePress?: () => void;
};

const EachFood = ({ name, restaurant, price, handlePress }: EachFoodProps) => {
  return (
    <Pressable
      className='w-[160px] items-center justify-start rounded-xl shadow bg-white pb-4 mr-2 ml-2 mb-3'
      style={styles.boxShadow}
      onPress={handlePress}
    >
      <Image
        source={images.burger}
        className='h-[110px] w-[110px] self-center my-2'
        resizeMode='contain'
      />
      <Text className='font-SenBold text-[21px] items-start w-full px-2 mb-2'>
        {name.length > 8 ? `${name.slice(0, 8)}..` : name}
      </Text>
      <View className='flex-row justify-between w-full px-2 rounded-lg'>
        <Text className='font-SenRegular text-[18px]'>
          {restaurant.length > 6 ? `${restaurant.slice(0, 6)}..` : restaurant}
        </Text>
        <Text className='font-SenRegular text-[19px]'>${price}</Text>
      </View>
    </Pressable>
  );
}

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

export default EachFood;