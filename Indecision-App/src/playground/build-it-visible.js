
console.log('build-it-visible.js is running');

const toggleVisibility = () => {
    visibility = !visibility;
    renderPage();
}

let visibility = false;
const appRoot = document.getElementById('app');
const renderPage = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div><p>This is an example React application used to practice various skills in the Udemy course.</p></div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}
renderPage();
{app.options.length > 0 ? 'Here are your options' : 'No options'}