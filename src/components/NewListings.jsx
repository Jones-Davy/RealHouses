import React from 'react'
import house1 from '../assets/house1.jpg'
import houses from '../assets/houses.png'
import Card from '../components/Card'

const NewListings = () => {
    const cards = [
        {photo: house1, price: '$236,910'},
        {photo: house1, price: '$346,410'},
        {photo: house1, price: '$800,000'},
        {photo: house1, price: '$157,750'},
]
  return (
    <div>
        <div className="mx-10 mt-8">
        <p className='text-[24px] font-bold leading-8'>New Listings in Manhattan, NY</p>
        <a href='#' className='text-[14px] cursor-pointer text-[#3d86e4] hover:underline hover:text-[#24538f]'>View All 160 New Listings</a>
        </div>
        <div className="">
            {cards.map((cards) => 
                <Card/>
            )}
        </div>
    </div>
  )
}

export default NewListings