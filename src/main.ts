import { version } from '@tensorflow/tfjs';

const mainDiv = document.querySelector('#main');
const canvas = document.querySelector('canvas');

if (mainDiv) {
  mainDiv.textContent = `Tensorflow JS version: ${version.tfjs}`;
}

if (canvas && canvas.getContext) {
  const ctx = canvas.getContext('2d');

  if (ctx) {      
    ctx.fillRect(25, 25, 100, 100);
  }
}
