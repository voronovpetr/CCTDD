import {BrowserRouter} from 'react-router-dom'
import HeaderBar from './HeaderBar'

describe('HeaderBar', () => {
  it('should', () => {
    cy.mount(
      <BrowserRouter>
        <HeaderBar />
      </BrowserRouter>,
    )
    cy.getByCy('header-bar-brand')
    cy.findByRole('navigation')
  })
})
