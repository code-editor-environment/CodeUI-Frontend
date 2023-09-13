export const defaultButtonCSS = `.button {}`;
export const defaultSwitchCSS = `/* The switch - the box around the slider */
.switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 30px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    transition: .4s;
}

.switch input:checked + .slider {
    background-color: #2196F3;
}

.switch input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

.switch input:checked + .slider:before {
    transform: translateX(1.5em);
}`;
export const defaultCheckboxCSS = `/* Hide the default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
}

/* Create a custom checkbox */
.checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
    background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
}`;
export const defaultCardCSS = `.card {
    width: 190px;
    height: 254px;
    background: lightgrey;
}`;
export const defaultSpinnerCSS = `.loader {}`;
export const defaultInputCSS = `.input {
    max-width: 190px;
}`;
