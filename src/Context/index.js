import React from "react";

export const toDoLists = [
  {
    id: 0,
    folderName: "To Do Listt",
    detail: [
      {
        id: 0,
        content: "lam asm3"
      }
    ]
  }
];

export const ToDoContext = React.createContext({
  list: [],
  pointingFolder: 0,
  setWhichFolderPoiting: () => {},
  addDetail: () => {},
  addFolder: () => {},
  updateDetail: () => {},
  deleteDetail: () => {},
  isShowDetail: true,
  isShowFolderList: true,
  togglePages: () => {}
});
