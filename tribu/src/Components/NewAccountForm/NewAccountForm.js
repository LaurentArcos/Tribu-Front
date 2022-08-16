/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

// Imports locaux
import '../../styles/styles.scss';

function NewAccountForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <form
      className="newaccount"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <input type="text" {...register('prénom')} />
      <input type="text" {...register('nom')} />
      <input type="text" {...register('ville')} />
      <input type="email" {...register('email')} />
      <input type="text" {...register('avatar')} />
      <input type="text" {...register('description')} />
      <input type="password" {...register('mot de passe')} />
      <input type="password" {...register('confirmation mot de passe')} />
      <input type="submit" />
    </form>
  );
}

export default NewAccountForm;
