import { FormProvider } from 'react-hook-form'
import Issue from '../organisms/Issue'
import Trials from '../organisms/Trials'

export default function Editor(props) {

  return (
    <>
      <div className={'tile is-child'}>
        <h2 className={'title is-5 mt-4'}>解決したいこと</h2>
        <FormProvider {...props.methods}>
          <Issue/>
        </FormProvider>
      </div>
      <div className={'tile is-child'}>
        <Trials/>
      </div>
    </>
  )
}
