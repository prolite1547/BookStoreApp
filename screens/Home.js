import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const Home = ({navigation}) => {
  const profileData = {
    name: 'MIKE',
    points: 200,
  };

  const bookOtherWordsForHome = {
    id: 1,
    bookName: 'Other Words For Home',
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: 'Eng',
    pageNo: 341,
    author: 'Jasmine Warga',
    genre: ['Romance', 'Adventure', 'Drama'],
    readed: '12k',
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: 'The Metropolis',
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: 'Eng',
    pageNo: 272,
    author: 'Seith Fried',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: 'The Tiny Dragon',
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: 'Eng',
    pageNo: 110,
    author: 'Ana C Bouvier',
    genre: ['Drama', 'Adventure', 'Romance'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: '75%',
      lastRead: '3d 5h',
    },
    {
      ...bookTheMetropolis,
      completion: '23%',
      lastRead: '10d 5h',
    },
    {
      ...bookTheTinyDragon,
      completion: '10%',
      lastRead: '1d 2h',
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    },
    {
      id: 2,
      categoryName: 'The Latest',
      books: [bookTheMetropolis],
    },
    {
      id: 3,
      categoryName: 'Coming Soon',
      books: [bookTheTinyDragon],
    },
  ];

  const [profile, setProfile] = useState(profileData);
  const [myBooks, setMyBooks] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const renderHeader = (prof) => {
    return (
      <View style={styles.header__container}>
        {/* USER PROFILE AND GREETINGS */}
        <View style={styles.header__userData}>
          <Text style={styles.header__text1}>Good Morning</Text>
          <Text style={styles.header__text2}>{prof.name}</Text>
        </View>
        {/* POINTS */}
        <TouchableOpacity
          style={styles.header__pointsContainer}
          onPress={() => console.log('TAPPED')}>
          <View style={styles.header__pointsContent}>
            <View style={styles.header__pointsRight}>
              <Image
                style={styles.header__pointsImage}
                source={icons.plus_icon}
              />
            </View>
            <Text style={styles.header__profilePoints}>{prof.points}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeaderBottom = () => {
    return (
      <View style={styles.header__bottomMainContainer}>
        <View style={styles.header__bottomContentHolder}>
          {/* CLAIM */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('CLAIM')}>
            <View style={styles.header__bottomOptions}>
              <Image
                resizeMode="contain"
                source={icons.claim_icon}
                style={{height: 30, width: 30}}
              />
              <Text style={styles.header__bottomOptionText}>Claim</Text>
            </View>
          </TouchableOpacity>
          {/* DIVIDER */}
          <LineDivider />
          {/* GET POINTS */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('GET POINTS')}>
            <View style={styles.header__bottomOptions}>
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
              <Text style={styles.header__bottomOptionText}>Get Points</Text>
            </View>
          </TouchableOpacity>
          {/* DIVIDER */}
          <LineDivider />
          {/* MY CARD */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('GET POINTS')}>
            <View style={styles.header__bottomOptions}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
              <Text style={styles.header__bottomOptionText}>My Card</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderMyBookSection = (myBooks) => {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index === 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() => navigation.navigate('BookDetail', {book: item})}>
          {/* BOOK COVER */}
          <Image
            source={item.bookCover}
            style={{height: 250, width: 180, borderRadius: 20}}
            resizeMode="cover"
          />
          {/* BOOK INFO */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItem: 'center',
              marginTop: SIZES.radius,
            }}>
            <Image
              source={icons.clock_icon}
              style={{height: 20, width: 20, tintColor: COLORS.lightGray}}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray,
              }}>
              {item.lastRead}
            </Text>
            <Image
              source={icons.page_icon}
              style={{
                height: 20,
                width: 20,
                marginLeft: SIZES.radius,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{marginLeft: 5, color: COLORS.lightGray, ...FONTS.body3}}>
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1}}>
        <View style={styles.books__headerContainer}>
          {/* BOOKS HEADER */}
          <Text style={styles.books__headerText}>My Books</Text>
          <TouchableOpacity onPress={() => console.log('see more...')}>
            <Text style={styles.books__paraText}>See More</Text>
          </TouchableOpacity>
          {/* BOOKS LIST */}
        </View>
        <View style={styles.books__container}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  const renderCategoryHeader = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, marginRight: SIZES.padding}}
          onPress={() => setSelectedCategory(item.id)}>
          {selectedCategory == item.id && (
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text style={{...FONTS.h2, color: COLORS.lightGray}}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1, paddingLeft: SIZES.padding}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    );
  };

  const renderCategoryData = () => {
    var books = [];
    let selectedBooks = categories.filter(
      (item) => item.id == selectedCategory,
    );
    if (selectedBooks.length > 0) {
      books = selectedBooks[0].books;
    }

    const renderItem = ({item}) => {
      return (
        <View style={{marginVertical: SIZES.base}}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
            onPress={() =>
              navigation.navigate('BookDetail', {
                book: item,
              })
            }>
            {/* BOOK COVER */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{height: 150, width: 100, borderRadius: 10}}
            />
            <View style={{flex: 1, marginLeft: SIZES.radius}}>
              {/* BOOK NAME AND AUTHOR */}
              <Text
                style={{
                  paddingRight: SIZES.padding,
                  ...FONTS.h2,
                  color: COLORS.white,
                }}>
                {item.bookName}
              </Text>
              <Text style={{...FONTS.body3, color: COLORS.lightGray}}>
                {item.author}
              </Text>

              {/* BOOK INFO */}
              <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{height: 20, width: 20, tintColor: COLORS.lightGray}}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.pageNo}
                </Text>
                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{height: 20, width: 20, tintColor: COLORS.lightGray}}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.readed}
                </Text>
              </View>

              {/* GENRE */}
              <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
                {item.genre.includes('Adventure') && (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGray}}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes('Romance') && (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes('Drama') && (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightBlue}}>
                      Drama
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
          {/* Bookmark button */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 5,
              right: 15,
            }}
            onPress={() => console.log('Bookmarked')}>
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{height: 25, width: 25, tintColor: COLORS.lightGray}}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{
          flex: 1,
          paddingTop: SIZES.radius,
        }}>
        <FlatList
          data={books}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER SECTION */}
      <View style={{height: 200}}>
        {renderHeader(profile)}
        {renderHeaderBottom()}
      </View>

      {/* BODY SECTION */}
      <ScrollView style={{marginTop: SIZES.radius}}>
        {/* BOOKS SECTION */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/* CATEGORY SECTION */}
        <View style={{marginTop: SIZES.padding}}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header__container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  header__userData: {
    flex: 1,
  },
  header__text1: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  header__text2: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  header__pointsContainer: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingLeft: 3,
    paddingRight: SIZES.radius,
    borderRadius: 20,
  },
  header__pointsContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__pointsRight: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 25,
  },
  header__pointsImage: {
    width: 20,
    height: 20,
  },
  header__profilePoints: {
    ...FONTS.body3,
    marginLeft: SIZES.base,
    color: COLORS.white,
  },

  header__bottomMainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.padding,
  },

  header__bottomContentHolder: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius,
    justifyContent: 'space-evenly',
  },

  header__bottomOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__bottomOptionText: {
    marginLeft: SIZES.base,
    ...FONTS.body4,
    color: COLORS.white,
  },
  books__headerContainer: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  books__headerText: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  books__paraText: {
    ...FONTS.body3,
    color: COLORS.lightGray,
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
  },
  books__container: {
    flex: 1,
    marginTop: SIZES.padding,
  },
});

export default Home;
