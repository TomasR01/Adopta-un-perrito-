import { Badge } from "react-bootstrap"


const Tags = ({textoTag, colorTag}) => {
    return (
        <Badge bg={colorTag}>{textoTag}</Badge>
    )
}

export default Tags