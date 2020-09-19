import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "components/ui-components/rating";

export interface IMeal {
  name: string;
  description: string;
  image: string;
  action: Function;
  actionTitle: string;
  cls: string;
  rating: number;
}
export default function Meal(props: IMeal) {
  // const [stateConfig] = useContext(ConfigurationContext);
  const stateConfig = { imageSize: 200 };
  const { action } = props;

  function onAction() {
    const { name, image, description, rating } = props;
    action({ name, image, description, rating }); // action can be( addMeal, removeMeal, editMeal etc..)
    // action(props);
  }
  return (
    <Card className="col-lg-4">
      <Card.Img
        variant="top"
        src={props.image}
        style={{ width: `${stateConfig.imageSize}px` }}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant={props.cls || "primary"} onClick={onAction}>
          {props.actionTitle}
        </Button>
        <Rating stars={props.rating} />
      </Card.Body>
    </Card>
  );
}
