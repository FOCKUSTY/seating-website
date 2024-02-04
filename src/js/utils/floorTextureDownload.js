const body = document.getElementById('body')

const backgroundStyleHistory = [];
let background = '';

body.style.background =
`\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 0 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 10%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 10% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 20%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 20% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 30%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 30% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 40%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 40% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 50%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 50% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 60%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 60% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 70%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 70% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 80%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 80% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 90%,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 90% 0,\n\
url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 2, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-x 0 100%,\n\
#fff url(../Photo/floor/floor_0${pseudoRandomNumber(1, 4, 1, 0, backgroundStyleHistory, null, null, true, false, true)}@5x.png) repeat-y 100% 0\n\
`;

body.style.backgroundSize = '150px';