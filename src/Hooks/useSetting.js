import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../Redux/ActionCreator/SettingActionCreators";

export default function useSetting() {
  let SettingStateData=useSelector(state=>state.SettingStateData)
  let dispatch =useDispatch()
  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITENAME,
    logoIcon: import.meta.env.VITE_APP_LOGOICON,
    phone: import.meta.env.VITE_APP_PHONE,
    whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    email: import.meta.env.VITE_APP_EMAIL,
    address: import.meta.env.VITE_APP_ADDRESS,
    map1: import.meta.env.VITE_APP_MAP1,

    facebook: import.meta.env.VITE_APP_FACEBOOK,
    instagram: import.meta.env.VITE_APP_INSTAGRAM,
    twitter: import.meta.env.VITE_APP_TWITTER,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    youtube: import.meta.env.VITE_APP_YOUTUBE,
  });
  useEffect(() => {
    (() => {
      dispatch(getSetting())

      if (SettingStateData.length) {
        let data = []
        Object.keys(settingData).forEach((x => {
          data.push([
            x,
            SettingStateData[0][x]
              ? SettingStateData[0][x]
              : settingData[x]
          ])
        }))
        setSettingData(Object.fromEntries(data))
      }
    })()
  }, [SettingStateData.length])
  return settingData;
}

