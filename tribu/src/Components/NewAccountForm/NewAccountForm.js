/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

// Imports locaux
import '../../styles/styles.scss';

function NewAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      city: '',
      email: '',
      avatar: '',
      description: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <form
      className="new-account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register('firstName', {
          required: 'Le prénom est obligatoire',
          minLength: {
            value: 3,
            message: 'Le prénom doit contenir 3 lettres minimum',
          },
        })}
        type="text"
        placeholder="Prénom"
      />
      <p>{errors.firstName?.message}</p>

      <input
        {...register('lastName', {
          required: true,
          minLength: {
            value: 3,
            message: 'Le nom doit contenir 3 lettres minimum',
          },
        })}
        type="text"
        placeholder="Nom"
      />
      <p>{errors.lastName?.message}</p>

      <input
        {...register('city', { required: true })}
        type="text"
        placeholder="Ville"
      />

      <input
        {...register('email', { required: true })}
        type="email"
        placeholder="Email"
      />

      <input
        {...register('description')}
        type="text"
        placeholder="Description"
      />

      <input
        {...register('password', { required: true })}
        type="password"
        placeholder="Mot de passe"
      />

      <input
        {...register('passwordConfirm', { required: true })}
        type="password"
        placeholder="Confirmation du mot de passe"
      />

      <input
        {...register('avatar')}
        type="file"
        placeholder="Avatar"
        accept="image/png, image/jpeg"
      />

      <input className="new-account_button" type="submit" />
    </form>
  );
}

export default NewAccountForm;
