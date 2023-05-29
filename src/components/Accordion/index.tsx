import { useState } from 'react'


import AccordionItem from './Item'
import { AccordionType } from '../../types'

interface Props {
    items: AccordionType[]
    openFirst?: boolean
}

export default function Accordion(props: Props) {
    const { items, openFirst = false } = props

    const [activeItem, setActiveItem] = useState(openFirst ? 0 : -1)

    const openItem = (activeItemIndex: number) => setActiveItem(activeItemIndex)
    const closeItem = () => setActiveItem(-1)

    return (
        <div className='accordion'>
            {items.map((accordion, index) => (
                <AccordionItem
                    key={index}
                    item={accordion}
                    open={activeItem === index}
                    onMouseEnter={() => openItem(index)}
                    onMouseLeave={closeItem}
                />
            ))}
        </div>
    )
}
