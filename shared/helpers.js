module.exports = app => {
	const lorem = app.get("lorem");
	const moment = app.get("moment");
	const random = app.get("random");

	const loremipsum = () => (
		lorem({
			count: random(3,10),                 // Number of words, sentences, or paragraphs to generate.
			units: 'paragraphs',                 // Generate words, sentences, or paragraphs.
			sentenceLowerBound: random(5,20),    // Minimum words per sentence.
			sentenceUpperBound: random(5,20),    // Maximum words per sentence.
			paragraphLowerBound: random(5,20),   // Minimum sentences per paragraph.
			paragraphUpperBound: random(5,20),   // Maximum sentences per paragraph.
			format: 'plain',                     // Plain text or html.
			suffix: "<br />"                     // The character to insert between paragraphs.
		})
	);

	const tokenGenerator = (str, tlen) => {
		const arr = [...str];
		const max = arr.length - 1;
		let token = '';
		for (i=0; i < tlen; i++){
			const int = random(max);
			token += arr[int];
		}
		return token;
	}

	return {
		beginofMonth: () => (moment().startOf('month')),
		convertDateToISO: date => (moment(date).utcOffset(-7).toISOString(true)),
		createRandomText: () => (loremipsum()),
		createRandomToken: () => (tokenGenerator('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$/.', 64)),
		createUniqueTemplateName: name => (name.trim().toLowerCase().replace(/[^\w\s]/gi, '').replace(/ /g, '-')),
		currentDate: () => (moment().utcOffset(-7).toISOString(true)),
		endofMonth: () => (moment().endOf('month')),
		parseStringToFloat: str => (parseFloat(str)),
		parseStringToNum: str => (parseInt(str, 10)),
		sendError: (err, res, done) => {
			return res.status(500).json({ err: err.toString() });
			done();
		}
	}
}
