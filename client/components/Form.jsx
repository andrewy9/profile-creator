import React, { useState } from 'react'
import { connect } from 'react-redux'
import BasicDetails from "./BasicDetails";
import ProfileIntro from "./ProfileIntro";
import EmploymentHistory from "./EmploymentHistory";
import OlderEmploymentHistory from "./OlderEmploymentHistory";

function Form() {

  return (
    <div>
      <form>
        <BasicDetails />
        <ProfileIntro />
        <EmploymentHistory />
        <OlderEmploymentHistory />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}


export default connect()(Form)