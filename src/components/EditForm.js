import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { editMovie} from './redux/actions/index'

Modal.setAppElement('#root')

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
 
class EditForm extends React.Component {
   state = {
        modalIsOpen: false,
        movieEdit: {
            name: "",
            year: "",
            image: "",
            rating: ""
          }
      };
   

   
    openModal=()=> {
      this.setState({modalIsOpen: true ,movieEdit:this.props.movie});

    }
   
    closeModal=()=> {
      this.setState({modalIsOpen: false});
    }

    handelSubmit=(e)=>{
      e.preventDefault();
      if(Object.values(this.state.movieEdit).indexOf("")>-1){
       
      // this.setState({modalIsOpen:false})
      alert("Enter a valid informations")
      
     }else{
      this.setState({modalIsOpen:false,movieEdit:{...this.state.movieEdit,name:""}});
      this.props.editMovie({
        name:this.state.movieEdit.name,
        rating:this.state.movieEdit.rating,
        image:this.state.movieEdit.image,
        year:this.state.movieEdit.year,
        id:this.props.movie.id
     
      });
     }
    }

    
  handelName = e => {
    
    this.setState({
      movieEdit: { ...this.state.movieEdit, name: e.target.value===""?this.props.movie.name:e.target.value }
    });
  };
  handelRating = e => {
    this.setState({
      movieEdit: {
        ...this.state.movieEdit,
        rating:e.target.value===""?
        this.props.movie.rating
        :
          /[0-9]{1}/.test(e.target.value) && e.target.value < 6
            ? e.target.value
            : ""
      }
    });
  };
  handelYear = e => {
    this.setState({
      movieEdit: {
        ...this.state.movieEdit,
        year:e.target.value===""?this.props.movie.year:
          /^[0-9]{4}$/.test(e.target.value) && e.target.value > 1900
            ? e.target.value
            : ""
      }
    });
  };
  handelLink = e => {
    this.setState({
      movieEdit: {
        ...this.state.movieEdit,
        image:e.target.value===""?this.props.movie.image:
         /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)
          ? e.target.value
          : ""
      }
    });
  };
  
   
    render() {
      return (<div>
        <Modal
      isOpen={this.state.modalIsOpen}
      onRequestClose={this.closeModal}
      style={customStyles}
    >
      <form className="form-container">
        <h3 className="form-title">Edit a Movie</h3>

        <label>Movie Name</label>
        <input type="text"  onChange={this.handelName} />

        <label>Rating</label>
        <input type="text" onChange={this.handelRating} />

        <label>Year Of Relase</label>
        <input type="text"  onChange={this.handelYear} />

        <label>Movie Link</label>
        <input type="url" onChange={this.handelLink} />

        <div className="btn-container">
          <button onClick={this.handelSubmit}>Submit</button>
          <button onClick={this.closeModal}>Cancel</button>
        </div>
      </form>
    </Modal>
    <button 
    className="edit-button"
     onClick={this.openModal}
     >EDIT</button>
    </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
    movieData:state.movieData,
   
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
     
      editMovie: playload => dispatch(editMovie(playload))
    };
  };



  export default connect(mapStateToProps,mapDispatchToProps)(EditForm)