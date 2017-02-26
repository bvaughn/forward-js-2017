import React from 'react';
import styled from 'styled-components';

const DefaultNote = styled.div`
  margin: 0.25rem 0 0.75rem;
  background: #4A90E2;
  color: #fff;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;

  .fa {
    margin-right: 0.25rem;
    color: #fff;
  }

  a {
    color: inherit;
  }
`

const WarningNote = styled(DefaultNote)`
  background: #f2905c;
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
