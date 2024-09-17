import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

/*
  default - configuração global, aparece em todas as variações do componente
  Title: título da página desse story
  componente: qual o componente dessa story
*/
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

/*
  StoryObj - Tipagem 
  Primary e Big são variantes do nosso botão
*/
export const Primary: StoryObj<ButtonProps> = {}

// resolver problema da tipagem
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
