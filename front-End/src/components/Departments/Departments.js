import React from 'react';
import './Departments.css'
import depText from './DepartmentsTEXT';
import SmsSignup from './SMSFormMock';


function DisplayDepartmentsPage ( { language } ){

    const departments = [
        { name: depText[language].music, imageAlt: 'Music Department' },
        { name: depText[language].kgroup, imageAlt: 'Kids Group' },
        { name: depText[language].ygroup, imageAlt: 'Youth Group' },
        { name: depText[language].freunion, imageAlt: 'Family Reunions' },
        { name: depText[language].evan, imageAlt: 'Evangelism' },
        { name: depText[language].marriage, imageAlt: 'Marriages Department' },
      ];
    
      return (
        <div id="fake-dep-body">
        <div className="departments-container">
          <h2 className="departments-title">{depText[language].title}</h2>
          <div className="departments-grid">
            {departments.map((dept) => (
              <div key={dept.name} className="department-card">
                <div className="image-placeholder">
                  {/* ADD MY SRC TO IMAGE PATH LATER */}
                  <img
                    src=""
                    alt={dept.imageAlt}
                    className="department-image"
                  />
                </div>
                <h3 className="department-name">{dept.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <SmsSignup/>
        </div>
      );
    };
    
export default DisplayDepartmentsPage;