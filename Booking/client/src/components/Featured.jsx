import React from 'react'
import "./Featured.css"
import useFetch  from './hooks/useFetch'

const Featured = () => {

  const {data, loading, error} = useFetch("hotels/countByCity?cities=AbuRoad,MountAbu,Ambaji");
  console.log(data);

  return (
    <div className="featured">
      {loading ? "Loading pls wait" : <>
      <div className="featuredItem">
        <img
          src="https://www.holidify.com/images/cmsuploads/compressed/MadhubanBKWSUOmShantiBawan_20180410124157.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Aburoad</h1>
          <h2>{data[0]}</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.nPpQykhnRHqwJcM6zTSucAHaE-?pid=ImgDet&rs=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>MountAbu</h1>
          <h2>{data[1]}</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/R.899bc933d595d1ca66f4c2469f4d4534?rik=WOG8hN0ywrapqg&riu=http%3a%2f%2fwww.onefivenine.com%2fimages%2fTravel%2f1724.jpg&ehk=P%2f4zGXeUTH0Zs6qQwzFc2dqNEHZuSPIV3egKf519Sr8%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ambaji</h1>
          <h2>{data[2]}</h2>
        </div>
      </div>
    </>}
    </div>


      
  )
}

export default Featured