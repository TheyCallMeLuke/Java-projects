import Header from '../components/Header'
import { Container } from '../components/styles/Container.styled'
import content from '../content';
import Card from '../components/Card';

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                {content.map((item, index) =>
                    <Card key={index} item={item} />
                )}
            </Container>
        </>
    )
}