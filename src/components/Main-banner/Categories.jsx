import React from "react";
import './Home.css';

const Categories = () => {
  const data = [
    {
     
      cateName: "Clothes",
    },
    {
    
      cateName: "Electronic",
    },
    {
     
      cateName: "Home",
    },
    {
     
      cateName: "Computer",
    },
    {
     
      cateName: "Tools",
    },
    {
     
      cateName: "Sports",
    },
    {
     
      cateName: "Machinery",
    },
    {
    
      cateName: "Others",
    },
    {
     
      cateName: "Automobiles",
    }

  ]

  return (
    <>
      <div className='category mt-3'>
        {data.map((value, index) => {
          return (
            <div className='f_flex' key={index}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
