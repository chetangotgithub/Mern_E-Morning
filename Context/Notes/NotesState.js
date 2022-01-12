import NoteContext from "./NotesContext";
import { useState } from "react";
import { useHistory } from "react-router";

const NoteState = (props) => {
  const url = "http://localhost:5000";
  const noteInitial = [];
  const [notes, setnotes] = useState(noteInitial);
  let history = useHistory();
  console.log(history);
  //get note
  const getnote = async (note) => {
    const response = await fetch(`${url}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setnotes(json);
  };

  //Add a Note
  //Api Call

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${url}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    setnotes(notes.concat({ title, description, tag }));
  };
  //Delete A Note
  const deletenote = async (id) => {
    //Api Call
    const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(),
    });
    const json = response.json();
    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newnotes);
  };

  //Edit A Note
  const editnote = async (id, title, description, tag) => {
    console.log(`${title},${description},${tag},${id}`);
    //Api Call
    const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    const newnotes = JSON.parse(JSON.stringify(notes));
    //edit a note
    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setnotes(newnotes);
  };

  const Login = async (email, password) => {
    const response = await fetch(`${url}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json192 = await response.json();
    if (!json192.error) {
      localStorage.setItem("token", json192.authtoken);
      console.log(history);

      history.push("/Notes");
      console.log(json192.authtoken);
    } else {
      alert(json192.error);
    }
  };
  const Signup = async (name, email, password) => {
    const response = await fetch(`${url}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json192 = await response.json();
    if (!json192.error) {
      history.push("/SignIn");
      alert("Successfully Registered");
    } else {
      alert(json192.error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deletenote, editnote, getnote, Login, Signup }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
