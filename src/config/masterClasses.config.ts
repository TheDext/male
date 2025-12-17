import video01 from '@/assets/video/masterClasses/01.mp4';
import video02 from '@/assets/video/masterClasses/02.mp4';
import video03 from '@/assets/video/masterClasses/03.mp4';
import video04 from '@/assets/video/masterClasses/04.mp4';

const masterClassesConfig = {
    title: 'Мастер-классы',
    subtitle: 'Наши сотрудники учатся постоянно',
    items: [
        {
            id: 'mc01',
            video: video01,
            name: 'Old School и мужские стрижки в потоке',
            note: 'Мастер - класс от Богдана Бородина',
        },
        {
            id: 'mc02',
            video: video02,
            name: 'Сервис, как конкурентное преимущество',
            note: 'Мастер - класс от Ивана Трубачева',
        },
        {
            id: 'mc03',
            video: video03,
            name: 'Face Control',
            note: 'Мастер - класс Николая Генералова',
        },
        {
            id: 'mc04',
            video: video04,
            name: 'Reels, ведение контента',
            note: 'Мастер классс от Анж (блогер, Барбер)',
        },
    ],
};
export default masterClassesConfig;
