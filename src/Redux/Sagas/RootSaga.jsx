import { all } from "redux-saga/effects"
import CategorySaga from "./CategorySagas"
import BrandSaga from "./BrandSagas"
import CarSaga from "./CarSagas"
import ServiceSaga from "./ServiceSagas"
import FeatureSaga from "./FeatureSagas"
import FaqSaga from "./FaqSagas"
import SettingSaga from "./SettingSagas"


export default function* RootSaga(){
    yield all([
        CategorySaga(),
        BrandSaga(),
        CarSaga(),
        FeatureSaga(),
        ServiceSaga(),
        FaqSaga(),
        SettingSaga(),
    ])
}