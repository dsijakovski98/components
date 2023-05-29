import { ReactNode } from 'react'
import './style.css'

interface Props {
  children: ReactNode,
  title: string
}

const ComponentWrapper = (props: Props) => {
  const { children, title } = props

  return (
    <div className='component-wrapper'>
      <h2 className='component-title'>{title}</h2>
      {children}
    </div>
  )
}

export default ComponentWrapper
