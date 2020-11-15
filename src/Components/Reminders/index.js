import React from "react";
import "./Reminders.css";
import FolderContainer from "../../Container/FolderContainer";
import DetailContainer from "../../Container/DetailContainer";
import { toDoLists, ToDoContext } from "../../Context";

class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: JSON.parse(localStorage.getItem("totalToDoList")) || toDoLists,
      pointingFolder: 0,
      setWhichFolderPoiting: this.setWhichFolderPoiting,
      addDetail: this.addDetail,
      addFolder: this.addFolder,
      updateDetail: this.updateDetail,
      deleteDetail: this.deleteDetail,
      togglePages: this.togglePages,
      isShowDetail: true,
      isShowFolderList: true
    };
  }
  setWhichFolderPoiting = index => {
    this.setState({
      pointingFolder: index
    });
  };
  addFolder = obj => {
    let updatedList = [...this.state.list, obj];
    this.setState(
      {
        list: updatedList
      },
      () => {
        localStorage.setItem("totalToDoList", JSON.stringify(updatedList));
      }
    );
  };
  addDetail = obj => {
    let updatedList = [...this.state.list];
    updatedList[this.state.pointingFolder].detail.push(obj);
    this.setState(
      {
        list: updatedList
      },
      () => {
        localStorage.setItem("totalToDoList", JSON.stringify(updatedList));
      }
    );
  };
  deleteDetail = index => {
    let updatedList = [...this.state.list];
    updatedList[this.state.pointingFolder].detail.splice(index, 1);
    this.setState(
      {
        list: updatedList
      },
      () => {
        localStorage.setItem("totalToDoList", JSON.stringify(updatedList));
      }
    );
  };
  updateDetail = (text, index) => {
    let updatedList = [...this.state.list];
    updatedList[this.state.pointingFolder].detail[index].content = text;
    this.setState(
      {
        list: updatedList
      },
      () => {
        localStorage.setItem("totalToDoList", JSON.stringify(updatedList));
      }
    );
  };
  togglePages = () => {
    this.setState({
      isShowDetail: !this.state.isShowDetail,
      isShowFolderList: !this.state.isShowFolderList
    });
  };
  handleResize = () => {
    const windowSize = window.innerWidth;
    if (windowSize > 576) {
      this.setState({
        isShowDetail: true,
        isShowFolderList: true
      });
    } else {
      this.setState({
        isShowDetail: false,
        isShowFolderList: true
      });
    }
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    return (
      <div className="reminders-container">
        <ToDoContext.Provider value={this.state}>
          {this.state.isShowFolderList ? <FolderContainer /> : null}
          {this.state.isShowDetail ? <DetailContainer /> : null}
        </ToDoContext.Provider>
        <div className="expand-button" onClick={this.togglePages}>
          <span className="material-icons expand-icon">
            swap_horizontal_circle
          </span>
        </div>
      </div>
    );
  }
}

export default Reminders;
