import CardContent from './CardContent'
import '../../styles.scss'

describe('CardContent', () => {
  it('should render the card content', () => {
    const name = 'Bjorn Ironside'
    const description = 'king of 9th century Sweden'
    cy.mount(<CardContent name={name} description={description} />)

    cy.contains(name)
    cy.contains(description)
  })
})
