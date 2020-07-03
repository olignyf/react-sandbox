import React, { useState, useEffect } from 'react';
import { from, Observable } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from 'apisauce';
import { FormChangeHandler } from 'ts-helper';
import { controller } from 'api/requests';
import { Person } from 'models/person';

interface Props {
  data: Person;
  onSave: (person:Person) => void;
}

export const RenderTest: React.FunctionComponent<Props> = ({data, ...rest }) => {
  const [state, setState] = useState(data);
console.log('render');
  const onFormChange: FormChangeHandler = (formEvent) => {   
    formEvent.stopPropagation();
    const { name } = formEvent.target;
    let value:any;

    if (formEvent.target.type === 'checkbox') {
      value = formEvent.target.checked; 
    } else {
      value = formEvent.target.value;
    }

    // console.log("receiving change", name, value);
    setState({
      ...state,
      [name]: value,
    });
  };

  const onFormSubmit = (event: any, action?: string) => {
    event.preventDefault();
    console.log('onFormSubmit sending data', state);

    const request = controller.put('/api/v1/employees', state);

    request.subscribe(
      (res:any) => {
        //console.log('HTTP response', res, decoder);
        setState({
          // This will cause the view to update with new values
          ...state,
          ...res.data, // FIXME(flemieux) map DecoderInfo to DecoderViewModel,
        });
      },
      (_err) => ({}), // error
      () => ({}), // HTTP request completed
    );
  };

  const options: { value: string | number; label: string }[] = [];

  return (
      <div
        {...rest}
      >
        <h3>
          state.name: {state.name}<br/>
          data.name: {data.name}
        </h3>

        <form onSubmit={onFormSubmit}>
          Name: <input type='text' name='name' value={state.name}/>
          <button type="submit">Save</button>
        </form>
      </div>
  );
};
console.log('test');