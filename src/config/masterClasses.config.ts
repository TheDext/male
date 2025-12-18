import video01 from '@/assets/video/masterClasses/01.mp4';
import poster01 from '@img/masterClasses/01.png';
import video02 from '@/assets/video/masterClasses/02.mp4';
import poster02 from '@img/masterClasses/02.png';
import video03 from '@/assets/video/masterClasses/03.mp4';
import poster03 from '@img/masterClasses/03.png';
import video04 from '@/assets/video/masterClasses/04.mp4';
import poster04 from '@img/masterClasses/04.png';

const masterClassesConfig = {
    title: 'Мастер-классы',
    subtitle: 'Наши сотрудники учатся постоянно',
    items: [
        {
            id: 'mc01',
            video: video01,
            name: 'Old School и мужские стрижки в потоке',
            note: 'Мастер - класс от Богдана Бородина',
            poster: poster01,
        },
        {
            id: 'mc02',
            video: video02,
            name: 'Сервис, как конкурентное преимущество',
            note: 'Мастер - класс от Ивана Трубачева',
            poster: poster02,
        },
        {
            id: 'mc03',
            video: video03,
            name: 'Face Control',
            note: 'Мастер - класс Николая Генералова',
            poster: poster03,
        },
        {
            id: 'mc04',
            video: video04,
            name: 'Reels, ведение контента',
            note: 'Мастер классс от Анж (блогер, Барбер)',
            poster: poster04,
        },
    ],
};
export default masterClassesConfig;
