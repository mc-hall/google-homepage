let user = prompt('login?','');

let username = (user == 'Employee') ? 'Hello':
(user == 'Director') ? 'Greetings':
(user == '') ? 'No login': ' Who are you?';
