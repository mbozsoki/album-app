import { FunctionComponent } from 'react'
import SideBar from '../components/side-bar'

const BaseLayout: FunctionComponent<unknown> = ({ children }) => {
  return (
    <div className="min-h-full flex">
      <SideBar />
      <div className="flex-grow-1 px-8 py-4">{children}</div>
    </div>
  )
}

export default BaseLayout
