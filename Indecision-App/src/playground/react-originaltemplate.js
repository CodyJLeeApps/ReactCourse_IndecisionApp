console.log('App.js is running')

const app = {
    title: 'Indecision App',
    description: 'This is some info about the app',
    options: ['One', 'Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.description && <p>{app.description}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'C. Lee',
    age: 28,
    location: 'Charlotte'
};
function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
    else {
        return undefined; // Implicitly returned when not defined as well
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'AnonyMouse'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot)