import React from 'react'
import house1 from '../assets/house1.avif'
import house2 from '../assets/house2.avif'
import house3 from '../assets/house3.avif'
import house4 from '../assets/house4.avif'
import Card from '../components/Card'

const NewListings = () => {
    const cards = [
        {photo: house1, price: '$236,910'},
        {photo: house4, price: '$1,346,410'},
        {photo: house3, price: '$1,800,000'},
        {photo: house2, price: '$757,750'},

]
  return (
    <div>
        <div className="mx-4 md:mx-10 lg:mx-12 mt-8 lg:mb-8">
        <p className='text-[24px] font-bold leading-8'>New Listings in Manhattan, NY</p>
        <a href='#' className='text-[14px] cursor-pointer text-[#3d86e4] hover:underline hover:text-[#24538f]'>View All 160 New Listings</a>
        </div>
        <div className="flex flex-nowrap space-x-6 pt-4 w-full overflow-x-scroll pb-4 mb-20">
            {cards.map((cards) => 
                <Card photo={cards.photo} price = {cards.price}/>
            )}
        </div>
    </div>
  )
}

export default NewListings