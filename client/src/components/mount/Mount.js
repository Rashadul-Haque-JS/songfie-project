import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addAudio} from '../../features/audioSlicer';
import { getAllSongs, getUsers } from '../../api/api'
import { addUsers } from '../../features/users/userSlicer';
import { getLocalStorage } from '../../common/localStorage'
import { addLogedUser, addToken } from '../../features/users/authSlicer'


const Mounts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchSong = async () => {
      const response = await getAllSongs()
      dispatch(addAudio(response.data))
      const userRes = await getUsers()
      dispatch(addUsers(userRes.data))
      dispatch(addLogedUser(getLocalStorage('user')))
      dispatch(addToken(getLocalStorage('token')))

    }

    fetchSong()

  }, [dispatch])

  return
}

export default Mounts






