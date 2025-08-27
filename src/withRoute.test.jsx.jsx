import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { withRoute } from './withRoute'

const Box = React.forwardRef(function Box(props, ref) {
  return <div ref={ref} data-testid="box" {...props} />
})
const RoutableBox = withRoute(Box)

describe('withRoute (JSX)', () => {
  it('renders base component when no `to`', () => {
    render(<RoutableBox className="foo">Hello</RoutableBox>)
    expect(screen.getByTestId('box')).toBeInTheDocument()
    expect(screen.queryByRole('link')).toBeNull()
  })

  it('wraps in Link when `to` provided', () => {
    render(<MemoryRouter><RoutableBox to="/blog/abc">Hi</RoutableBox></MemoryRouter>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/blog/abc')
  })
})
