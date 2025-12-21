import img01 from '@icons/contacts/01.png';
import img02 from '@icons/contacts/02.png';
import img03 from '@icons/contacts/03.png';
import img04 from '@icons/contacts/04.png';
import img05 from '@icons/contacts/05.png';

const contactsConfig = {
    title: 'Контакты',
    items: [
        {
            id: 'contacts01',
            icon: img01,
            name: 'Время работы',
            note: 'ПН-ВС с 10:00-21:00',
        },
        {
            id: 'contacts02',
            icon: img02,
            name: 'Телефон',
            note: '+7 (977) 910-50-53 ',
            link: 'tel:+79779105053',
        },
        {
            id: 'contacts03',
            icon: img03,
            name: 'E-mail',
            note: 'male@mail.ru',
            link: 'mailto:male@mail.ru',
        },
        {
            id: 'contacts04',
            icon: img04,
            name: 'VK',
            link: 'https://vk.com/male_serp',
            note: '@male',
        },
        {
            id: 'contacts05',
            icon: img05,
            name: 'Адрес',
            note: 'Московская область, Серпухов, улица Ворошилова, 130А, 3й этаж.',
        },
    ],
};
export default contactsConfig;
