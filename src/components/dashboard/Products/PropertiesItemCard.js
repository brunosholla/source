import React, {Component} from "react";
import {Card, Col, Row, Button, Divider, Icon} from "antd";
import ReactToPrint from "react-to-print";
import {printDiv} from "../../../util/customFunctions";

const {Meta} = Card;

class PropertiesItemCard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        //  console.log(this.props.data)
        const {image, description, category, name, objectID, isFeatured, prize, sqft, bedrooms, baths, area, more, item, icons} = this.props.data;
        return (

            <Col xl={8} lg={12} md={12} sm={24} xs={24} onClick={(e) => printDiv(objectID)}>
                <Card hoverable
                      cover={<img alt={description} src={image}/>}
                >
                    <Meta
                        id={objectID}
                        title={name}
                        description={description}
                    />

                </Card>
            </Col>


        );
    }
}

export default PropertiesItemCard;
