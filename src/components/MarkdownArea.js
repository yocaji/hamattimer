import { useFormContext } from 'react-hook-form'
import { db } from '../utils/db'

export default function MarkdownArea(props) {
  const { register, setValue, getValues } = useFormContext()

  const insertImage = async (e) => {
    const id = await saveImage(e)
    const screenshot = await db.screenshots.get(id)
    const blobUrl = URL.createObjectURL(screenshot.data)

    const cursorPosition = e.target.selectionEnd
    const value = getValues(props.name)
    const textLength = value.length
    const beforeCursor = value.substring(0, cursorPosition)
    const afterCursor = value.substring(cursorPosition, textLength)
    const name = `${screenshot.created_at}-${screenshot.data.name}`
    const imageSyntax = `![${name}](${blobUrl})`
    setValue(props.name, beforeCursor + imageSyntax + afterCursor)
  }
  const saveImage = async (e) => {
    const pasteData = e.clipboardData.items[0]
    if (!pasteData.type.match('image.*')) return

    return await db.screenshots.add({
      data: pasteData.getAsFile(),
      created_at: Date.now(),
    })
  }

  return (
    <textarea
      {...register(props.name)}
      defaultValue={props.value}
      onPaste={insertImage}
      className={'textarea'}
    />
  )
}
