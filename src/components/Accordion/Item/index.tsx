import { MouseEventHandler } from "react"
import { AccordionType } from "../../../types"
import Arrow from "../../../icons/Arrow"
import './style.css'

interface Props {
    item: AccordionType
    open: boolean
    onMouseEnter: MouseEventHandler<HTMLDivElement>
    onMouseLeave: MouseEventHandler<HTMLDivElement>
}

export default function AccordionItem(props: Props) {
    const { item, open, ...eventHandlers } = props
    const { title, content } = item

    const itemClassName = `accordion-item ${open ? 'open' : ''}`

    return (
        <div className={itemClassName} {...eventHandlers}>
            <div className='header'>
                <h4 className='title'>{title}</h4>
                <span className='icon'>
                    <Arrow />
                </span>
            </div>

            <p className='content'>{content}</p>
        </div>
    )
}
