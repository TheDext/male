import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps';

export function YandexMap() {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [54.920535, 37.436169],
                    zoom: 19,
                    behaviors: ['default'], // Включаем стандартное поведение
                }}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
                width="100%"
                height="500px"
            >
                <Placemark
                    geometry={[54.920535, 37.436169]}
                    options={{ draggable: true }} // Разрешаем перетаскивание маркера
                />
            </Map>
        </YMaps>
    );
}
