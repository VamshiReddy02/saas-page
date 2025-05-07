import { ButtonHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'

const buttonClasses = cva('border h-12 rounded-full px-6 font-medium', {
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white-950 border-blue-600',
      secondary: 'border-white text-white bg-transparent',
    },
    size: {
      sm: "h-10"
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm';
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant = 'primary', className, size, ...otherProps }: ButtonProps) => {
  return (
    <button className={clsx(buttonClasses({ variant, size }), className)} {...otherProps} />
  )
}

export default Button
