import React from "react";
import Modal from "react-modal";
import add from "./add-logo.png";
import { connect } from "react-redux";
import { addMovie } from "./redux/actions/index";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement('#root')

class AddForm extends React.Component {
  state = {
    modalIsOpen: false,
    movieAdd: {
      name: "",
      year: "",
      image: "",
      rating: ""
    }
  };

  handelSubmit = e => {
    e.preventDefault();
    if (Object.values(this.state.movieAdd).indexOf("") > -1) {
      // this.setState({modalIsOpen:false})
      alert("Enter a valid informations");
    } else {
      this.setState({
        modalIsOpen: false,
        movieAdd: { ...this.state.movieAdd, name: "" }
      });
      this.props.addMovie({ id: Date.now(), ...this.state.movieAdd });
    }
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handelName = e => {
    this.setState({
      movieAdd: { ...this.state.movieAdd, name: e.target.value }
    });
  };
  handelRating = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        rating:
          /[0-9]{1}/.test(e.target.value) && e.target.value < 6
            ? e.target.value
            : ""
      }
    });
  };
  handelYear = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        year:
          /^[0-9]{4}$/.test(e.target.value) && e.target.value > 1900
            ? e.target.value
            : ""
      }
    });
  };
  handelLink = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        image: /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)
          ? e.target.value
          : ""
      }
    });
  };

  render() {
    return (
      <div>
        <button className="addMovie" onClick={this.openModal}>
          <img className="logoAdd" src={add} alt="Fail to load" />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <form className="form-container">
            <h3 className="form-title">Add a Movie</h3>

            <label>Movie Name</label>
            <input type="text" onChange={this.handelName} />

            <label>Rating</label>
            <input type="text" onChange={this.handelRating} />

            <label>Year Of Relase</label>
            <input type="text" onChange={this.handelYear} />

            <label>Movie Link</label>
            <input type="url" onChange={this.handelLink} />

            <div className="btn-container">
              <button onClick={this.handelSubmit}>Submit</button>
              <button onClick={this.closeModal}>Cancel</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovie: playload => dispatch(addMovie(playload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
