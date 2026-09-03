import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const cardData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    text: "Prime customers, that have access to bank credit and are satisfied with the current product",
    status: "Satisfied",
    color: "bg-blue-500",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    text: "Prime customers, that have access to bank credit and are not satisfied with the current service",
    status: "Underserved",
    color: "bg-blue-500",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
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