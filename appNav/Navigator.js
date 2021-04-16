import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import {  createSwitchNavigator, createAppContainer } from 'react-navigation'
import SignupScreen from '../source/screen/SignupScreen';
import ProfileSetup from '../source/screen/ProfileSetupScreen';
import MainScreen from '../source/screen/MainScreen';
import CategoryForm from '../source/screen/CategoryForm';
import {useSelector} from 'react-native'
import StartUpScreen from '../source/screen/StartupScreen';
import LoginScreen from '../source/screen/LoginScreen';
import ItemForm from '../source/screen/ItemForm';
import ContactForm from '../source/screen/ContactForm';
import ListPage from '../source/screen/ListPage';
import ProductScreen from '../source/screen/ProductScreen';



const LoginStack = createStackNavigator({
    
    Login:LoginScreen
    
})

const SignupStack = createStackNavigator({
    
    Signup:SignupScreen
    
})

const MainStack = createStackNavigator({
    
    Main : {screen:MainScreen},
    CategoryForm:{screen: CategoryForm, navigationOptions:{
            headerTitle:'New Category'
    }},
    ItemForm:{screen: ItemForm, navigationOptions:{
        headerTitle:'New Item'
    }},    
    ContactForm:ContactForm,
    List:ListPage,
    Product:ProductScreen
})

const Appnav = createSwitchNavigator({
    Start:StartUpScreen,
    Login:LoginStack,
    Signup : SignupStack,
    Setup:ProfileSetup,
    Main: MainStack
    
     
})



export default createAppContainer(Appnav)