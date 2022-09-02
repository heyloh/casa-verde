import { Envelope } from 'phosphor-react'
import { theme } from '../../styles/theme'
import { InputContainer } from './styles'

const iconsPerInputType = {
  email: Envelope
}

type InputTypes = 'email'

interface InputProps {
  type: InputTypes
  name: string
  placeholder: string
}

const Input = ({ type, name, placeholder }: InputProps) => {
  const Icon = iconsPerInputType[type]
  return (
    <InputContainer>
      <Icon size={24} opacity={0.3} color={theme.colors.darkText} />
      <input type={type} name={name} placeholder={placeholder} />
    </InputContainer>
  )
}

export default Input
