# Plasma workflows charts

## Host

[GitHub page](https://yakutoc.github.io/)

## Статус [MVP]

Используется для отображения и построения графиков по времени исполнения CI workflows в проекте "Plasma".

На текущий момент данные статичны. В последующем данные будут браться через API.

## График

**X** - период за который были собраны данные, например `"2023-01-16..2023-01-22"`;

**Y** - временная шкала в минутах, на текущий момент это 90 процентиль;

## Использование

1. `git clone repo`;
2. `npm install`;
3. `npm run dev` - режим разработки;
4. `npm run build` - сборка проекта;

Результат ваших изменений будет в директории - **docs**.

Так как данные расположены на **github pages** то для отображения ваших изменений достаточно сделать `commit` и внести эти изменения в `master` ветку.


### Как добавить новые данные для графика?

Новые данные в формате `.json` необходимо класть в директорию `./data`.

В файле `getData.ts` нужно добавить `import * as youre_data_file from '../../data/2023-05-08..2023-05-14.json'`.

И функция `getData()` должна вернуть данные из этого `json`.

```js
export function getData() {
  return [
    ...previosState,
    ...data,
  ]
}
```
