@echo off
echo Atualizando o site...
"C:\Program Files\Git\bin\git.exe" add .
"C:\Program Files\Git\bin\git.exe" commit -m "Atualizacao do site"
"C:\Program Files\Git\bin\git.exe" push
echo.
echo Site atualizado com sucesso!
pause