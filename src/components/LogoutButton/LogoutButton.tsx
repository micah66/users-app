import router from '../../routes'
import { useLocalStorage } from '../../utils/hooks/useStorage'
import { TUser } from '../User/User'
import Button from '../common/Button/Button'

export default function LogoutButton() {
  const [, setActiveUser] = useLocalStorage<TUser | null>({
    key: 'activeUser',
    initValue: null,
  })
  return (
    <Button
      text="Logout"
      color="secondary"
      onClick={() => {
        setActiveUser(null)

        router.navigate({ to: '/login' })
      }}
    />
  )
}
