import { NextApiRequest, NextApiResponse } from 'next'
import { getNewReleases } from '../../lib/spotify'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNewReleases()
  const { albums } = await response.json()

  const newReleases = albums.items
    .filter((album: SpotifyApi.AlbumObjectSimplified) => album.type === 'album')
    .slice(0, 10)
    .map((album: SpotifyApi.AlbumObjectSimplified) => ({
      artist: album.artists
        .map((_artist: SpotifyApi.ArtistObjectSimplified) => _artist.name)
        .join(', '),
      songUrl: album.external_urls.spotify,
      title: album.name,
      images: album.images,
    }))

  return res.status(200).json({ newReleases })
}
