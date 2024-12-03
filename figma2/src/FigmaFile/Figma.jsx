import { useState, useCallback, useMemo } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import GroupModal from './Groupmodel';
import './index.css';

function Figma() {
  const initialGroupsData = [
    { id: 1, name: "My Notes", color: "#4A90E2", initials: "MN" },
    { id: 2, name: "My personal grp", color: "#9B51E0", initials: "MP" },
    { id: 3, name: "Javascript grp", color: "#EB5757", initials: "JG" },
    { id: 4, name: "HTML grp", color: "#56CCF2", initials: "HG" },
    { id: 5, name: "CSS Notes", color: "#EB5757", initials: "CN" },
  ]

  const [isModalOpen, setModalOpen] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [groupColor, setGroupColor] = useState('#FFFFFF'); 
  const [groups, setGroups] = useState(initialGroupsData)
  const [selectedGroup, setSelectedGroup] = useState(null)

 
  const openModal = useCallback(() => {
    setModalOpen(true);
  }, [])


  const closeModal = useCallback(() => {
    setModalOpen(false);
    setGroupName('');
    setGroupColor('#FFFFFF'); 
  }, [])


  const handleCreateGroup = useCallback(() => {
    if (groupName.trim()) {
      const newGroup = {
        id: groups.length + 1, 
        name: groupName,
        color: groupColor,
        initials: groupName.slice(0, 2).toUpperCase(), 
        content: [], 
      }


      setGroups(prevGroups => [...prevGroups, newGroup])
      closeModal()
    }
  }, [groupName, groupColor, closeModal, groups.length])

  const availableColors = useMemo(() => [
    '#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF',
  ], [])

  return (
    <div className="pocketgroups">
    
      <Sidebar
        groups={groups}
        openModal={openModal}
        setSelectedGroup={setSelectedGroup} />

      <MainContent
        groups={groups}
        selectedGroup={selectedGroup}
        setGroups={setGroups}/>

      {isModalOpen && (
        <GroupModal
          groupName={groupName}
          setGroupName={setGroupName}
          groupColor={groupColor}
          setGroupColor={setGroupColor}
          availableColors={availableColors}
          handleCreateGroup={handleCreateGroup}
          closeModal={closeModal} />
      )}
    </div>
  )
}

export default Figma;
