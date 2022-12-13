import {BrowserRouter} from 'react-router-dom'
import HeaderBarBrand from './HeaderBarBrand'
import '../../styles.scss'

describe('HeaderBarBrand', () => {
  it('should', () => {
    cy.mount(
      <BrowserRouter>
        <HeaderBarBrand />
      </BrowserRouter>,
    )
    cy.get('a')
      .should('have.attr', 'href', 'https://reactjs.org/')
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer')
    cy.getByCy('header-bar-brand').within(() => cy.get('svg'))

    cy.getByCy('navLink').within(() =>
      ['TOUR', 'OF', 'HEROES'].forEach((part: string) =>
        cy.contains('span', part),
      ),
    )
    cy.getByCy('navLink').click()
    cy.url().should('match', /http:\/\/localhost:\d*\/$/)
  })
})
