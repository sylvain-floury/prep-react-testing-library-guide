import React from 'react';
import {cleanup, render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import TestElements from './TestElements'

afterEach(cleanup);

it('should equal to 0', () => {
    const {getByTestId} = render(<TestElements/>);
    expect(getByTestId('counter')).toHaveTextContent(0) // <1>
});
// <1> require `import "@testing-library/jest-dom/extend-expect";`

it('should be enabled', () => {
    const {getByTestId} = render(<TestElements/>);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
});

it('should be disabled', () => {
    const {getByTestId} = render(<TestElements/>);
    expect(getByTestId('button-down')).toBeDisabled()
});
