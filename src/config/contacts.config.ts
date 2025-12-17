import img01 from '@icons/contacts/01.png';
import img02 from '@icons/contacts/02.png';
import img03 from '@icons/contacts/03.png';
import img04 from '@icons/contacts/04.png';

const contactsConfig = {
    title: 'Контакты',
    items: [
        {
            id: 'contacts01',
            icon: img01,
            name: 'Время работы',
            note: 'c 9:00 до 20:00 ежедневно',
        },
        {
            id: 'contacts02',
            icon: img02,
            name: 'Телефон',
            note: '+7 (922) 699-46-55',
        },
        {
            id: 'contacts03',
            icon: img03,
            name: 'E-mail',
            note: 'male@mail.ru',
        },
        {
            id: 'contacts04',
            icon: img04,
            name: 'VK',
            note: '@male',
        },
    ],
};
export default contactsConfig;
