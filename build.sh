cd dev;
npm run build;

echo 'copy static dir..'
cp -r build/static ../;
echo 'copy index.html..'
cp build/index.html ../;
echo 'complete!'
