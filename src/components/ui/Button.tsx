// import { ButtonHTMLAttributes } from "react";
// import { cn } from "@/lib/utils"; // Helper function for conditional classes

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "secondary" | "outline";
// }

// export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, ...props }) => {
//   const variants = {
//     primary: "bg-blue-500 text-white hover:bg-blue-600",
//     secondary: "bg-gray-500 text-white hover:bg-gray-600",
//     outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
//   };

//   return (
//     <button className={cn("px-4 py-2 rounded-lg", variants[variant], className)} {...props} />
//   );
// };
