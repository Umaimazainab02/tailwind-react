import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = (props) => {
  const cardData = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Prime customers, that have access to bank credit and are satisfied with the current product",
    status: "Satisfied",
    color: "bg-blue-500",
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/2225031969/photo/portrait-smile-and-confident-business-woman-in-corporate-office-for-ambition-finance-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=6cx7OTGdgu_Uz8Qx27E-_IsqV1htETr4zg8Do2A4TI0=",
    text: "Prime customers, that have access to bank credit and are not satisfied with the current service",
    status: "Underserved",
    color: "bg-blue-500",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvcmtpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Customers from near-prime and sub-prime segments with no access to bank credit",
    status: "Underbanked",
    color: "bg-lime-400",
  },
];

  return (
    <div className="h-screen w-full">
      <Section1 />
    </div>
  )
}

export default App