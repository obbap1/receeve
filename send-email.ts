import * as mailgun from "mailgun-js";
const WEBHOOK_SIGNING_KEY = '1cf0991b3ed95f29d785890fea066cde-4de08e90-032e944e'
const mg = mailgun({apiKey: '1cf0991b3ed95f29d785890fea066cde-4de08e90-032e944e', domain: 'sandboxc0662581b5ed48a3a877b759c8c0f9d5.mailgun.org'});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'paschalobba@gmail.com, paschal.obba@stu.cu.edu.ng',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log('EMAIL HAS BEEN SENT!!', {body});
});

