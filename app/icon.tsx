import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#CE422B',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          border: '2px solid #CE422B',
          borderRadius: '6px',
        }}
      >
        $
      </div>
    ),
    {
      ...size,
    }
  )
}
