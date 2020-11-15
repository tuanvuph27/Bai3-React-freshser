import React from "react";
import "./FolderList.css";
import isEqual from "lodash/isEqual";

class FolderList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (isEqual(this.props.listFolder, nextProps.listFolder)) {
      return false;
    } else return true;
  }
  render() {
    return (
      <div className="list_folder">
        {this.props.listFolder.map((value, i) => {
          let autoColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
          return (
            <div
              key={i}
              className="folder_item"
              onClick={() => {
                this.props.handleSetPoitingFolder(i);
              }}
              onDoubleClick={() => {
                this.props.handleTogglePages();
              }}
            >
              <div
                className="icon_each_folder"
                style={{
                  backgroundColor: autoColor
                }}
              >
                <span className="material-icons icon_list">list</span>
              </div>
              <div className="folder_name">{value.folderName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FolderList;
