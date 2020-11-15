import React from "react";
import "./FolderContainer.css";
import { ToDoContext } from "../../Context";
import { toggleModal } from "../../utils";
import AddingModal from "../../Components/AddingModal";
import FolderList from "../../Components/FolderList";

class FolderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHideModal: true };
    this.toggleModal = toggleModal.bind(this);
  }
  render() {
    let { list, setWhichFolderPoiting, addFolder, togglePages } = this.context;
    return (
      <div className="list_folder-container">
        <FolderList
          listFolder={list}
          handleSetPoitingFolder={setWhichFolderPoiting}
          handleTogglePages={togglePages}
        />
        <AddingModal
          listFolder={list}
          handleAddFolderAction={addFolder}
          actionType="addFolder"
          isHideModal={this.state.isHideModal}
          HandleToggleModal={this.toggleModal}
        />
      </div>
    );
  }
}
FolderContainer.contextType = ToDoContext;

export default FolderContainer;
