import { FormProvider } from 'react-hook-form';
import Issue from '../organisms/Issue';
import Trials from '../organisms/Trials';

export default function Editor({ methods }) {
  return (
    <>
      <div className={'tile is-child'}>
        <FormProvider {...methods}>
          <Issue />
        </FormProvider>
      </div>
      <div className={'tile is-child'}>
        <Trials />
      </div>
    </>
  );
}
