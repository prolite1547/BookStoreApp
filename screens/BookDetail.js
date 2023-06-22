import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray2,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const BookDetail = ({route, navigation}) => {
  const [book, setBook] = useState();
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(
    0,
  );

  const indicator = new Animated.Value(0);

  useEffect(() => {
    let {book} = route.params;
    setBook(book);
  }, []);

  function renderBookInfoSection() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
        {/* COLOR OVER LAY */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: book.backgroundColor,
          }}></View>

        {/* NAVIGATION HEADER */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginLeft: SIZES.base}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{height: 25, width: 25, tintColor: book.navTintColor}}
            />
          </TouchableOpacity>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{...FONTS.h3, color: book.navTintColor}}>
              Book Detail
            </Text>
          </View>
          <TouchableOpacity
            style={{marginRight: SIZES.base}}
            onPress={() => console.log('CLICK MORE')}>
            <Image
              source={icons.more_icon}
              resizeMOde="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: book.navTintColor,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>
        {/* BOOK COVER */}
        <View
          style={{
            flex: 5,
            paddingTop: SIZES.padding2,
            alignItems: 'center',
          }}>
          <Image
            source={book.bookCover}
            resizeMode="contain"
            style={{flex: 1, width: 150, height: 'auto'}}
          />
        </View>
        {/* BOOK AUTHOR AND TITLE */}
        <View
          style={{
            flex: 1.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h2, color: book.navTintColor}}>
            {book.bookName}
          </Text>
          <Text style={{...FONTS.body3, color: book.navTintColor}}>
            {book.author}
          </Text>
        </View>
        {/* BOOK INFO */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            margin: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          {/* RATING */}
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.rating}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>Rating</Text>
          </View>

          <LineDivider />
          {/* PAGE NO */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: SIZES.radius,
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.pageNo}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>
              Number of Pages
            </Text>
          </View>

          <LineDivider />
          {/* LANGUAGE */}
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.language}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>Language</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderBookDescription() {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;
    return (
      <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding}}>
        {/* CUSTOM SCROLLBAR */}
        <View
          style={{
            width: 4,
            backgroundColor: COLORS.gray1,
            height: '100%',
          }}>
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: COLORS.lightGray4,
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    scrollViewVisibleHeight / scrollViewWholeHeight,
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
        </View>
        {/* DESCRIPTION */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: SIZES.padding2}}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {x, y, width, height},
            },
          }) => {
            setScrollViewVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: indicator}}}],
            {useNativeDriver: false},
          )}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              marginBottom: SIZES.padding,
            }}>
            Description
          </Text>
          <Text style={{...FONTS.body2, color: COLORS.lightGray}}>
            {book.description}
          </Text>
        </ScrollView>
      </View>
    );
  }

  function renderButtonBottom() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* BOOKMARK */}
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.secondary,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => console.log('BOOKMARKED')}>
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            style={{height: 25, width: 25, tintColor: COLORS.lightGray2}}
          />
        </TouchableOpacity>
        {/* START READING */}
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Start Reading')}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (book) {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        {/* BOOK COVER SECTION */}
        <View style={{flex: 4}}>{renderBookInfoSection()}</View>
        {/* DESCRIPTION */}
        <View style={{flex: 2}}>{renderBookDescription()}</View>
        {/* BUTTONS */}
        <View style={{height: 70}}>{renderButtonBottom()}</View>
      </View>
    );
  }
  return <></>;
};

export default BookDetail;
