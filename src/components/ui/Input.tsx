// import React from "react";
// import { forwardRef } from "react";

// interface Props extends React.HTMLAttributes<HTMLInputElement> {
//   value: string;
//   open: boolean;
//   initial: boolean;
//   transition: boolean;
// }

// const Input = forwardRef<HTMLInputElement, Props>(({ open, initial, transition, ...props }, ref) => {
//   return (
//     <Component open={open} initial={initial} transition={transition}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//       </svg>
//       <input ref={ref} {...props} />
//     </Component>
//   );
// });
// Input.displayName = "Input";

// export default Input;

// const Component = styled.div<{ open: boolean; initial: boolean; transition: boolean }>`
//   width: ${(props) => (props.open ? "18.75rem" : "0")};
//   visibility: ${(props) => (props.open ? "visible" : "hidden")};
//   transition: all 0.3s ease;

//   svg {
//     position: absolute;
//     left: 0.75rem;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 1.375rem;
//     height: 1.375rem;
//     fill: transparent;
//     z-index: 999;
//     width: ${(props) => (props.open ? "1.375rem" : "0")};
//   }

//   input {
//     border: 0;
//     width: 100%;
//     padding: ${(props) => (props.open ? "0.5rem 1rem 0.5rem 2.5rem" : "0.5rem 0")};
//     font-size: 0.875rem;
//     outline: 0;
//     border-radius: 0.3125rem;
//     color: #fff;
//     border: 1px solid #fff;
//     background-color: #333;

//     &::placeholder {
//       color: ${(props) => props.theme.colors.text.placeholder};
//     }

//     &::selection {
//       color: #fff;
//       background-color: ${(props) => props.theme.colors.main};
//     }
//   }

//   ${(props) => {
//     if (props.initial) {
//       if (props.transition) {
//         return css`
//           svg {
//             color: #333;
//           }

//           input {
//             color: #333;
//             border: 1px solid #333;
//             background-color: #fff;
//           }
//         `;
//       } else {
//         return css`
//           svg {
//             color: #fff;
//           }

//           input {
//             color: #fff;
//             border: 1px solid #fff;
//             background-color: #333;
//           }
//         `;
//       }
//     } else {
//       return css`
//         svg {
//           color: #fff;
//         }

//         input {
//           color: #fff;
//           border: 1px solid #fff;
//           background-color: #333;
//         }
//       `;
//     }
//   }}
// `;
