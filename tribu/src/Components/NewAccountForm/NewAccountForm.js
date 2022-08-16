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
      <input {...register('prénom')} type="text" placeholder="Prénom" />
      <input {...register('nom')} type="text" placeholder="Nom" />
      <input {...register('ville')} type="text" placeholder="Ville" />
      <input {...register('email')} type="email" placeholder="Email" />
      <input {...register('avatar')} type="text" placeholder="Avatar" />
      <input {...register('description')} type="text" placeholder="Description" />
      <input {...register('mot de passe')} type="password" placeholder="Mot de passe" />
      <input {...register('confirmation mot de passe')} type="password" placeholder="Confirmation du mot de passe" />
      <input type="submit" />
    </form>
  );
}

export default NewAccountForm;
