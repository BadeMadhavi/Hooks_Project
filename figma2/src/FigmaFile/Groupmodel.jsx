function GroupModal({
  groupName,
  setGroupName,
  groupColor,
  setGroupColor,
  availableColors,
  handleCreateGroup,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Group</h2>
        <div>
        <strong>Group Name</strong>
        <input type="text" className="groupname" placeholder="GroupName" value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
        </div>
        <div className="color-picker">
        <strong style={{margin:"5px"}}>Choose colour</strong>
          {availableColors.map((color) => (
            <div  key={color}
              className={`color-option ${groupColor === color ? 'selected' : ' '}`}
              style={{ backgroundColor: color }}
              onClick={() => setGroupColor(color)}/>
          ))}
        </div>
        <div className="btns">
        <button  className="create" onClick={handleCreateGroup}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default GroupModal;
