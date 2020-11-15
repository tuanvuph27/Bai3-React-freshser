import React from "react";
import "./DetailToDoList.css";
import isEqual from "lodash/isEqual";

class DetailToDoList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (isEqual(this.props.detailList, nextProps.detailList)) {
      return false;
    } else return true;
  }
  render() {
    let textInPut = [];
    this.props.detailList.forEach(() => textInPut.push(React.createRef()));
    return (
      <div className="list_detail_item">
        {this.props.detailList.map((value, index) => (
          <div key={index} className="detail_item">
            <div className="detail_content">
              <p
                contentEditable="true"
                suppressContentEditableWarning={true}
                ref={textInPut[index]}
              >
                {value.content}
              </p>
            </div>
            <button
              className="update_item_button"
              onClick={() => {
                this.props.handleUpdateAction(
                  textInPut[index].current.innerText,
                  index
                );
              }}
            >
              <span className="material-icons update-icon">
                published_with_changes
              </span>
            </button>
            <button
              className="delete_item_button"
              onClick={() => {
                this.props.handleDeleteAction(index);
              }}
            >
              <span className="material-icons remove-icon">remove_circle</span>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default DetailToDoList;
