export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export const workTiles: WorkTile[] = [
  {
    description: `Here is`,
    title: `what I've been up to`,
    image: {
      src: '/static/images/mathgame2.png',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I build',
    title: 'Rentoor',
    image: {
      src: '/static/rentoor.png',
      width: 600,
      height: 554,
    },
  },

  {
    description: `I'm currently building`,
    title: 'nothanii',
    image: {
      src: '/static/slickin .png',
      width: 600,
      height: 717,
    },
  },
]
