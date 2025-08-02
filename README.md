# Table Form

Интерфейс таблицы с полной поддержкой поиска, фильтрации, сортировки и пагинации. Все действия работают через API: при изменении параметров запросов данные обновляются на лету.
Проект разработан с React, TypeScript и архитектурой ITCSS.

## Технологии

- React (v18+)
- TypeScript
- Vite
- Axios
- React Hook Form
- Mantine UI, SCSS (ITCSS)
- ESLint + Prettier

## Установка

```bash
git clone https://github.com/alisher134/table-form.git
cd table-form
npm install
```

## Скрипты

```bash
npm run start       # локальный запуск
npm run build       # сборка проекта
npm run lint        # линтинг кода
```

## Структура проекта
```bash
Копировать
Редактировать
src/
├── assets/         # изображения, иконки, шрифты
├── components/     # Все компоненты
│ ├── layout/       # Компоненты для общей структуры страницы
│ ├── shared/       # Универсальные UI-компоненты
├── constants/      # константы проекта
├── helpers/        # вспомогательные функции
├── hooks/          # кастомные React-хуки
├── styles/         # глобальные стили по методологии ITCSS
│ ├── settings/     # переменные
│ ├── tools/        # mixins, функции
│ ├── generic/      # normalize, reset
│ ├── elements/     # базовые HTML-элементы
│ ├── objects/      # абстрактные повторно используемые layout-структуры
│ ├── components/   # стили UI-компонентов
│ └── utilities/    # утилиты
├── App.tsx         # корневой компонент приложения
└── main.tsx        # точка входа
```

## Автор

- [@alisherr134](https://t.me/alisherr134) — Frontend разработчик  
