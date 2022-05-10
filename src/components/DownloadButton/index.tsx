import Image from 'next/image'
import React from 'react'

interface iDownloadButton {
  fileName: string
  label?: string
  src: string
}

const DownloadButton = ({ fileName, label, src }: iDownloadButton) => (
  <a
    href={src}
    download={fileName}
    className="ml-5 flex items-center justify-center rounded-md border-2 border-transparent p-2 align-middle text-lg font-bold text-blue-500  duration-200  ease-in-out hover:scale-105 hover:border-blue-500 cursor-pointer"
  >
    <Image
      src="/assets/image/svg/action/download.svg"
      alt={label}
      width={24}
      height={24}
    />
    <span className="ml-2">{label}</span>
  </a>
)
DownloadButton.defaultProps = {
  label: 'Download Image',
}

export default DownloadButton
