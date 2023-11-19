import React from 'react'
import CardItem from './CardItem'

const CardList = () => {
    return (
        <div className='m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}

export default CardList

