import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {

    test('renders Hello World as a text', () => {
        //Triple A Test
        //1) Arrange
        render(<Greeting/>);
    
        //2) Act
        //Nothing
    
        //3) Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting/>);
        const pElement = screen.getByText('good to see you', {exact: false});
        expect(pElement).toBeInTheDocument();
    });

    test('renders Changed! if the button was clicked', () => {
        //1) Arrange
        render(<Greeting/>);

        //2) Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //3) Assert
        const pElement = screen.getByText('Changed!');
        expect(pElement).toBeInTheDocument();
    });

    test('Check if "good to see you" paragraph disappear after the button was clicked', () => {
        //1) Arrange
        render(<Greeting/>);

        //2) Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //3) Assert
        const pElement = screen.queryByText('good to see you', { exact: false});
        expect(pElement).toBeNull();
    });

});

