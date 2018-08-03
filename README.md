# Задание 2 — сверстать макет

В соответствии с требованием к оптимизации производительности и автоматизации в качестве сборщика выбрал webpack. В проекте используются следующие модули:
1. webpack-dev-server для автоматической перезагрузки (live reload) при сохранении в процессе разработки;
2. less-loader для компиляции less в css (подержка импорта, переменных, миксинов и вложенности);
3. PostCSS, в частности autoprefixer (для расстановки вендорных префиксов для лучшей совместимости) и cssnano для минификации css кода;
4. normalize.css для лучшей кроссбраузерности в стилях по умолчанию

Исходники лежат в папке ./src, собранный проект в папке ./dist
Заустить webpack-dev-server можно введя в терминале: npm run start
Собрать проект: npm run build

Опубликованная версия доступна на github pages https://evstarostin.github.io/YANDEX-SHRI-2018__TASK2/  




