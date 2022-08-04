import React from 'react'

// import {rest} from 'msw'

// import {setupServer} from 'msw/node'

import {render, fireEvent, waitFor, screen} from '@testing-library/react'

import '@testing-library/jest-dom'

import {Loginform} from './Component/Login'



const mockedUsedNavigate = jest.fn();



jest.mock("react-router-dom", () => ({

  ...jest.requireActual("react-router-dom"),

  useNavigate: () => mockedUsedNavigate,

}));

// 1 login

test("renders Login page", () => {

  render(<Loginform/>);

    screen.debug();

  const email = screen.getByPlaceholderText("Email");

  expect(email).toBeInTheDocument(); // jest

});

// 2 email

test("should accept email value", () => {

  render(<Loginform />);

  const element = screen.getByPlaceholderText("Email");

  fireEvent.change(element, { target: { value: "test@gmail.com" } });

  expect(element.value).toBe("test@gmail.com");

});

// 3 password

test("should accept password value", () => {

  render(<Loginform />);

  const element = screen.getByPlaceholderText("Password");

  fireEvent.change(element, { target: { value: "Chandan@2022" } });

  expect(element.value).toBe("Chandan@2022");

})

// 4 navigate

test("Checking for navigate.", () => {

  render(<Loginform />);

  var email = screen.getByPlaceholderText("Email");

  fireEvent.change(email,{target: {value: "chandan@gmail.com"}});

  var password = screen.getByPlaceholderText("Password");

  fireEvent.change(password, {target: {value:"Chandan@2022!"}});



  var button = screen.getByRole("button");

  fireEvent.click(button);

  expect(mockedUsedNavigate).toHaveBeenCalledWith("/products")

});


// 5 display password error

 test("display password error", () => {

   render(<Loginform />);

   var element = screen.getByRole("button");

  fireEvent.click(element);

   const err = screen.getByText("Forgot password ?");

   expect(err).toBeInTheDocument();

 });
