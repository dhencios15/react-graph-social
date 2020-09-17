import styled from 'styled-components';
import tw from 'twin.macro';

export const CardWrapper = styled.div.attrs({
  className: 'max-w-lg w-64 rounded overflow-hidden shadow-lg bg-gray-400',
})``;

export const CardHeader = styled.div.attrs({
  className: 'flex justify-between px-6 pt-4 pb-2',
})``;

export const CardBody = styled.div.attrs({
  className: 'px-6 pb-2 border-b border-gray-500',
})``;

export const CardFooter = styled.div.attrs({
  className: 'px-2 pt-2',
})``;

export const CardButton = styled.div.attrs({
  className:
    'inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 cursor-pointer',
})`
  ${({ user }) => user && tw`bg-blue-300`}
`;
