'use strict';

const block2 = document.querySelector('.block2');
const block1 = document.querySelector('.block1');

const height_block1 = block1.offsetHeight;
block2.style.marginTop = height_block1 + 'px';