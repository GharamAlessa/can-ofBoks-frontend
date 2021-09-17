import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books?email=${this.props.user.email}`)
      .then((bookResponse) => {
        this.setState({ bookData: bookResponse.data });
        console.log(this.state.bookData);
      })
      .catch((error) => alert(error.message));
  };

  render() {
    /* TODO: render user's books in a Carousel */
    return (
      <div>
        {this.state.bookData.length != 0 ? (
          <Carousel>
            {this.state.bookData.map((book) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.urbansplash.co.uk/images/placeholder-16-9.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption > 
                    <h3 className="text-dark">{book.title}</h3>
                    <p className="text-dark">{book.description}</p>
                    <h4 className="text-dark">{book.status}</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          <h2>The book collection is empty.</h2>
        )}
      </div>
    );
  }
}

export default BestBooks;
