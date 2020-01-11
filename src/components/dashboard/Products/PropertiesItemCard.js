import React from "react";
import {Card, Col, Row} from "antd";

const {Meta} = Card;

function PropertiesItemCard({data}) {
    console.log(data)
    const {image, description, category, name, date, isFeatured, prize, sqft, bedrooms, baths, area, more, item, icons} = data;
    return (

            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <Card hoverable
                      cover={<img alt={description} src={image}/>}

                >
                    <Meta
                        title={name}
                        description={description}
                    />
                </Card>
            </Col>


    );
}

export default PropertiesItemCard;
