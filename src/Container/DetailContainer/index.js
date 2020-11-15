import React from "react";
import "./DetailContainer.css";
import { ToDoContext } from "../../Context";
import { toggleModal } from "../../utils";
import AddingModal from "../../Components/AddingModal";
import DetailToDoList from "../../Components/DetailToDoList";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHideModal: true };
    this.toggleModal = toggleModal.bind(this);
  }
  render() {
    let {
      pointingFolder,
      list,
      deleteDetail,
      updateDetail,
      addDetail
    } = this.context;
    let detailList = list[pointingFolder].detail;
    return (
      <div className="detail-container">
        <div className="folder_title">
          <h2>{list[pointingFolder].folderName.toUpperCase()}</h2>
        </div>
        <DetailToDoList
          detailList={detailList}
          handleDeleteAction={deleteDetail}
          handleUpdateAction={updateDetail}
        />
        <AddingModal
          listFolder={list}
          handleAddDetailAction={addDetail}
          actionType="addDetail"
          isHideModal={this.state.isHideModal}
          HandleToggleModal={this.toggleModal}
        />
      </div>
    );
  }
}
DetailContainer.contextType = ToDoContext;

export default DetailContainer;
