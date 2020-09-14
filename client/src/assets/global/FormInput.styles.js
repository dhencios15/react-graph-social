import styled from 'styled-components';
import tw from 'twin.macro';

export const Input = styled.input.attrs({
  className:
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
})`
  ${({ hasError }) => hasError && tw`border border-red-500`}
`;

export const Form = styled.form.attrs({
  className: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',
})``;

export const Label = styled.label.attrs({
  className: 'block text-gray-700 text-sm font-bold mb-2',
})``;

export const Button = styled.button.attrs({
  className:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
})``;

export const FormWrapper = styled.div.attrs({
  className: 'w-full max-w-xs mt-20',
})``;
