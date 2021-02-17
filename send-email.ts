import * as mailgun from "mailgun-js";
const WEBHOOK_SIGNING_KEY = ''
const mg = mailgun({apiKey: '', domain: ''});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'paschalobba@gmail.com, paschal.obba@stu.cu.edu.ng',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log('EMAIL HAS BEEN SENT!!', {body});
});

