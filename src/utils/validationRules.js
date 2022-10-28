export const emailValidationRules = {
  required: 'Поле обязательно для заполнения.',
  pattern: {
    value: /^[^@]+@[^.]+.[a-z]{2,4}$/i,
    message: 'Введите валидный email.',
  },
};

export const passwordValidationRules = {
  required: 'Поле обязательно для заполнения.',
  minLength: {
    value: 6,
    message: 'Минимальное количество символов - 6',
  },
};

export const nameValidationRules = {
  required: 'Поле обязательно для заполнения.',
  minLength: {
    value: 2,
    message: 'Минимальное количество символов - 2',
  },
  maxLength: {
    value: 25,
    message: 'Максимальное количество символов - 25',
  },
};

export const phoneValidationRules = {
  required: 'Поле обязательно для заполнения.',
  pattern: {
    value: /^[0-9]{12}$/i,
    message: 'Введите валидный номер телефона с кодом странны.',
  },
};
