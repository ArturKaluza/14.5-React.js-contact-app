const contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

const App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className:'App'},
        React.createElement('h1', {className: 'title'}, 'Lista kontaktów'),
        React.createElement(ContactForm, {contact: ContactForm}),
          React.createElement(Contacts, {items: contacts}, {})
      )
    )
  }
})