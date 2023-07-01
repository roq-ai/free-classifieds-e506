import * as yup from 'yup';

export const adValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  is_premium: yup.boolean().required(),
  business_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
