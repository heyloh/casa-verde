import { Button } from "../Button"
import { Input } from "../Input"
import { NewsletterContainer } from "./styles"

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Input type="email" name="email" placeholder="Insira seu e-mail" />
      <Button text="Assinar newsletter" />
    </NewsletterContainer>
  )
}

export default Newsletter
