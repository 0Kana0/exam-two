import React from 'react'
import FormStatus from './components/FormStatus'
import Table from './components/Table'
import { ProfileProvider } from './context/ProfileProvider'

function App() {
  return (
    <div>
      <ProfileProvider>
        <FormStatus />
        <Table />
      </ProfileProvider>
    </div>
  )
}

export default App
