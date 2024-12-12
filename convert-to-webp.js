import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['src/assets/*.{jpg,png}'], {
    destination: 'src/assets/webp',
    plugins: [
      imageminWebp({ quality: 80 })
    ]
  });
})();