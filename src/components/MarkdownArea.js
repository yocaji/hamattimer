import { useFormContext } from 'react-hook-form'

export default function MarkdownArea(props) {

  const { register, setValue, getValues } = useFormContext()

  const handlePaste = async (e) => {
    const pasteData = e.clipboardData.items[0]

    if (!pasteData.type.match('image.*')) return

    const file = pasteData.getAsFile()
    const url = await saveImage(file)
    const imageSyntax = `![${file.name}](${url})`
    await insertImage({ e, imageSyntax })
  }

  const saveImage = async (file) => {
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'hamattimer')
    data.append('cloud_name', 'hamattimer')
    return await fetch(
      'https://api.cloudinary.com/v1_1/hamattimer/image/upload', {
        method: 'post',
        body: data,
      }).then(res => res.json())
      .then(cloudinaryRes => cloudinaryRes.secure_url)
      .catch(err => console.log(err))
  }

  const insertImage = async ({ e, imageSyntax }) => {
    const cursorPosition = e.target.selectionEnd
    const value = getValues(props.name)
    const textLength = value.length
    const beforeCursor = value.substring(0, cursorPosition)
    const afterCursor = value.substring(cursorPosition, textLength)
    setValue(props.name, beforeCursor + imageSyntax + afterCursor)
    props.update()
  }

  return (
    <textarea
      {...register(props.name)}
      defaultValue={props.value}
      onPaste={handlePaste}
      className={'textarea'}
    />
  )
}
