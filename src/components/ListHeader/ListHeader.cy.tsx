import ListHeader from './ListHeader'
import {BrowserRouter} from 'react-router-dom'
import '../../styles.scss'

describe('ListHeader', () => {
  it('should', () => {
    const title = 'Heroes'
    cy.mount(
      <BrowserRouter>
        <ListHeader
          handleAdd={cy.stub().as('handleAdd')}
          handleRefresh={cy.stub().as('handleRefresh')}
          title={title}
        />
      </BrowserRouter>,
    )

    cy.getByCy('add-button').click()
    cy.get('@handleAdd').should('be.called')

    cy.getByCy('refresh-button').click()
    cy.get('@handleRefresh').should('be.called')

    cy.getByCy('title').contains(title).click()
    cy.url().should('contain', title)
  })
})
