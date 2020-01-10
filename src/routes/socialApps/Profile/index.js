import React, {Component} from "react";
import {Col, Row} from "antd";
import About from "../../../components/profile/About/index";
import Biography from "../../../components/profile/Biography/index";
import Events from "../../../components/profile/Events/index";
import Contact from "../../../components/profile/Contact/index";

import {friendList} from './data'
import {photoList} from "../Wall/data";
import Friends from "../../../components/profile/Friends/index";
import Photos from "../../../components/profile/Photos/index";
import Auxiliary from "../../../util/Auxiliary";
import ProfileHeader from "../../../components/profile/ProfileHeader/index";
import firebase from "firebase";

const db = firebase.firestore();



class Profile extends Component {


  constructor(props, context) {
    super(props, context);

    this.state={
      profileUrl:null
    }
  }

  componentDidMount() {

    const images = firebase.storage().ref().child('items');
    const image = images.child('unnamed.jpg');
    image.getDownloadURL().then((url) => { this.setState({profileUrl:url})});

    db.collection("/items")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data); // array of cities objects
      });

  }


  render() {
    return (
      <Auxiliary>
        {this.state.profileUrl?<ProfileHeader profileUrl={this.state.profileUrl}/>:<></>}

        <div className="gx-profile-content">
          <Row>
            <Col xl={16} lg={14} md={14} sm={24} xs={24}>
              <About/>
              <Biography/>
              <Events/>
            </Col>

            <Col xl={8} lg={10} md={10} sm={24} xs={24}>
              <Contact/>
              <Row>
                <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                  <Friends friendList={friendList}/>
                </Col>
                <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                  <Photos photoList={photoList}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Auxiliary>
    );
  }
}

export default Profile;


