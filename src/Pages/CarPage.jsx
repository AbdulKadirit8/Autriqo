import { useDispatch, useSelector } from "react-redux";
import Breadcrum from "../Component/Breadcrum";
import { useEffect, useState } from "react";
import { getCar } from "../Redux/ActionCreator/CarActionCreators";
import { getCategory } from "../Redux/ActionCreator/CategoryActionCreators";
import { getBrand } from "../Redux/ActionCreator/BrandActionCreators";
import CarCard from "../Component/CarCard";

export default function CarPage() {
  let [user, setUser] = useState({})
  let dispatch = useDispatch()
  let [data, setData] = useState([])
  let [selected, setSelected] = useState({
    category: [],
    brand: [],
    address: {}
  })

  let [sortFilter, setSortFilter] = useState(0)
  let [search, setSearch] = useState("")

  let CarStateData = useSelector(state => state.CarStateData)
  let CategoryStateData = useSelector(state => state.CategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)

  function getCheckboxInputData(key, value) {
    let arr = selected[key]
    if (arr.includes(value))
      arr = arr.filter(x => x !== value)
    else
      arr.push(value)

    setSelected({ ...selected, [key]: arr })
    applyFilter({ ...selected, [key]: arr })
  }


  function applyFilter(selected) {
    let data = CarStateData.filter(x => x.status && (
      (selected.category?.length === 0 || selected.category.includes(x.category)) &&
      (selected.brand?.length === 0 || selected.brand.includes(x.brand))
    ))
    applySortFilter(data, sortFilter, selected)
  }

  function applySearchFilter() {
    let data = CarStateData.filter(x => x.status && (
      x.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.category.includes(search) ||
      x.brand.includes(search)
    ))
    applySortFilter(data, sortFilter, setSelected)
  }

  function applySortFilter(data, sortFilter) {
    if (sortFilter === "1")
      data = data.sort((x, y) => y.id.localeCompare(x.id))
    else if (sortFilter === "2")
      data = data.sort((x, y) => x.finalRentAmount - y.finalRentAmount)
    else if (sortFilter === "3")
      data = data.sort((x, y) => y.finalRentAmount - x.finalRentAmount)
    else
      data = data.sort((x, y) => y.discount - x.discount)

    // setData(data)
    setSortFilter(sortFilter)
    applyFinalFilter(data, selected.address)
  }
  function applyFinalFilter(data, address) {
    if (address.lat)
      setData(data.filter((car) => getDistance(address?.lat, address?.lon, car.address?.lat, car.address?.lon) <= 10))
    else
      setData(data)
  }

  function selectAddress(e) {
    if (e.target.value !== "-1") {
      let address = user.address[e.target.value]
      setSelected({ ...selected, address: address })
      applyFilter({ ...selected, address: address })
    }
  }

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in KM

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  useEffect(() => {
    (() => {
      dispatch(getCar())
      if (CarStateData.length) {
        setData(CarStateData.filter(x => x.status))
      }
    })()
  }, [CarStateData.length])

  useEffect(() => {
    dispatch(getCategory())
  }, [CategoryStateData.length])

  useEffect(() => {
    dispatch(getBrand())
  }, [BrandStateData.length])

  useEffect(() => {
    (async () => {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      })
      response = await response.json()
      setUser({ ...response })
      // if (response.address && response.address.length)
      //   setSelected({ ...selected, address: response.address[0] })
    })()
  }, [])
  return (
    <>
      <Breadcrum title={"Cars"} />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Select Address</li>
              <select className='form-select my-3' defaultValue={"-1"} onChange={selectAddress}>
                <option disabled value="-1">Please Select an Address</option>
                {user?.address?.map((item, index) => {
                  return <option key={index}>{item.address}</option>
                })}
              </select>
            </ul>
            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Category</li>
              {CategoryStateData.filter(x => x.status).map(item => {
                return <li key={item.id} className="list-group-item"
                  onClick={() => getCheckboxInputData('category', item.name)}>
                  <span>{item.name}</span>
                  {selected.category?.includes(item.name) ? <i className='bi bi-check float-end'></i> : null}
                </li>
              })}
            </ul>
            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Brand</li>
              {BrandStateData.filter(x => x.status).map(item => {
                return <li key={item.id} className="list-group-item"
                  onClick={() => getCheckboxInputData('brand', item.name)}>
                  <span>{item.name}</span>
                  {selected.brand?.includes(item.name) ? <i className='bi bi-check float-end'></i> : null}
                </li>
              })}
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row">

              <div className="col-md-9">
                <form onSubmit={(e) => {
                  e.preventDefault()
                  applySearchFilter()
                }}>
                  <div className="btn-group w-100">
                    <input type="search" name="search" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search Car By Name,Category or Brand' className='form-control rounded-0 rounded-start border-primary' />
                    <button className='btn btn-primary' type='submit'>Search</button>
                  </div>
                </form>
              </div>
              <div className="col-md-3">
                <select onChange={(e) => applySortFilter(data, e.target.value)} className='form-select border-primary'>
                  <option value="1">Latest</option>
                  <option value="2">Rent : Low to High</option>
                  <option value="3">Rent : High to Low</option>
                  <option value="4">More Discount</option>
                </select>
              </div>
            </div>
            <div className="row">
              {data.map(item => {
                return <div key={item.id} className='col-lg-4 col-md-6'>
                  <CarCard item={item} />
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
