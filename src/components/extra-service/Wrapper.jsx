import React from "react"
import "./extra.css"

const Wrapper = () => {
  const data = [
    {
      cover: "./images/undefined60.png",
      title: "Source from industry hubs",
    },
    {
      cover: "./images/undefined66.png",
      title: "Customize your products",
    },
    {
      cover: "./images/undefined62.png",
      title: "Fast, reliable shipping by ocean or air ",
    },
    {
      cover: "./images/undefined64.png",
      title: "Product monitoring and inspection ",
    },
  ]
  return (
    <>
      <section className='container'>
      <h2 className="mb-3">Our Extra Services</h2>
        <div className='wrapper'> 
          {data.map((val, index) => {
            return (
              <div className='product10' key={index}>
                <div className='img'>
                 <img src={val.cover} alt="" />
                </div>
                <h4>{val.title}</h4>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
