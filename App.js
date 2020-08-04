/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import CalendarStrip from 'react-native-calendar-strip';

const App = () => {
  const [dateName, setDateName] = React.useState('');
  // console.log('I18nManager', I18nManager.isRTL);
  const onDateSelected = (date) => {
    setDateName(date.format('D MMMM YYYY'));
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <View>
            <CalendarStrip
              scrollable
              useNativeDriver
              onDateSelected={onDateSelected}
              selectedDate={new Date()}
              style={{
                height: 200,
                paddingTop: 50,
                paddingBottom: 10,
              }}
              calendarColor={'#3343CE'}
              calendarHeaderStyle={{
                color: '#fff',
                fontSize: 22,
              }}
              dateNumberStyle={{fontSize: 17, color: '#fff'}}
              dateNameStyle={{fontSize: 13, color: '#fff'}}
              iconContainer={{flex: 0.1}}
              innerStyle={{
                flexGrow: 1,
                marginTop: 20,
              }}
              updateWeek={true}
              highlightDateNameStyle={{color: '#000'}}
              highlightDateNumberStyle={{color: '#000'}}
              daySelectionAnimation={{
                type: 'background',
                highlightColor: '#fff',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text> DateSelected: {dateName}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
