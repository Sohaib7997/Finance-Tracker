import { createFileRoute } from '@tanstack/react-router'
import { LoginComponent } from '../components/LoginComponent'

export const Route = createFileRoute('/')({
  component: LoginComponent,
})

