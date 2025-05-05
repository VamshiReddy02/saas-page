import { HTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'

const buttonClasses = cva('border h-12 rounded-full px-6 font-medium', {
  variants: {
    variant: {
      primary: 'bg-lime-400 text-neutral-950 border-lime-400',
      secondary: 'border-white text-white bg-transparent',
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & HTMLAttributes<HTMLButtonElement>

const Button = ({ variant = 'primary', className, ...otherProps }: ButtonProps) => {
  return (
    <button className={clsx(buttonClasses({ variant }), className)} {...otherProps} />
  )
}

export default Button
