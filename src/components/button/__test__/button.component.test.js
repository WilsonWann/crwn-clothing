import { render, screen } from '@testing-library/react'
import Button, { BUTTON_TYPE_CLASSES } from '../button.component'

describe('button tests', () => {
  test('should render base button when nothing is passed', () => {
    render(<Button />);
    const baseButton = screen.getByRole('button');
    expect(baseButton).toHaveStyle(`background-color: black`);
  });
  test('should render google button when BUTTON_TYPE_CLASSES.google is passed', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);
    const googleButton = screen.getByRole('button');
    expect(googleButton).toHaveStyle(`background-color: #4285f4`);
  });
  test('should render google button when BUTTON_TYPE_CLASSES.inverted is passed', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);
    const invertedButton = screen.getByRole('button');
    console.log('🚀 ~ test ~ invertedButton:', invertedButton)
    expect(invertedButton).toHaveStyle(`background-color: white`);
  });

  test('renders ButtonSpinner when isLoading is true', () => {
    render(<Button isLoading={true}>Loading</Button>);
    const spinner = screen.getByRole('button').querySelector('div');
    expect(spinner).toBeInTheDocument();
  });

  test('renders children when isLoading is false', () => {
    render(<Button isLoading={false}>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });


})