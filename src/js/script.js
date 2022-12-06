import { FORM, RESULT, FORM_ELEMENTS, RESULT_ELEMENTS, ACTIVITY_COEFFICIENT } from './constants.js'

function enabledButton(button) {
    button.removeAttribute('disabled')
}

function disabledButton(button) {
    button.setAttribute('disabled', true)
}

function handleResetForm() {
    hideResult()
    disabledButton(FORM_ELEMENTS.SUBMIT_BUTTON)
    disabledButton(FORM_ELEMENTS.RESET_BUTTON)
}

function handleButtonsState() {
    const age = FORM_ELEMENTS.AGE.value
    const height = FORM_ELEMENTS.HEIGHT.value
    const weight = FORM_ELEMENTS.WEIGHT.value

    if (age > 0 || height > 0 || weight > 0) {
        enabledButton(FORM_ELEMENTS.RESET_BUTTON)
    } else {
        disabledButton(FORM_ELEMENTS.RESET_BUTTON)
    }

    if (age > 0 && height > 0 && weight > 0) {
        enabledButton(FORM_ELEMENTS.SUBMIT_BUTTON)
    } else {
        disabledButton(FORM_ELEMENTS.SUBMIT_BUTTON)
    }
}

function calculateCalorie({ gender, age, height, weight, activity }) {
    let calorie = gender === 'male' ? (10 * weight) + (6.25 * height) - (5 * age) + 5:
        (10 * weight) + (6.25 * height) - (5 * age) - 161

    const resultCalories = {
        minimal: 0,
        normal: 0,
        maximal: 0
    }

    resultCalories.normal = Math.round(calorie * activity)
    resultCalories.minimal = Math.round(resultCalories.normal * 0.85)
    resultCalories.maximal = Math.round(resultCalories.normal * 1.15)

    return resultCalories
}

function showResult() {
    RESULT.classList.remove('counter__result--hidden')
}

function hideResult() {
    RESULT.classList.add('counter__result--hidden')
}

function setResult({ minimal, normal, maximal }) {
    RESULT_ELEMENTS.MINIMAL.textContent = minimal
    RESULT_ELEMENTS.NORM.textContent = normal
    RESULT_ELEMENTS.MAXIMAL.textContent = maximal
}

function handleSubmitForm(evt) {
    evt.preventDefault()
    const measurements = {
        gender: FORM_ELEMENTS.GENDER.value,
        age: FORM_ELEMENTS.AGE.value,
        height: FORM_ELEMENTS.HEIGHT.value,
        weight: FORM_ELEMENTS.WEIGHT.value,
        activity: ACTIVITY_COEFFICIENT.get(FORM.elements.activity.value),
    }

    setResult(calculateCalorie(measurements))
    showResult()
}

FORM_ELEMENTS.AGE.addEventListener('input', handleButtonsState)
FORM_ELEMENTS.HEIGHT.addEventListener('input', handleButtonsState)
FORM_ELEMENTS.WEIGHT.addEventListener('input', handleButtonsState)

FORM.addEventListener('reset', handleResetForm)
FORM.addEventListener('submit', handleSubmitForm)
