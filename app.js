function calcNumbers(result) {
    form.displayResult.value = form.displayResult.value + result;
}

function clearResult() {
    form.displayResult.value = '';
}

function calculateResult() {
    if (form.displayResult.value != '') {

        try {
            if (form.displayResult.value.includes('cos') || form.displayResult.value.includes('sin') || form.displayResult.value.includes('tan') || form.displayResult.value.includes('log')) {

                let result = form.displayResult.value.substr(3);

                result = Number(result);

                console.log(result);

                if (form.displayResult.value.includes('cos')) {

                    form.displayResult.value = Math.cos(result);
                }

                else if (form.displayResult.value.includes('tan')) {

                    form.displayResult.value = Math.tan(result);
                }

                else if (form.displayResult.value.includes('sin')) {

                    form.displayResult.value = Math.sin(result);
                }

                else if (form.displayResult.value.includes('log')) {

                    form.displayResult.value = Math.log2(result);
                }

                else {

                    form.displayResult.value = eval(form.displayResult.value)
                }

            } else {
                form.displayResult.value = eval(form.displayResult.value);
            }
        } catch (error) {

            form.displayResult.value = "Invalid Syntax";
        }

    }
}