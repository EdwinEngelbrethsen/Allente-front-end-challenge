import {Card} from "react-bootstrap";

const Recommendations = ({title, ImageURL, description}) => {

    return (
            <Card style={{marginLeft: "20px", border: "none", backgroundColor: "#192234", color: "white"}}>
                <Card.Img src={ImageURL}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        
    )
}

export default Recommendations;