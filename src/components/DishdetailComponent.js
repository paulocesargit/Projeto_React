import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const DishDetail = ({ dish }) => {
  const renderDish = (dish) => {
    if (!dish) return <div></div>;

    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  };

  const renderComments = (comments) => {
    if (!comments) return <div></div>;

    const commentList = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentList}</ul>
      </div>
    );
  };

  if (!dish) return <div></div>;

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>
      <div className="col-12 col-md-5 m-1">{renderComments(dish.comments)}</div>
    </div>
  );
};

export default DishDetail;
