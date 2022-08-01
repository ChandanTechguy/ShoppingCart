import { render, screen, fireEvent } from "@testing-library/react";
import {Loginform} from "./Component/Login"

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));


// 1

test("renders Login page", () => {
  render(<Loginform />);
    // screen.debug();
  const email = screen.getByPlaceholderText("Email");
  expect(email).toBeInTheDocument(); // jest
});

// 2

test("should accept email value", () => {
  render(<Loginform />);
  const element = screen.getByPlaceholderText("Email");
  fireEvent.change(element, { target: { value: "test@gmail.com" } });
  screen.debug();
  expect(element.value).toBe("test@gmail.com");
});

// 3 Context

// test("should display errors", () => {
//   render(
//     <ShopCartContext>
//       <Login />
//     </ShopCartContext>
//   );
//   const element = screen.getByRole("button");

//   fireEvent.click(element);
// //   screen.debug();

// // userEvent.click(element)
//   const err = screen.getAllByText("Cannot be empty");
// // console.log(err, "::error")
//   expect(err[0]).toHaveClass("error");
//   expect(err[1]).toHaveClass("error");
//   expect(err.length).toBe(2);
// });

// 4 With one error

// test("should display 1 error", () => {
//   render(
//     <ShopCartContext>
//       <Login />
//     </ShopCartContext>
//   );

//   const element = screen.getByPlaceholderText("Email Id");
//   fireEvent.change(element, { target: { value: "test@gmail.com" } });
//   const button = screen.getByRole("button");

//   fireEvent.click(button);
//   const err = screen.getAllByText("Cannot be empty");
//   expect(err[0]).toHaveClass("error");
//   expect(err.length).toBe(1);
// });


// 5 With no errors

// test("should display no errors", () => {
//   render(
//     <ShopCartContext>
//       <Login />
//     </ShopCartContext>
//   );

//   const email = screen.getByPlaceholderText("Email Id");
//   fireEvent.change(email, { target: { value: "test@gmail.com" } });

//   const password = screen.getByPlaceholderText("Password");
//   fireEvent.change(password, { target: { value: "Test@123" } });
  
//   const button = screen.getByRole("button");
//   fireEvent.click(button);

// //   const err = screen.getByText("Cannot be empty");
// //   expect(err[0]).toHaveClass("error");
// //   expect(err.length).toBe(1);
// });

