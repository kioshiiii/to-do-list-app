import { useState } from 'react';

function Task(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center ml-140 mr-135 gap-1 border-b-1 py-2">
          <input 
            type="checkbox" 
            className="w-5 h-5"
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
      
          <span 
            className={`flex-6 ${isChecked ? 'line-through' : ''}`}
            style={isChecked ? { textDecorationThickness: '2px' } : {}}
          >
            {props.message}
          </span>
    </div>
  );
}

export default Task;
