import { useEffect } from 'react'

const Login = (): JSX.Element => {
  const data = {
    client_id: '6e788ef490c145a2b68233a8719de9c5',
    scopes: 'user-top-read',
    redirect_uri: 'http://localhost:3000/login',
    me: null,
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('refreshToken')
    const refreshToken = window.location.hash.substr(1).split('&')[0].split('=')[1]

    if (!storedToken && !refreshToken) {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${data.client_id}&response_type=token&redirect_uri=${data.redirect_uri}&scope=${data.scopes}&show_dialog=true`
    } else {
      localStorage.setItem('refreshToken', refreshToken)
      window.opener.closeSpotifyPopup()
    }
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl">Talking with Spotify...</h1>
    </div>
  )
}

export default Login
