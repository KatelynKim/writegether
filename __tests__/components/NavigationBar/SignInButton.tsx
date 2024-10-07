import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GoogleSignInButton from '@/components/NavigationBar/SignInButton'

describe('SigInButton', () => {
    it("renders a button", () => {
        render(<GoogleSignInButton />)

        const button = screen.getByRole("button", { name: "LOGIN" })

        expect(button).toBeInTheDocument()
    })
})
