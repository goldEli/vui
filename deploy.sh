git checkout release &&
git pull --rebase &&
git rebase main &&
git push --force &&
git checkout main &&
echo "open https://goldeli.github.io/vui/"