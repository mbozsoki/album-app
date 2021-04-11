import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

const Home = (): JSX.Element => {
  const router = useRouter()

  const login = () => {
    const popup = window.open(
      'http://localhost:3000/login',
      'Login with Spotify',
      'width=800,height=600'
    ) as Window

    // @ts-ignore
    window.closeSpotifyPopup = () => {
      popup.close()
      router.push('/dashboard')
    }
  }

  useEffect(() => {
    console.log('check refreshToken')
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken) {
      router.push('/dashboard')
    }
  }, [router])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-12">Album app</h1>
      <button
        className="w-min py-2 px-10 rounded-full bg-green-400 text-black text-lg"
        onClick={() => login()}
      >
        Login
      </button>
    </div>
  )
}

export default Home
