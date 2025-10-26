import { createFileRoute } from '@tanstack/react-router'
import { Signup } from '../../components/SignupComponent'

export const Route = createFileRoute('/signup/')({
  component: Signup,
})