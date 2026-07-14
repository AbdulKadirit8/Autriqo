import { all } from "redux-saga/effects"

import FaqSaga from "./FaqSagas"
import CarSaga from "./CarSagas"
import BrandSaga from "./BrandSagas"
import ServiceSaga from "./ServiceSagas"
import FeatureSaga from "./FeatureSagas"
import SettingSaga from "./SettingSagas"
import CategorySaga from "./CategorySagas"

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