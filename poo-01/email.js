class Email {
    constructor(from, to, subject, message) {
        this._from = from;
        this._to = to;
        this._subject = subject;
        this._message = message;
    };

    setSubject(newSubject) {
        if (newSubject.length <= 40) this._subject = newSubject;
    };

    getSubject() {
        return this._subject;
    };

    getFrom() {
        return this._from;
    };

    getTo() {
        return this._to;
    };

    getContent() {
        return `
        From ${this._from} to ${this._to}
        ${this._subject}

        ${this._message}
        `;
    };

};

const email = new Email('Lucas', 'Zé', 'Learning OOP', 'OOP is cool!!!');
email.setSubject('blablabla');


console.log(email.getSubject(), email.getFrom(), email.getTo(), email.getContent());

