import React,{Component} from "react";
import {Radio, Row} from "antd";

import Widget from "components/Widget/index";
import {data} from "../../../firebase/g/data"
import CircularProgress from "components/CircularProgress";
import PropertiesItemCard from "./PropertiesItemCard";
import {getAllDataFromDB, getDataByCategoryFromDB} from "../../../firebase/firebase";


const popularData = data;


class PropertiesCard extends Component {
    state = {
        popular: [],
        loader: false,
        categories:[]
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({loader: true})
        getDataByCategoryFromDB('products',value).then(products => {
            this.setState({
                popular:products,
                loader: false
            });
        })


    };

    componentDidMount() {
        getAllDataFromDB('categories').then(categories => {
            this.setState({categories, loader: false})
        })
    }

    render() {
        const {loader, popular,categories} = this.state;

        let allProducts=[]
        if (!loader) {
            const length = popular.length
            for (let i = 0; i < length; i++) {
                let product = []
                if (i % 3 === 0) {
                    let breakLine = i + 3 < length ? i + 3 : length

                    for (let j = i; j < breakLine; j++)
                        product.push(<PropertiesItemCard key={j} data={popular[j]}/>)

                }
                allProducts.push(<Row key={i}>{product.map(d=> d)}</Row>)
            }
        }

        return (
            <Widget>
                <div className="ant-row-flex gx-justify-content-between gx-mb-3 gx-mb-sm-4 gx-dash-search">
                    <h2 className="h4 gx-mb-3 gx-mb-sm-1 gx-mr-2">Properties</h2>
                    <div className="gx-mx-sm-2">
                        <Radio.Group className="gx-radio-group-link gx-radio-group-link-bg-light" defaultValue={0}
                                     onChange={this.handleChange}>
                            {
                                categories.map((category,index)=>{
                                    return  <Radio.Button key={index} value={category.name} className="gx-mb-2">{category.name}</Radio.Button>
                                })
                            }

                        </Radio.Group>
                    </div>
                    <span className="gx-ml-2 gx-search-icon"><i
                        className="icon icon-search-new gx-pointer gx-text-primary gx-fs-xxl"/></span>
                </div>

                {loader ? <CircularProgress className="gx-loader-400"/> : allProducts.map(p=>p)}

            </Widget>
        );
    }
}

export default PropertiesCard;
