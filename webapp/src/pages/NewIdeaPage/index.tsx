import { zCreateIdeaTrpcInput } from '@ideanick/backend/src/router/createIdea/input';
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { useState } from 'react';

import { Alert } from '../../components/Alert';
import { Button } from '../../components/Button';
import { FormItems } from '../../components/FormItems';
import { Input } from '../../components/Input';
import { Segment } from '../../components/Segment';
import { TextArea } from '../../components/TextArea';
import { trpc } from '../../lib/trpc';

export const NewIdeaPage = () => {
  const [succesMessageVisible, setsuccesMessageVisible] = useState(false);
  const [submittingError, setSubmittingError] = useState<string | null>(null);

  const createIdea = trpc.createIdea.useMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validate: withZodSchema(zCreateIdeaTrpcInput),
    onSubmit: async (values) => {
      try {
        await createIdea.mutateAsync(values);
        formik.resetForm();
        setsuccesMessageVisible(true);
        setTimeout(() => {
          setsuccesMessageVisible(false);
        }, 3000);
      } catch (error: any) {
        setSubmittingError(error.message);
        setTimeout(() => {
          setSubmittingError(null);
        }, 3000);
      }
    },
  });

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <FormItems>
          <Input name="name" label="Name" formik={formik} />
          <Input name="nick" label="Nick" formik={formik} />
          <Input
            name="description"
            label="Description"
            formik={formik}
            maxWidth={500}
          />
          <TextArea name="text" label="Text" formik={formik} />
          {!formik.isValid && !!formik.submitCount && (
            <div style={{ color: 'red' }}>Some fields are invalid</div>
          )}
          {!!submittingError && <Alert color={'red'}>{submittingError}</Alert>}
          {succesMessageVisible && <Alert color={'green'}>Idea created!</Alert>}
          <Button loading={formik.isSubmitting}>Create Idea</Button>
        </FormItems>
      </form>
    </Segment>
  );
};
