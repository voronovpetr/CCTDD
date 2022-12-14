import InputDetail from './InputDetail'
import '../../styles.scss'

describe('InputDetail', () => {
  it('should allow the input field to be modified', () => {
    const placeholder = 'Aslaug'
    const name = 'name'
    const value = 'some value'
    const newValue = '42'
    cy.mount(
      <InputDetail
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={cy.stub().as('onChange')}
      />,
    )

    cy.contains(name)
    cy.findByPlaceholderText(placeholder).clear().type(newValue)
    cy.get('input').should('have.value', newValue)
    cy.get('@onChange')
      .should('have.been.called')
      .its('callCount')
      .should('eq', newValue.length + 1)
  })

  it('should not allow the input field to be modified when readonly', () => {
    const placeholder = 'Aslaug'
    const name = 'name'
    const value = 'some value'
    cy.mount(
      <InputDetail
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={true}
      />,
    )

    cy.contains(name)
    cy.findByPlaceholderText(placeholder).should('have.attr', 'readOnly')
  })
})
