import { useState } from "react";

export default function useSetting() {
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
  return settingData;
}
