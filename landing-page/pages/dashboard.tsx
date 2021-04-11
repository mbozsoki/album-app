import { NextPage } from 'next'
import BaseLayout from '../layouts/base-layout'

type Album = {
  artist: string
  title: string
  images: {
    url: string
    width: string
    height: string
  }[]
}

type Props = {
  newReleases?: Album[]
}

const Dashboard: NextPage<Props> = ({ newReleases }: Props) => {
  return (
    <BaseLayout>
      <h2 className="text-lg mb-6">New releases</h2>
      <div className="flex flex-wrap gap-x-10 gap-y-8 justify-center">
        {newReleases &&
          newReleases.map((album: Album, index: number) => (
            <div key={index} className="w-40">
              <img
                className="w-40 max-w-xs max-h-xs rounded-md mb-4"
                src={album.images[0].url}
                alt={(album.artist + ' ', album.title)}
              />
              <p>{album.title}</p>
              <p className="text-gray-400">{album.artist}</p>
            </div>
          ))}
      </div>
    </BaseLayout>
  )
}

Dashboard.getInitialProps = async ({ req }) => {
  // const res = await fetch('http://localhost:3000/api/new-releases')
  // const { newReleases } = await res.json()
  return { newReleases: [] }
}

export default Dashboard
