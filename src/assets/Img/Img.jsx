import React from 'react';
import LoopStudios from './loopstudios.jpg';
import AdalovClothes from './AdaLov.png';
import WeatherNetwork from './weathernetwork.png';
import CalculatorApp from './calculator.png';
import HenrysKitchen from './henryskitchen.png';
import ParkingApp from './ParkingApp.png';

export function AdalovImg(){
    return(
        <img className="detail-img" src={AdalovClothes} alt="" />
    )
}

export function LoopStudiosImg(){
    return(
        <img className="detail-img" src={LoopStudios} />
    )
}

export function WeatherNetworkImg(){
    return(
        <img className="detail-img" src={WeatherNetwork} />
    )
}

export function CalculatorImg(){
    return(
        <img className="detail-img" src={CalculatorApp} />
    )
}

export function HenrysKitchenImg(){
    return(
        <img className="detail-img" src={HenrysKitchen} />
    )
}

export function ParkingAppImg(){
    return(
        <img className="detail-img" src={ParkingApp} style={{filter: 'brightness(.75)'}} />
    )
}