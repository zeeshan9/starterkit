import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Dimensions, TouchableOpacity, Platform} from 'react-native';
// import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const {height, width} = Dimensions.get('window');

export default function BottomScreen1() {
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // "react-native-google-mobile-ads": "^14.2.3", 
  // "react-native-google-mobile-ads": {
  //   "android_app_id": "ca-app-pub-xxxxxxxx~xxxxxxxx",
  //   "ios_app_id": "ca-app-pub-xxxxxxxx~xxxxxxxx"
  // }
  // Ads code
  // const bannerRef = useRef<BannerAd>(null);
  // useForeground(() => {
    // Platform.OS === 'ios' && bannerRef.current?.load();
  // })

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} /> */}

      <Text>Hello world</Text>
      <View
        style={{
          height: height / 2 + 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={true}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex(Number((x / width).toFixed(0)));
          }}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  width: width - 50,
                  height: height / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    width: '90%',
                    height: '90%',
                    backgroundColor: 'green',
                    borderRadius: 10,
                  }}></TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: currentIndex == index ? 50 : 8,
                height: currentIndex == index ? 10 : 8,
                borderRadius: currentIndex == index ? 5 : 4,
                backgroundColor: currentIndex == index ? 'green' : 'gray',
                marginLeft: 5,
              }}></View>
          );
        })}
      </View>
    </View>
  );
}