import React from 'react';
import styled from 'styled-components';

const DefaultNote = styled.div`
  margin: 0 0 0.75rem;
  background: #bd93f9;
  color: #fff;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;

  .fa {
    margin-right: 0.25rem;
    color: #fff;
  }
`

const WarningNote = styled(DefaultNote)`
  background: #ff79c6;
`

export default function Note ({
  children,
  type = 'default'
}) {
  const Component = type === 'warning'
    ? WarningNote
    : DefaultNote

  return (
    <div>
      <Component>
        {type === 'default' && (
          <i className='fa fa-info-circle' />
        )}
        {type === 'warning' && (
          <i className='fa fa-exclamation-triangle' />
        )}

        {children}
      </Component>
    </div>
  );
}
