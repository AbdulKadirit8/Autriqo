import { useDispatch, useSelector } from "react-redux";
import Breadcrum from "../Component/Breadcrum";

import { getSetting } from "../Redux/ActionCreator/SettingActionCreators";
import { useEffect} from "react";
import useSetting from "../Hooks/useSetting";

export default function DataPolicyPage() {
  const settingData=useSetting()
  let SettingStateData = useSelector(state => state.SettingStateData)
  let dispatch = useDispatch()
  useEffect(() => {
    (() => {
      dispatch(getSetting())
    })()
    
  }, [SettingStateData.length])
  return (
    <>
    {console.log(settingData.dataPolicy)}
      <Breadcrum title={"Data Policy"} />
      <div className="container-fluid my-3">
        <div dangerouslySetInnerHTML={{ __html: settingData.dataPolicy }} />
      </div>
    </>
  )
}
