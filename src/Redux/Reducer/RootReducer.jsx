import { combineReducers } from "@reduxjs/toolkit";
import SliderReducer from "./SliderReducer";

import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import CarReducer from "./CarReducer";
import FeatureReducer from "./FeatureReducer";
import SettingReducer from "./SettingReducer";
import ServiceReducer from "./ServiceReducer";
import FaqReducer from "./FaqReducer";

export default combineReducers({
    CategoryStateData:CategoryReducer,
    BrandStateData:BrandReducer,
    CarStateData:CarReducer,
    FeatureStateData:FeatureReducer,
    ServiceStateData:ServiceReducer,
    FaqStateData:FaqReducer,
    SettingStateData:SettingReducer,
    slider: SliderReducer
})