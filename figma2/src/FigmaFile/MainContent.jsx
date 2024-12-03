import { useState } from "react";
import "./index.css";

function MainContent({ selectedGroup }) {
  const [inputValue, setInputValue] = useState("")
  const [groupsMessages, setGroupsMessages] = useState({})

  const getInitials = (name) => {
    const words = name.trim().split(" ")
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase()
    } else {
      const firstInitial = words[0][0]
      const lastInitial = words[words.length - 1][0]
      return (firstInitial + lastInitial).toUpperCase()
    }
  }

  const handleAddParagraph = () => {
    if (inputValue.trim() && selectedGroup) {
      const currentTime = new Date().toLocaleString()
      const newParagraph = {
        text: inputValue,
        time: currentTime,
      }

 
      setGroupsMessages((prev) => {
        const updatedMessages = { ...prev };
        if (!updatedMessages[selectedGroup.id]) {
          updatedMessages[selectedGroup.id] = [];
        }
        updatedMessages[selectedGroup.id].push(newParagraph)
        return updatedMessages
      })
      setInputValue("")
    }
  }

  return (
    <div className="main-content">
      {selectedGroup ? (
        <div style={{ background: "Lightblue" }}>
          <div className="navbar">
            <header className="initial">{getInitials(selectedGroup.name)}</header>
            <h1>{selectedGroup.name}</h1>
          </div>
          <div className="paragraph-container">

            <div>
           <p className="para">Another productive way to use this tool to begin a daily writing routine. One way is to generate a
           random paragraph with the intention to try to rewrite it while still keeping the original meaning. 
           The purpose here is to just get the writing started so that when the writer goes onto their day's 
           writing projects, words are already flowing from their fingers.   </p> 

           <p className="para">   Another productive way to use this tool to begin a daily writing routine. One way is to generate a
           random paragraph with the intention to try to rewrite it while still keeping the original meaning. 
           The purpose here is to just get the writing started so that when the writer goes onto their day's 
           writing projects, words are already flowing from their fingers.</p>

           <p className="para">   Another productive way to use this tool to begin a daily writing routine. One way is to generate a
           random paragraph with the intention to try to rewrite it while still keeping the original meaning. 
           The purpose here is to just get the writing started so that when the writer goes onto their day's 
           writing projects, words are already flowing from their fingers.</p>
           </div>
            {groupsMessages[selectedGroup.id] &&
              groupsMessages[selectedGroup.id].map((para, index) => (
                <div key={index} className="para">
                  <p>{para.text}</p>
                  <p className="timestamp">{para.time}</p> 
                </div>
              ))}
          </div>
          <div className="input-container">
         <input type="text"
              className="input-box"
              placeholder="Write a paragraph..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}/>
            <button className="send-button" onClick={handleAddParagraph}> ➤ </button>
          </div>
        </div>
      ) : (
        <div style={{ background: "Lightblue",height:"100vh" }}>
          <img className="notes" src="./image-removebg-preview 1.png" alt="pocket notes" />
          <h1 style={{ color: "black", textAlign: "center", margin: "auto" }}>Pocket Notes</h1>
          <p style={{ color: "black", textAlign: "center" }}>
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
          </p>
          <div className="key">
            <img className="vector" src="Vector.png" alt="vector" />
            <p>end-to-end encrypted</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainContent;
