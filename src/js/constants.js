const FORM = document.querySelector('.form')
const RESULT = document.querySelector('.counter__result')

export const ACTIVITY_COEFFICIENT = new Map([
    ['min', 1.2],
    ['low', 1.375],
    ['medium', 1.55],
    ['high', 1.725],
    ['max', 1.9]
]);

const FORM_ELEMENTS = {
    GENDER: FORM.elements.gender,
    AGE: FORM.elements.age,
    HEIGHT: FORM.elements.height,
    WEIGHT: FORM.elements.weight,
    ACTIVITY: FORM.elements.activity,
    SUBMIT_BUTTON: FORM.elements.submit,
    RESET_BUTTON: FORM.elements.reset,
}

const RESULT_ELEMENTS = {
    NORM: RESULT.querySelector('#calories-norm'),
    MINIMAL: RESULT.querySelector('#calories-minimal'),
    MAXIMAL: RESULT.querySelector('#calories-maximal'),
}


export { FORM, RESULT, FORM_ELEMENTS, RESULT_ELEMENTS }
