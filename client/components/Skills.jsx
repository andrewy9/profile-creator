import React from 'react'
import { connect } from 'react-redux'
import { appendSkill, updateSkill, removeSkill } from '../actions/skills'

function Skills(props) {
  const initialState = {
    skill: ''
  }

  const handleChange = (e) => {
    e.preventDefault();
    props.dispatch(updateSkill(e.target));
  }

  const addMoreButton = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    props.dispatch(appendSkill({ ...initialState }));
  }

  const removeButton = (id) => {
    props.dispatch(removeSkill(id));
  }
  return (
    <div className="skills content">
      {props.skills.length == 0 ?
        <div className="control">
          <button className='addSocial button is-small is-light button-spacer' type='button' onClick={addMoreButton}>Add Skills</button>
        </div >
        : <div>
          <h3>Skills</h3>
          {
            props.skills.map((skill, idx) => {
              return (
                <div key={idx}>
                  <label className='label'>Skill #{idx + 1}:</label>
                  <div className="control">
                    <input
                      type='text'
                      id={idx}
                      className='skills input is-small'
                      name='skill'
                      value={skill.provider}
                      onChange={handleChange}>
                    </input>
                  </div>

                  <div className="control">
                    <button type='button' className='skills button is-small is-light button-spacer' onClick={() => removeButton(idx)}>Remove</button>
                  </div>

                </div>
              );
            })
          }
        </div>
      }
      {props.skills.length > 0 &&
        <div className="control">
          <button className='skills button is-small is-light button-spacer' type='button' onClick={addMoreButton}>Add More</button>
        </div >}
    </div >
  );
}

function mapPropsToState(gloablState) {
  return {
    skills: gloablState.skills.skill
  }
}

export default connect(mapPropsToState)(Skills)
