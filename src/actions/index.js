export const PERSON_SELECT = 'person_select';
export const DEFAULT_PERSON = 'default_person';

const data = [{
        name: 'Zubair',
        fname: 'Sheikh Zubair',
        logo: 'SZA',
        pic: ' put picture url here'
        },
    {
        name: 'Zaeem',
        fname: 'Sheikh Zaeem',
        logo: 'SZE',
        pic: ' put picture url here'    }, 
    {
        name: 'Jawwad',
        fname: 'Jawwad Ali',
        logo: 'JA',
        pic: ' put picture url here'    },
    {
        name: 'Muneeb',
        fname: 'Muneeb Ahmed',
        logo: 'MS',
        pic: ' put picture url here'    },
    {
        name: 'Ahmed',
        fname: 'Ahmed Raza',
        logo: 'AR',
        pic: ' put picture url here'    },
    {
        name: 'Fashi',
        fname: 'Fashi Uddin',
        logo: 'FU',
        pic: ' put picture url here'    }
];
export function defaultPerson () {
    return {
        type: DEFAULT_PERSON,
        payload: data[0]
    }
}
export function changePerson(id) {
    return {
        type: PERSON_SELECT,
        payload: data[id]
    }
}