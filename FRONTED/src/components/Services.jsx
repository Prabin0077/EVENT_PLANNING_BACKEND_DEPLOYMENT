import React from 'react'

const Services = () => {
  const  services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Celebration",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Trips",
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "Gamenight Planning",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planner",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
    {
      id: 7,
      url: "/seminar halls.jpg",
      title: "Comfy Seminar Halls",
    },
  ];
  return <>
  
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {
           services.map(element=>{
            return(
              <div className="item" key = {element.id}>
                    <h3>{element.title}</h3>
                    <img src= {element.url} alt = {element.title}/>
              </div>
            )
           })
        }
      </div>
    </div>
  
  
  
  </>
}

export default Services
