const Notification = (props) => {
  //  Write your code here.
  const { cardContainer, className, text, imageurl, imgclassName } = props;
  return (
    <div className={`para-container ${cardContainer}`}>
      <img src={imageurl} className={imgclassName} />
      <p className={className}>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="cards-container">
      <Notification
        cardContainer="blue-container"
        className="blue-box"
        text="Information Message"
        imageurl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        imgclassName="image"
      />
      <Notification
        cardContainer="green-container"
        className="green-box"
        text="Success Message"
        imageurl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        imgclassName="image"
      />
      <Notification
        cardContainer="yellow-container"
        className="yellow-box"
        text="Warning Message"
        imageurl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        imgclassName="image"
      />
      <Notification
        cardContainer="red-container"
        className="red-box"
        text="Error Message"
        imageurl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        imgclassName="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
