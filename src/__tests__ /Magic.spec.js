import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Magic from '../components/Magic';

describe('<Magic />', () => {
    let getByTestId;
  
    afterEach(cleanup);
  
    describe('clicking the submit button', () => {
      let sendHandler;

      beforeEach(() => {
        ({ getByTestId } = render(<Magic onSend={sendHandler}/>));
  
        fireEvent.change(
          getByTestId('messageText'),
          {
            target: {
              value: '',
            },
          },
        );
  
        fireEvent.click(getByTestId('submitButton'));
      });
  
      it('clears the text field', () => {
        expect(getByTestId('messageText').value).toEqual('');
      });
    });
});

