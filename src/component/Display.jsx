import React,{ useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useNavigate,useParams } from "react-router-dom";
import Singlepost from "./Singlepost";
function Display() {
  const navigate = useNavigate();
  const postid = useParams();

  const [state, setState] = useState(null);

  const userPosts = [
    {
      id: "1",
      image: "https://wallpaperaccess.com/full/3329117.jpg",
      title: "Maravante Beach",
    },

    {
      id: "2",
      image:
        "https://lp-cms-production.imgix.net/news/2019/06/taj-mahal.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4",
      title: "Taj Mahal",
    },

    {
      id: "3",
      image:
        "https://th.bing.com/th/id/R.147dfd2696e0459de9a3316a704dc0e4?rik=vhnoj6OKKBRoFw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f296416-landscape-nature-mountain-lake-trees-snow-clouds-forest.jpg&ehk=GMAtZ8wa9YufV9P0BhLN3PZCWSTqXo2dz8iecfHiP8o%3d&risl=&pid=ImgRaw&r=0",
      title: "Nature",
    },

    {
      id: "4",
      image:
        "https://th.bing.com/th/id/OIP._Ve88_NOWDfF226B7JhVewHaGL?rs=1&pid=ImgDetMain",
      title: "3D-Leaf",
    },
  ];

  const handleSinglePost = (item, index) => {
    // console.log(item);
    setState(item);
    navigate(`/display/postid`);
  };

console.log(state)
  return (
    <Row>
      <h1>Hello User!!</h1>

      {userPosts.map((item, index) => {
        return (
          <Col>
            <Card
              style={{ width: "18rem" }}
              onClick={() => handleSinglePost(item, index)}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title> {item.title} </Card.Title>
                {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
      {state && <Singlepost item={state} />}
    </Row>
  );
}

export default Display;
