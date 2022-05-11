import Image from 'next/image'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface iCopyTextButton {
  text: string
  label?: string
}

const CopyTextButton: React.FC<iCopyTextButton> = ({
  text,
  label,
}: iCopyTextButton) => (
  <div>
    <Toaster />
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text)
        toast.success('Copied to clipboard')
      }}
      className="flex items-center justify-center rounded-md border-2 border-transparent p-2 align-middle text-lg font-bold text-blue-500 duration-200 ease-in-out scale-101 hover:border-blue-500"
    >
      <Image
        src="/assets/image/svg/action/copy.svg"
        alt="Copy icon"
        width={24}
        height={24}
      />
      <span className="ml-2 ">{label}</span>
    </button>
  </div>
)

CopyTextButton.defaultProps = {
  label: 'Copy Text',
}

export default CopyTextButton
