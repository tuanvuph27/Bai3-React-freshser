import React from "react";
import "./AddingModal.css";
import { ToDoContext } from "../../Context";

class AddingModal extends React.Component {
  constructor(props) {
    super(props);
    this.textInPut = React.createRef();
    this.typeOfADDAction = this.props.actionType;
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.props.HandleToggleModal();
          }}
          className="show_detail_modal"
        >
          <span className="material-icons show_modal_icon">queue</span>
        </button>
        {this.props.isHideModal ? null : (
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => {
                  this.props.HandleToggleModal();
                }}
              >
                &times;
              </span>
              <form>
                <label>
                  {this.typeOfADDAction === "addFolder"
                    ? "Name a new Folder"
                    : "Add detail content"}
                  <input type="text" ref={this.textInPut} />
                </label>
                <button
                  onClick={e => {
                    e.preventDefault();
                    switch (this.typeOfADDAction) {
                      case "addDetail":
                        this.props.handleAddDetailAction({
                          content: this.textInPut.current.value
                        });
                        break;
                      case "addFolder":
                        this.props.handleAddFolderAction({
                          id: this.props.listFolder.length,
                          folderName: this.textInPut.current.value,
                          detail: []
                        });
                        break;
                      default:
                        this.props.HandleToggleModal();
                    }
                    this.props.HandleToggleModal();
                  }}
                >
                  ADD
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}
AddingModal.contextType = ToDoContext;

export default AddingModal;
