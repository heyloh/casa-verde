import { ButtonStyles } from "./styles"

interface ButtonProps {
  text: string
  handleOnClick?: () => void
}

const Button = ({ text, handleOnClick }: ButtonProps) => {
  return(
    <ButtonStyles onClick={handleOnClick}>{text}</ButtonStyles>
  )
}

export default Button
