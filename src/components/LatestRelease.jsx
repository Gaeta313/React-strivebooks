import fantasy from "../data/fantasy.json";
import { Row,Col } from "react-bootstrap";

const LatestRelase = () => 
<Row xs={1} md={4} lg={5} className="g-4">
    {fantasy.map((libro,i) => (
        <Col key={i} className="g-4 my-2">
        <img src={libro.img} alt="" width="100%" height="100%" />
        </Col>
        
    ))}
</Row>;

export default LatestRelase;
