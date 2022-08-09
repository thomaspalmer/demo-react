
import { Container } from 'Components/Partials';
import { Card, CardBody } from 'Components/Card';

const PermissionDenied = () => {
    return (
        <div className="h-screen flex items-center">
            <Container sizeClassName="max-w-xl">
                <Card>
                    <CardBody className="text-center">
                        Sorry, you do not have access to this resource.
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default PermissionDenied;