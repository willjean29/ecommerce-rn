import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { Colors } from 'utils/enums';

export interface CarouselImagesProps {
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  activeSlide: number;
  arrayImages: string[];
  height: number;
  width: number;
}
 
const CarouselImages: React.FC<CarouselImagesProps> = ({arrayImages,height,width,activeSlide,setActiveSlide}) => {

  const renderItem = ({item,index}: {item: string,index: number}) => {
    return (
      <Image
        style={{width,height}}
        source={{uri: item}}
        resizeMode="cover"
        PlaceholderContent={
          <ActivityIndicator size="large" color={Colors.GREEN}/>
        }
      />
    )
  }
  return (  
    <View>
      <Carousel
        layout={'tinder'}
        data={arrayImages}
        sliderWidth={width}
        itemWidth={width}
        sliderHeight={height}
        itemHeight={height}
        renderItem={(item) => renderItem(item)}
        onSnapToItem={(slideIndex) => setActiveSlide(slideIndex)}
      />
      <CarouselPagination
        data={arrayImages}
        activeSlide={activeSlide}
      />
    </View>

  );
}

interface CarouselPaginationProps {
  data: string[];
  activeSlide: number;
}
const CarouselPagination: React.FC<CarouselPaginationProps> = ({data, activeSlide}) => {
  return (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeSlide}
      containerStyle={{
        position: "absolute",
        alignSelf: "center",
        bottom: 30,
      }}
      dotStyle={{
        backgroundColor: Colors.GREENLIGHT,
        width: 15,
        height: 15,
        borderRadius: 50,
      }}
      inactiveDotStyle={{
        backgroundColor: Colors.GREEN,
        width: 15,
        height: 15,
      }}
      inactiveDotScale={0.6}
    />
  )
}
 
export default CarouselImages;
