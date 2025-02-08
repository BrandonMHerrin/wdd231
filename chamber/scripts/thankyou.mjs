import utils from './utils.mjs';

function parseSubmittedFormValues() {
    const valueString = window.location.search.slice(1);
    const valueArray = valueString.split('&').map((entry) => {
        const recordArray = entry.split('=')
        recordArray[1] = recordArray[1].replace(/\+/g, ' ');
        return recordArray;
    });
    const formValues = Object.fromEntries(valueArray);
    formValues.email = formValues.email.replace('%40', '@');
    return formValues
}

function renderFormValues(formValues) {
    const timestamp = parseInt(formValues.timestamp);
    const timeReceived = new Date(timestamp).toLocaleString();
    utils.qs('#first').value = formValues.first;
    utils.qs('#last').value = formValues.last;
    utils.qs('#title').value = formValues.title;
    utils.qs('#email').value = formValues.email;
    utils.qs('#phone').value = formValues.phone;
    utils.qs('#business').value = formValues.business;
    utils.qs('#membership').value = formValues.membership;
    utils.qs('#description').value = formValues.description;
    utils.qs('#timestamp').textContent = `
        Form submitted at ${timeReceived}
    `;
}

function Page() {
    const formValues = parseSubmittedFormValues();
    renderFormValues(formValues);
}

Page();