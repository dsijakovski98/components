import Accordion from './components/Accordion'
import ComponentWrapper from './components/ComponentWrapper'
import { AccordionType } from './types'

const accordionItems: AccordionType[] = [
  { title: 'Title 1', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consequatur doloremque atque at magni esse dolore! Quibusdam perferendis earum dolore eaque suscipit totam reprehenderit, dolorem tenetur voluptate recusandae impedit quis.' },
  { title: 'Title 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempore pariatur quae, rem quidem blanditiis, eius quasi totam aut nam vero, corporis dignissimos deserunt doloremque accusantium! Quaerat ut error velit nemo voluptates officiis.' },
  { title: 'Title 3', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio incidunt eaque eos porro debitis in facere non ipsum maxime. Ipsa nesciunt inventore, illo ducimus nihil ut possimus ad, ab libero eos sint nulla explicabo. Asperiores voluptatum iusto fuga laborum quo!' },
  { title: 'Title 4', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio incidunt eaque eos porro debitis in facere non ipsum maxime. Ipsa nesciunt inventore, illo ducimus nihil ut possimus ad, ab libero eos!' },
]


function App() {

  return (
    <div className="app">
      <h1 className='title' >Components Sandbox</h1>

      <div className="components-list">
        <ComponentWrapper title='Accordion' >
          <Accordion items={accordionItems} />
        </ComponentWrapper>
      </div>

    </div>
  )
}

export default App
