const JOB = 0
const SKILL = 1

const job0 = {
	title: 'construct',
	position: 'LT',
	dateStarted: '19 octover 2019',
}

const job1 = {
	title: 'chefs warehouse',
	position: 'cook',
	dateStarted: '19 octover 2018',
}


const skill0 = 'C'
const skill1 = 'javascript'
const skill2 = 'xml'


export const cvData = [
	{
		data: job0,
		type: 0,
	},
	{
		data: job1,
		type: 0,
	},
	{
		data: skill0,
		type: SKILL,
	},
	{
		data: skill1,
		type: SKILL,
	},
	{
		data: skill2,
		type: SKILL,
	}
]