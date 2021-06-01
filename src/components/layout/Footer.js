import { Container } from 'react-bootstrap'

const FooterComponent = () => {
    return (
        <>
            <div class="footer text-center text-dark bg-light">
                <Container fluid>
                    <div class="text-center p-4">
                        © 2021 Copyright resume4.dev
                    </div>
                </Container>
            </div>
        </>
    )
}

export default FooterComponent;