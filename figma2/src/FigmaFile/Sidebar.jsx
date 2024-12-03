function Sidebar({ groups, openModal, setSelectedGroup }) {
    
  const getInitials = (name) => {
    const words = name.trim().split(" ")
     if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase()
    }
     else 
     {
      const firstInitial = words[0][0]
      const lastInitial = words[words.length - 1][0]
      return (firstInitial + lastInitial).toUpperCase()
    }
  }

  return (
    <div style={{ paddingTop: "20px" }}>
    <div className="sidebar">
     <h2 className="sidebar-header">Pocket Notes</h2>
     <ul className="group-list">
          {groups.map((group, index) => (
           <li key={index} className="group-item" onClick={() => setSelectedGroup(group)}>
              <div className="group-initials" style={{ backgroundColor: group.color }}>{getInitials(group.name)}</div>
              <span className="group-name">{group.name}</span>
            </li>
          ))}
        </ul>
        <div>
          <button className="addbtn" onClick={openModal}>
            <span className="plus">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
