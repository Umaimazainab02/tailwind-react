import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const cardData = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Prime customers, that have access to bank credit and are satisfied with the current product",
    status: "Satisfied",
    color: " #8b5cf6",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1545184180-25d471fe75eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3Dimages.unsplash.com/photo-1531493731235-b5c309dca387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
    text: "Prime customers, that have access to bank credit and are not satisfied with the current service",
    status: "Underserved",
    color: "#14b8a6",
  },
  {
    id: 3,
    image: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Customers from near-prime and sub-prime segments with no access to bank credit",
    status: "Underbanked",
    color: "skyblue",
  },
  {
    id: 4,
    image: "https://plus.unsplash.com/premium_photo-1684249780837-62b98a932b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBtZW58ZW58MHx8MHx8fDA%3D",
    text: "Customers from near-prime and sub-prime segments with no access to bank credit",
    status: "Underrated",
    color: "pink",
  },
  {
    id: 5,
    image: "https://plus.unsplash.com/premium_photo-1664372145586-37c3f7de6983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwcmVhZGJvb2t8ZW58MHx8MHx8fDA%3D",
    text: "Segments with no access to bank credit Customers from near-prime and sub-prime ",
    status: "Satisfied",
    color: "purple",
  },
];

  return (
    <div className="h-screen w-full">
      <Section1 cardData={cardData} />
    </div>
  )
}

export default App