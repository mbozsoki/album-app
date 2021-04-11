import { useRouter } from 'next/dist/client/router'
import { FunctionComponent } from 'react'

const menuItems = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'discover',
    label: 'Discover',
  },
  {
    key: 'library',
    label: 'Your library',
  },
]

const SideBar: FunctionComponent<unknown> = () => {
  const router = useRouter()
  const currentRoute = router.route.substring(1)

  const handleKeyDown = () => {}

  return (
    <div className="py-8 bg-gray-900 bg-opacity-90">
      {menuItems.map((menuItem, index) => (
        <div
          key={index}
          className={
            'px-8 py-4 whitespace-nowrap cursor-pointer' +
            (menuItem.key === currentRoute ? ' border-l-4 border-solid border-green-400' : '')
          }
          onClick={() => (window.location.href = `/${menuItem.key}`)}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={index}
        >
          {menuItem.label}
        </div>
      ))}
    </div>
  )
}

export default SideBar
