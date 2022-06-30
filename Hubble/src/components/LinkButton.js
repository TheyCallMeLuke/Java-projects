import { Link } from "react-router-dom"
import { Button } from "./styles/Button.styled"

export default function ({to, bg, color}) {
    return (
        <Link to={to}>
            <Button bg={bg} color={color}>
                Get Started For Free
            </Button>
        </Link >
    )
}