import React from 'react';
import { Link } from 'react-router-dom';

export function Tag(props) {
  const template = (
    <div
      style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: '5px 10px',
        display: 'inline-block',
        fontFamily: 'Righteous',
        ...props.add
      }}>
      {props.children}
    </div>
  );
  if (props.link) {
    return <Link to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
}

export const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export const reverseArray = array => {
  let revArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revArray.push(array[i]);
  }
  return revArray;
};

export const validate = element => {
  let error = [true, ''];
  if (element.validation.required) {
    const valid = element.value.trim() !== '';
    const message = !valid ? 'this field is required' : '';
    error = [valid, message];
  }
  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = !valid ? 'Must be a valid email' : '';
    error = [valid, message];
  }
  return error;
};
