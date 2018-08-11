# Задание 2 — сверстать макет

## РЕШЕНИЕ
Для удобства залил сверстанный сайт на github pages [https://evstarostin.github.io/YANDEX-SHRI-2018__TASK2/](https://evstarostin.github.io/YANDEX-SHRI-2018__TASK2/) 

### Краткое описание
Для того, чтобы открыть **модальное окно регулировки *температуры/света*** нужно кликнуть на устройство в разделе *"Избранные устройства"*.  
Для того, чтобы открыть **модальное окно регулировки *температуры теплого пола*** нужно кликнуть на **3-е устройство Xiaomi Warm Floor** в разделе *"Избранные устройства"*.  
Пришлось заменить 3-е устройства из макета *Elgato Eve Degree Connected* на *Xiaomi Warm Floor*, чтобы была возможность посмотреть работу регулятора **температуры теплого пола**.  
  
Устройства в разделе *"Главное"*, *"Избранные устройства"*, *"Избранные сценарии (мобильная версия)"* листаются  
с помощью **нативного браузерного скролла**, также как и **регуляторы температуры/света**.  
Также на больших экранах избранные устройства и избранные сценарии **можно листать с помощью стрелок**.  
Для соответствия макету добавил только 5 избранных сценариев, остальные закомментированы.  
Раскомментируйте `<li></li>` в блоке `<ul class="scenarios"></ul>`, чтобы проверить как они листаются при переполнении.  
  
### Структура
В соответствии с требованием к оптимизации производительности и автоматизации в качестве сборщика был выбран **webpack**. 
В проекте используются следующие модули:  
1. **webpack-dev-server** для автоматической перезагрузки страницы(*live reload*) в процессе разработки;
2. **less-loader** для компиляции *less* в *css* (подержка импорта, переменных, миксинов и вложенности);
3. **PostCSS**, в частности *autoprefixer* (для расстановки вендорных префиксов для лучшей совместимости) и *cssnano* для минификации css кода;
4. **normalize.css** для лучшей кроссбраузерности в стилях по умолчанию;

Исходники лежат в папке *./src*, собранный проект в папке *./dist*  
Файл с разметкой **index.html** расположен в корне папки *./src*.  
  
**Стили** расположены в папке *./src/less*:  
- ***main.less*** - основные стили;  
- ***_const.less*** - less переменные со значениями цвета, отступов, радиуса загругления границ, шрифтов, размеров экрана для медиа-запросов и т.д.;  
- ***_mobile.less*** - стили для экранов шириной меньше 992px;  
- ***_retina.less*** - стили для экранов с высокой плотностью пикселей;  
  
**JS код** расположен в папке *./src/js*:  
- ***main.js*** - в него импортируется код из всех остальных js файлов;  
- ***menu.js*** - появление/скрытие меню в мобильной версии;  
- ***main-info.js*** - скрытие/появление двойной стрелки вверх при скролле в разделе "Главное";  
- ***fav-scenarios.js*** - листание избранных сценариев на большом экране кликом по стрелкам;  
- ***fav-devices.js*** - фильтр избранных устройств, листание устройств на большом экране кликом по стрелкам, анимация появления модального окна,  
  подстановка в модальное окно названия, статуса работы, иконки температуры/света устройства и т.д;  
- ***slider.js*** - управление регулятором света/температуры;  
- ***round-slider.js*** - управление регулятором температуры теплого пола;  

### Запуск
`npm run start` - запустить webpack-dev-server  
`npm run build` - собрать проект  
