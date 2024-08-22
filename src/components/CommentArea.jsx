import { Component } from "react";
import { ListGroup } from "react-bootstrap";


class CommentArea extends Component {
  state = {
    comment: false,
    showComment: []
  };

  fetchBook = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/")
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("la chiamata non è andata a buon fine")
        }
    })
    .then((arrayOfComments) => {
        this.setState({
            showComment: arrayOfComments
        })
    })
    .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI", err)
    })
}


  render() {
    return <ListGroup.Item>COMMENTO BLA BLA BLA</ListGroup.Item>;
  }
}







export default CommentArea;
