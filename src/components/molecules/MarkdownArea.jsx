import { useFormContext } from 'react-hook-form'

export default function MarkdownArea({name, rows, placeholder, updateValue}) {

  const { register, setValue, getValues } = useFormContext()

  const handlePaste = async (e) => {
    const pasteData = e.clipboardData.items[0]

    if (!pasteData.type.match('image.*')) return

    const file = pasteData.getAsFile()
    const dataUrl = await createDataUrl(file)

    const response = await uploadImage(dataUrl)

    const imageUrl = response.secure_url
    const imageSyntax = `![${file.name}](${imageUrl})`
    await insertImage({ e, imageSyntax })
  }

  const createDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = () => {
        reject(reader.error)
      }
      reader.readAsDataURL(file)
    })
  }

  const uploadImage = async (dataUrl) => {
    return await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify({
        image: dataUrl,
      }),
    }).then(res => res.json())
  }

  const insertImage = ({ e, imageSyntax }) => {
    const cursorPosition = e.target.selectionEnd
    const text = getValues(name)
    const textLength = text.length
    const beforeCursor = text.substring(0, cursorPosition)
    const afterCursor = text.substring(cursorPosition, textLength)
    setValue(name, beforeCursor + imageSyntax + afterCursor)
    updateValue()
  }

  return (
    <textarea
      className={'textarea'}
      {...register(name)}
      rows={rows}
      placeholder={placeholder}
      onPaste={handlePaste}
    />
  )
}
