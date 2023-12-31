import React, { useState } from 'react';
import { createInventoryElement } from '../../services/api';

function ElementForm({ showElementForm, setShowElementForm }) {
  const [slacId, setSlacId] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [location, setLocation] = useState('');
  const [classType, setClassType] = useState('Item');
  const [chargeCode, setChargeCode] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const elementData = {
      name: slacId,
      classId: '65776b431f936c48a322725e',
      parentId: null,
      description: 'description',
      tags: [],
      attributes: [],
    };
  
    try {
      const response = await createInventoryElement(elementData);
      if (response.status === 201) {
        alert('FORM: Inventory Element created successfully!');
        // Additional actions after successful creation
      }
    } catch (error) {
      console.error('FORM: Error creating Inventory Element:', error);
      alert('FORM: Network error. Please check your connection.');
    }
  };
  

  return (
    <div className='admin-container'>
    <div className={`modal ${showElementForm ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <span className="close" onClick={() => setShowElementForm(false)}>&times;</span>
        <form className="class-form" onSubmit={handleSubmit}>
            <label htmlFor="slacId">SLAC ID:</label><br />
              <input
                  type="text"
                  id="slacId"
                  name="slacId"
                  value={slacId}
                  onChange={(event) => setSlacId(event.target.value)}
              /><br /><br />

              <label htmlFor="serialNumber">Serial Number:</label><br />
              <input
                  type="text"
                  id="serialNumber"
                  name="serialNumber"
                  value={serialNumber}
                  onChange={(event) => setSerialNumber(event.target.value)}
              /><br /><br />

              <label htmlFor="location">Location:</label><br />
              <input
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
              /><br /><br />

              <label htmlFor="chargeCode">Charge Code:</label><br />
              <input
                  type="text"
                  id="chargeCode"
                  name="chargeCode"
                  value={chargeCode}
                  onChange={(event) => setChargeCode(event.target.value)}
              /><br /><br />

              {/* Submit button */}
            <input type="submit" value="Create Element" />
          </form>
        </div>
      </div>
  </div>
  );
}

export default ElementForm;
