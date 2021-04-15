import React,{useState} from 'react';
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading"


import {Provider} from 'react-redux'
import {applyMiddleware, createStore, combineReducers} from 'redux'
import ReduxThunk from 'redux-thunk'

import AuthReducer from './store/reducer/auth'
import CategoryReducer from './store/reducer/category'
import ItemReducer from './store/reducer/item'
import Appnav from './appNav/Navigator'

const rootReducer = combineReducers({
  auth:AuthReducer,
  category:CategoryReducer,
  item:ItemReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const fontLoading = () =>{ 
  return Font.loadAsync({
    'black':require('./assets/fonts/AirbnbCereal-Black.ttf'),
    'bold':require('./assets/fonts/AirbnbCereal-Bold.ttf'),
    'book':require('./assets/fonts/AirbnbCereal-Book.ttf'),
    'extraBold':require('./assets/fonts/AirbnbCereal-ExtraBold.ttf'),
    'light':require('./assets/fonts/AirbnbCereal-Light.ttf'),
    'medium':require('./assets/fonts/AirbnbCereal-Medium.ttf'),
    'logo': require('./assets/fonts/Cocon-Regular-Font.otf')
})}

export default function App() {
  const[fontLoad, setFontLoad] = useState(false)

  if(!fontLoad)
      {
        return <AppLoading
        startAsync ={fontLoading}
        onFinish = {() => setFontLoad(true)}
        onError = {(test)=> console.log(test) }
        /> 
  }
  return<Provider store={store}><Appnav/></Provider>
}


