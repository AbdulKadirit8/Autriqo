import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { getSetting, createSetting, updateSetting } from '../../../Redux/ActionCreator/SettingActionCreators'

import RichTextEditor from '../../../rte/RichTextEditor'
import { createStructuredContent, renderHTML } from '../../../rte/richTextEditorBridge'

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export default function AdminSettingPage() {
  let editorRefPrivacyPolicy = useRef(null)
  let editorRefDataPolicy = useRef(null)

  let [privacyPolicy, setPrivacyPolicy] = useState("")
  let [dataPolicy, setDataPolicy] = useState("")

  let [data, setData] = useState({
    siteName: "",
    map1: "",
    map2: "",
    address: "",
    email: "",
    phone: "",
    whatsapp: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    privacyPolicy: "",
    dataPolicy: ""
  })
  let SettingStateData = useSelector(state => state.SettingStateData)
  let dispatch = useDispatch()

  function changePrivacyPolicy(documentModel, nextHtml) {
    setPrivacyPolicy(nextHtml !== undefined ? nextHtml : renderHTML(documentModel))
  }

  function changeDataPolicy(documentModel, nextHtml) {
    setDataPolicy(nextHtml !== undefined ? nextHtml : renderHTML(documentModel))
  }

  function handelChangePrivacyPolicy(nextHtml, editor) {
    changePrivacyPolicy(editor.getJSON(), nextHtml);
  }

  function handelChangeDataPolicy(nextHtml, editor) {
    changeDataPolicy(editor.getJSON(), nextHtml);
  }

  function getInputData(e) {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  function postData(e) {
    e.preventDefault()
    let item = { ...data, privacyPolicy: privacyPolicy, dataPolicy: dataPolicy }
    console.log(item)
    if (SettingStateData.length)
      dispatch(updateSetting(item))
    else
      dispatch(createSetting(item))
    toast("Your Record has Been Updated!")
  }

  useEffect(() => {
    (() => {
      dispatch(getSetting())
      if (SettingStateData.length) {
        setData({ ...data, ...SettingStateData[0] })
        setTimeout(() => {
          const documentModel1 = createStructuredContent(SettingStateData[0].privacyPolicy ?? "")
          const documentModel2 = createStructuredContent(SettingStateData[0].dataPolicy ?? "")
          changePrivacyPolicy(documentModel1, SettingStateData[0].privacyPolicy ?? "")
          changeDataPolicy(documentModel2, SettingStateData[0].dataPolicy ?? "")
        })
      }
    })()
    // return () => clearTimeout(time)
  }, [SettingStateData.length])

  return (
    <div className='container my-3'>
      <div className="row">

        <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar />
        </div>

        <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <form onSubmit={postData}>
            <div className="container-fluid">
              {/* Header */}
              <h4 className="bg-primary text-light text-center p-2 rounded">
                Setting
              </h4>

              {/* ===== Basic Info ===== */}
              <div className="card shadow-sm p-3 mb-3 rounded-4">
                <h6 className="fw-bold mb-3 text-dark">
                  Basic Information
                </h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="ps-2">Site Name</label>
                    <div className="input-group mb-2 border border-primary rounded">
                      <span className="input-group-text">
                        <i className="bi bi-globe2 text-success"></i>
                      </span>

                      <input
                        type="text"
                        name="siteName"
                        value={data.siteName}
                        onChange={getInputData}
                        className="form-control"
                        placeholder="Site Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="ps-2">Email</label>
                    <div className="input-group mb-2 border border-primary rounded">
                      <span className="input-group-text">
                        <i className="bi bi-envelope text-primary"></i>
                      </span>

                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={getInputData}
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="ps-2">WhatsApp</label>
                    <div className="input-group mb-2 border border-primary rounded">
                      <span className="input-group-text">
                        <i className="bi bi-whatsapp text-success"></i>
                      </span>
                      <input
                        type="text"
                        name="whatsapp"
                        value={data.whatsapp}
                        onChange={getInputData}
                        className="form-control"
                        placeholder="WhatsApp Number"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="ps-2">Phone</label>
                    <div className="input-group mb-2 border border-primary rounded">
                      <span className="input-group-text">
                        <i className="bi bi-telephone text-primary"></i>
                      </span>

                      <input
                        type="text"
                        name="phone"
                        value={data.phone}
                        onChange={getInputData}
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* ===== Location + Map ===== */}
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card shadow-sm p-3 rounded-4 h-100">
                    <h6 className="fw-bold mb-2">Location</h6>

                    <label className="ps-2">Address</label>
                    <div className="input-group mb-2 border border-primary rounded border">
                      <span className="input-group-text">
                        <i className="bi bi-globe-central-south-asia fs-3 text-primary"></i>
                      </span>
                      <textarea
                        name="address"
                        rows={4}
                        value={data.address}
                        onChange={getInputData}
                        className="form-control"
                        placeholder="Address"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card shadow-sm p-3 rounded-4 h-100">
                    <h6 className="fw-bold mb-2">Map Details</h6>
                    <label className="ps-2">Map1</label>
                    <div className="input-group mb-2 border border-primary rounded">
                      <span className="input-group-text">
                        <i className="bi bi-map text-primary"></i>
                      </span>

                      <input
                        type="url"
                        name="map1"
                        value={data.map1}
                        onChange={getInputData}
                        className="form-control"
                        placeholder="Map1"
                      />
                    </div>
                    <label className="ps-2">Map2</label>
                    <div className="input-group mb-2 border border-primary rounded">
                      <span className="input-group-text">
                        <i className="bi bi-map text-primary"></i>
                      </span>

                      <input
                        type="url"
                        name="map2"
                        value={data.map2}
                        onChange={getInputData}
                        className="form-control"
                        placeholder="Map2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card shadow-sm p-3 mt-3 mb-3 rounded-4">
                <h6 className="fw-bold mb-3">Social Media Profiles</h6>

                {/* Facebook */}
                <div className="input-group mb-2 border border-primary rounded">
                  <span className="input-group-text">
                    <i className="bi bi-facebook text-primary"> Facebook</i>
                  </span>
                  <input
                    type="url"
                    name="facebook"
                    value={data.facebook}
                    onChange={getInputData}
                    className="form-control"
                    placeholder="Facebook page URL"
                  />
                </div>

                {/* YouTube */}
                <div className="input-group mb-2 border border-primary rounded">
                  <span className="input-group-text">
                    <i className="bi bi-youtube text-danger"> YouTube</i>
                  </span>
                  <input
                    type="url"
                    name="youtube"
                    value={data.youtube}
                    onChange={getInputData}
                    className="form-control"
                    placeholder="YouTube page URL"
                  />
                </div>

                {/* Instagram */}
                <div className="input-group mb-2 border border-primary rounded">
                  <span className="input-group-text">
                    <i className="bi bi-instagram text-warning"> Instagram</i>
                  </span>
                  <input
                    type="url"
                    name="instagram"
                    value={data.instagram}
                    onChange={getInputData}
                    className="form-control"
                    placeholder="Instagram profile page URL"
                  />
                </div>

                {/* Twitter */}
                <div className="input-group mb-2 border border-primary rounded">
                  <span className="input-group-text">
                    <i className="bi bi-twitter text-info"> Twitter</i>
                  </span>
                  <input
                    type="url"
                    name="twitter"
                    value={data.twitter}
                    onChange={getInputData}
                    className="form-control"
                    placeholder="Twitter profile page URL"
                  />
                </div>

                {/* LinkedIn */}
                <div className="input-group mb-3 border border-primary rounded">
                  <span className="input-group-text">
                    <i className="bi bi-linkedin text-primary"> Linkedin</i>
                  </span>
                  <input
                    type="url"
                    name="linkedin"
                    value={data.linkedin}
                    // value={privacyPolicy}
                    onChange={getInputData}
                    className="form-control"
                    placeholder="Linkedin profile page URL"
                  />
                </div>
              </div>

              <div className="col-12 mb-3">
                <lable>Privacy Policy</lable>
                <RichTextEditor
                  ref={editorRefPrivacyPolicy}
                  onChange={handelChangePrivacyPolicy}
                  className="bordeer border-primary"
                  value={privacyPolicy}
                />
              </div>

              <div className="col-12 mb-3">
                <lable>Data Policy</lable>
                <RichTextEditor
                  ref={editorRefDataPolicy}
                  onChange={handelChangeDataPolicy}
                  className="bordeer border-primary"
                  value={dataPolicy}
                />
              </div>

              <button type="submit" className="btn btn-primary fs-5 text-light text-center p-2 rounded w-100">Submit</button>

            </div>
          </form>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </div>
      </div>
    </div>
  )
}